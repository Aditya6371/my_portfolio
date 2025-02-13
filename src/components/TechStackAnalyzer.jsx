import React, { useState } from 'react';
import { motion } from 'framer-motion';

function TechStackAnalyzer() {
    const [projectType, setProjectType] = useState('');
    const [requirements, setRequirements] = useState([]);
    const [analysis, setAnalysis] = useState(null);

    const techStacks = {
        'Mobile App': {
            recommended: ['Flutter', 'Swift', 'Firebase'],
            alternative: ['React Native', 'Kotlin'],
            pros: [
                'Cross-platform development',
                'Native performance',
                'Rich UI capabilities'
            ],
            cons: [
                'Platform-specific knowledge needed',
                'Larger app size'
            ]
        },
        'Web App': {
            recommended: ['React.js', 'Node.js', 'MongoDB'],
            alternative: ['Vue.js', 'Express.js'],
            pros: [
                'Wide browser support',
                'Easy deployment',
                'Rich ecosystem'
            ],
            cons: [
                'Browser compatibility issues',
                'SEO challenges for SPAs'
            ]
        },
        'AI Integration': {
            recommended: ['Python', 'TensorFlow', 'Flask'],
            alternative: ['PyTorch', 'FastAPI'],
            pros: [
                'Strong ML libraries',
                'Good documentation',
                'Active community'
            ],
            cons: [
                'Resource intensive',
                'Requires specialized knowledge'
            ]
        }
    };

    const handleAnalyze = (type) => {
        setProjectType(type);
        setAnalysis(techStacks[type]);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#112240] p-6 rounded-lg shadow-xl"
        >
            <h3 className="text-xl font-bold text-[#64ffda] mb-4">
                Tech Stack Analyzer
            </h3>

            <div className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                    {Object.keys(techStacks).map((type) => (
                        <button
                            key={type}
                            onClick={() => handleAnalyze(type)}
                            className={`px-4 py-2 rounded-lg transition-colors ${projectType === type
                                    ? 'bg-[#64ffda] text-[#0a192f]'
                                    : 'bg-[#0a192f] text-gray-300 hover:bg-[#64ffda]/10'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {analysis && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 space-y-6"
                    >
                        <div>
                            <h4 className="text-gray-300 font-medium">Recommended Stack:</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {analysis.recommended.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-gray-300 font-medium">Alternative Options:</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {analysis.alternative.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="px-3 py-1 bg-[#0a192f] text-gray-300 rounded-full text-sm"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-gray-300 font-medium">Pros:</h4>
                                <ul className="mt-2 list-disc list-inside text-gray-400">
                                    {analysis.pros.map((pro, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            {pro}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-gray-300 font-medium">Cons:</h4>
                                <ul className="mt-2 list-disc list-inside text-gray-400">
                                    {analysis.cons.map((con, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            {con}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

export default TechStackAnalyzer; 