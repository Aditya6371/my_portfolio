import React, { useState } from 'react';
import { motion } from 'framer-motion';

function SkillAnalyzer() {
    const [selectedRole, setSelectedRole] = useState('');
    const [analysis, setAnalysis] = useState(null);

    const skillMatrix = {
        'Mobile Developer': {
            skills: ['Flutter', 'Swift', 'iOS Development', 'REST APIs'],
            match: 90,
            strengths: ['Mobile Development', 'Cross-platform expertise'],
            suggestions: ['React Native', 'Android Development']
        },
        'Full Stack Developer': {
            skills: ['Python', 'Java', 'Web Development'],
            match: 75,
            strengths: ['Backend Development', 'API Integration'],
            suggestions: ['React.js', 'Node.js']
        },
        'AI/ML Engineer': {
            skills: ['Python', 'Data Analysis'],
            match: 60,
            strengths: ['Python Programming'],
            suggestions: ['Machine Learning', 'TensorFlow']
        }
    };

    const handleAnalyze = (role) => {
        setSelectedRole(role);
        setAnalysis(skillMatrix[role]);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#112240] p-6 rounded-lg shadow-xl"
        >
            <h3 className="text-xl font-bold text-[#64ffda] mb-4">
                AI Skill Analysis
            </h3>
            <div className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                    {Object.keys(skillMatrix).map((role) => (
                        <button
                            key={role}
                            onClick={() => handleAnalyze(role)}
                            className={`px-4 py-2 rounded-lg transition-colors ${selectedRole === role
                                    ? 'bg-[#64ffda] text-[#0a192f]'
                                    : 'bg-[#0a192f] text-gray-300 hover:bg-[#64ffda]/10'
                                }`}
                        >
                            {role}
                        </button>
                    ))}
                </div>

                {analysis && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 space-y-4"
                    >
                        <div className="relative pt-1">
                            <div className="text-gray-300 mb-2">Match Score: {analysis.match}%</div>
                            <div className="overflow-hidden h-2 bg-[#0a192f] rounded">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${analysis.match}%` }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-[#64ffda] h-full rounded"
                                />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-gray-300 font-medium">Key Strengths:</h4>
                            <ul className="list-disc list-inside text-gray-400">
                                {analysis.strengths.map((strength, index) => (
                                    <li key={index}>{strength}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-gray-300 font-medium">Suggested Areas for Growth:</h4>
                            <ul className="list-disc list-inside text-gray-400">
                                {analysis.suggestions.map((suggestion, index) => (
                                    <li key={index}>{suggestion}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

export default SkillAnalyzer; 