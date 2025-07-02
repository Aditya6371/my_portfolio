import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaTasks, FaCode } from 'react-icons/fa';

function ProjectTimeline() {
    const [projectScope, setProjectScope] = useState('');
    const [complexity, setComplexity] = useState('medium');

    const timelineData = {
        'Mobile App': {
            simple: {
                duration: '2-3 months',
                phases: [
                    { name: 'Planning & Design', duration: '2 weeks' },
                    { name: 'Core Development', duration: '4-6 weeks' },
                    { name: 'Testing & Polish', duration: '2-3 weeks' },
                    { name: 'Deployment', duration: '1 week' }
                ]
            },
            medium: {
                duration: '4-6 months',
                phases: [
                    { name: 'Research & Planning', duration: '3-4 weeks' },
                    { name: 'UI/UX Design', duration: '4 weeks' },
                    { name: 'Core Development', duration: '8-10 weeks' },
                    { name: 'Testing & QA', duration: '4 weeks' },
                    { name: 'Deployment & Launch', duration: '2 weeks' }
                ]
            },
            complex: {
                duration: '6-8 months',
                phases: [
                    { name: 'Research & Analysis', duration: '4-6 weeks' },
                    { name: 'Design & Architecture', duration: '6 weeks' },
                    { name: 'Core Development', duration: '12-14 weeks' },
                    { name: 'Integration & Testing', duration: '6 weeks' },
                    { name: 'Deployment & Optimization', duration: '4 weeks' }
                ]
            }
        },
        'Web Application': {
            // Similar structure for web projects
        },
        'AI Integration': {
            // Similar structure for AI projects
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#112240] p-4 md:p-6 rounded-lg shadow-xl w-full"
        >
            <h3 className="text-lg md:text-xl font-bold text-[#64ffda] mb-3 md:mb-4 flex items-center gap-2">
                <FaCalendar className="text-base md:text-lg" />
                AI Project Timeline Generator
            </h3>

            <div className="space-y-4 md:space-y-6">
                <div>
                    <label className="text-gray-300 block mb-2 text-sm md:text-base">Project Type</label>
                    <div className="flex gap-2 flex-wrap">
                        {Object.keys(timelineData).map((type) => (
                            <button
                                key={type}
                                onClick={() => setProjectScope(type)}
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors text-sm md:text-base ${projectScope === type
                                    ? 'bg-[#64ffda] text-[#0a192f]'
                                    : 'bg-[#0a192f] text-gray-300 hover:bg-[#64ffda]/10'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-gray-300 block mb-2 text-sm md:text-base">Complexity Level</label>
                    <div className="flex gap-2 flex-wrap">
                        {['simple', 'medium', 'complex'].map((level) => (
                            <button
                                key={level}
                                onClick={() => setComplexity(level)}
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors capitalize text-sm md:text-base ${complexity === level
                                    ? 'bg-[#64ffda] text-[#0a192f]'
                                    : 'bg-[#0a192f] text-gray-300 hover:bg-[#64ffda]/10'
                                    }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>

                {projectScope && timelineData[projectScope][complexity] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3 md:space-y-4"
                    >
                        <div className="bg-[#0a192f] p-3 md:p-4 rounded-lg flex items-center gap-3">
                            <FaClock className="text-[#64ffda] text-base md:text-lg" />
                            <div>
                                <h4 className="text-gray-300 text-sm md:text-base">Estimated Duration:</h4>
                                <p className="text-[#64ffda] font-medium text-sm md:text-base">
                                    {timelineData[projectScope][complexity].duration}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2 md:space-y-3">
                            {timelineData[projectScope][complexity].phases.map((phase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 md:gap-4 bg-[#0a192f]/50 p-3 rounded-lg"
                                >
                                    <div className="w-2 h-2 rounded-full bg-[#64ffda] flex-shrink-0" />
                                    <div className="flex-grow min-w-0">
                                        <h5 className="text-gray-300 text-sm md:text-base">{phase.name}</h5>
                                        <p className="text-xs md:text-sm text-gray-400">{phase.duration}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

export default ProjectTimeline; 