import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCopy, FaCheck } from 'react-icons/fa';

function CodeGenerator() {
    const [feature, setFeature] = useState('');
    const [copied, setCopied] = useState(false);

    const codeSnippets = {
        'API Integration': {
            language: 'dart',
            code: `Future<dynamic> fetchData() async {
  try {
    final response = await http.get(Uri.parse('your_api_endpoint'));
    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    }
    throw Exception('Failed to load data');
  } catch (e) {
    print('Error: \$e');
    return null;
  }
}`,
            description: 'Basic API integration with error handling in Flutter'
        },
        'Local Storage': {
            language: 'swift',
            code: `func saveData(_ data: Any, forKey key: String) {
    UserDefaults.standard.set(data, forKey: key)
}

func getData(forKey key: String) -> Any? {
    return UserDefaults.standard.object(forKey: key)
}`,
            description: 'Local storage utilities in Swift'
        },
        'Authentication': {
            language: 'dart',
            code: `class AuthService {
  Future<User?> signIn(String email, String password) async {
    try {
      final credential = await FirebaseAuth.instance
          .signInWithEmailAndPassword(email: email, password: password);
      return credential.user;
    } catch (e) {
      print('Sign in error: \$e');
      return null;
    }
  }
}`,
            description: 'Firebase authentication in Flutter'
        }
    };

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#112240] p-4 md:p-6 rounded-lg shadow-xl w-full"
        >
            <h3 className="text-lg md:text-xl font-bold text-[#64ffda] mb-3 md:mb-4 flex items-center gap-2">
                <FaCode className="text-base md:text-lg" />
                AI Code Snippet Generator
            </h3>

            <div className="space-y-4 md:space-y-6">
                <div className="flex gap-2 flex-wrap">
                    {Object.keys(codeSnippets).map((snippetType) => (
                        <button
                            key={snippetType}
                            onClick={() => setFeature(snippetType)}
                            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors text-sm md:text-base ${feature === snippetType
                                ? 'bg-[#64ffda] text-[#0a192f]'
                                : 'bg-[#0a192f] text-gray-300 hover:bg-[#64ffda]/10'
                                }`}
                        >
                            {snippetType}
                        </button>
                    ))}
                </div>

                {feature && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3 md:space-y-4"
                    >
                        <p className="text-gray-400 text-sm md:text-base">
                            {codeSnippets[feature].description}
                        </p>

                        <div className="relative">
                            <pre className="bg-[#0a192f] p-3 md:p-4 rounded-lg overflow-x-auto text-xs md:text-sm">
                                <code className={`language-${codeSnippets[feature].language} text-gray-300`}>
                                    {codeSnippets[feature].code}
                                </code>
                            </pre>

                            <button
                                onClick={() => copyToClipboard(codeSnippets[feature].code)}
                                className="absolute top-2 right-2 p-1.5 md:p-2 rounded-lg bg-[#112240] text-gray-300 hover:text-[#64ffda] transition-colors text-sm md:text-base"
                                title={copied ? "Copied!" : "Copy code"}
                            >
                                {copied ? <FaCheck /> : <FaCopy />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

export default CodeGenerator; 