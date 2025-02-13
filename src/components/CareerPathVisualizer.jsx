import React, { useState } from 'react';
import { motion } from 'framer-motion';

function CareerPathVisualizer() {
    const [selectedPath, setSelectedPath] = useState('');

    const careerPaths = {
        'Mobile Development': {
            current: 'iOS & Flutter Developer',
            nextSteps: [
                'Senior Mobile Developer',
                'Mobile Architecture Specialist',
                'Technical Lead - Mobile'
            ],
            requiredSkills: [
                'Advanced Swift & Flutter',
                'System Design',
                'Team Leadership',
                'CI/CD Pipeline Management'
            ],
            timeframe: '2-3 years'
        },
        'Full Stack': {
            current: 'Full Stack Developer',
            nextSteps: [
                'Senior Full Stack Developer',
                'Solutions Architect',
                'Technical Project Manager'
            ],
            requiredSkills: [
                'Advanced Frontend Frameworks',
                'Backend Architecture',
                'Cloud Services',
                'System Scalability'
            ],
            timeframe: '3-4 years'
        },
        'AI/ML': {
            current: 'ML Engineer',
            nextSteps: [
                'Senior ML Engineer',
                'AI Research Scientist',
                'AI Product Manager'
            ],
            requiredSkills: [
                'Deep Learning',
                'NLP',
                'Computer Vision',
                'MLOps'
            ],
            timeframe: '3-5 years'
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#112240] p-6 rounded-lg shadow-xl"
        >
            <h3 className="text-xl font-bold text-[#64ffda] mb-4">
                AI Career Path Visualizer
            </h3>

            <div className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                    {Object.keys(careerPaths).map((path) => (
                        <button
                            key={path}
                            onClick={() => setSelectedPath(path)}
                            className={`px-4 py-2 rounded-lg transition-colors ${selectedPath === path
                                    ? 'bg-[#64ffda] text-[#0a192f]'
                                    : 'bg-[#0a192f] text-gray-300 hover:bg-[#64ffda]/10'
                                }`}
                        >
                            {path}
                        </button>
                    ))}
                </div>

                {selectedPath && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 space-y-6"
                    >
                        <div>
                            <h4 className="text-gray-300 font-medium">Current Position:</h4>
                            <p className="text-[#64ffda]">{careerPaths[selectedPath].current}</p>
                        </div>

                        <div>
                            <h4 className="text-gray-300 font-medium">Career Progression:</h4>
                            <div className="mt-2 space-y-2">
                                {careerPaths[selectedPath].nextSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#64ffda]" />
                                        <span className="text-gray-400">{step}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-gray-300 font-medium">Required Skills:</h4>
                            <ul className="mt-2 list-disc list-inside text-gray-400">
                                {careerPaths[selectedPath].requiredSkills.map((skill, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#0a192f] p-4 rounded-lg">
                            <h4 className="text-gray-300 font-medium">Estimated Timeframe:</h4>
                            <p className="text-[#64ffda]">{careerPaths[selectedPath].timeframe}</p>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

export default CareerPathVisualizer; 