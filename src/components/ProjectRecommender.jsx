import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ProjectRecommender() {
    const [userInterests, setUserInterests] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    const techStack = {
        'mobile': ['GreenWave Terratech', 'Wedium App'],
        'web': ['Portfolio Website', 'Instagram UI Clone'],
        'automation': ['Virtual Assistant (Jarvis)', 'Michi Bot'],
        'flutter': ['Multi-Tools Application', 'GreenWave Terratech'],
        'ios': ['iOS Projects', 'Swift Applications']
    };

    const handleRecommend = () => {
        const interests = userInterests.toLowerCase().split(' ');
        let recommended = new Set();

        interests.forEach(interest => {
            Object.entries(techStack).forEach(([tech, projects]) => {
                if (tech.includes(interest) || interest.includes(tech)) {
                    projects.forEach(project => recommended.add(project));
                }
            });
        });

        setRecommendations(Array.from(recommended));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#112240] p-6 rounded-lg shadow-xl"
        >
            <h3 className="text-xl font-bold text-[#64ffda] mb-4">
                Project Recommendations
            </h3>
            <div className="space-y-4">
                <input
                    type="text"
                    value={userInterests}
                    onChange={(e) => setUserInterests(e.target.value)}
                    placeholder="Enter your interests (e.g., mobile, web, flutter)"
                    className="w-full p-3 bg-[#0a192f] rounded-lg text-gray-300 border border-gray-700 focus:border-[#64ffda] focus:outline-none"
                />
                <button
                    onClick={handleRecommend}
                    className="w-full px-4 py-2 bg-[#64ffda] text-[#0a192f] rounded-lg hover:bg-[#64ffda]/90 transition-colors"
                >
                    Get Recommendations
                </button>

                {recommendations.length > 0 && (
                    <div className="mt-4 space-y-2">
                        <h4 className="text-gray-300 font-medium">Recommended Projects:</h4>
                        <ul className="list-disc list-inside text-gray-400">
                            {recommendations.map((project, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {project}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default ProjectRecommender; 