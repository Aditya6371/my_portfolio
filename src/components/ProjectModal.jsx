import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaPlay, FaDownload, FaRocket, FaBrain, FaAtom, FaNetworkWired } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [glowEffect, setGlowEffect] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setGlowEffect(true);
            const timer = setTimeout(() => setGlowEffect(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!project) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const tabs = [
        { id: 'overview', label: 'Overview', icon: FaRocket },
        { id: 'features', label: 'Features', icon: FaBrain },
        { id: 'tech', label: 'Tech Stack', icon: FaAtom },
        { id: 'challenges', label: 'Solutions', icon: FaNetworkWired }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
                    onClick={handleBackdropClick}
                >
                    {/* Animated background particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
                                animate={{
                                    x: [0, Math.random() * 100 - 50],
                                    y: [0, Math.random() * 100 - 50],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                        exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className={`relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border-2 max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform-gpu ${glowEffect ? 'border-cyan-400 shadow-cyan-400/50' : 'border-cyan-500/30'
                            }`}
                        style={{
                            boxShadow: glowEffect
                                ? '0 0 60px rgba(6, 182, 212, 0.4), inset 0 0 60px rgba(6, 182, 212, 0.1)'
                                : '0 0 30px rgba(6, 182, 212, 0.2), inset 0 0 30px rgba(6, 182, 212, 0.05)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Holographic border effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm animate-pulse"></div>

                        {/* Header with project icon and title */}
                        <div className="relative z-10 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-sm border-b border-cyan-500/30 p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center"
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {project.icon ? (
                                            <img
                                                src={project.icon}
                                                alt={project.title}
                                                className="w-10 h-10 object-contain filter brightness-125"
                                            />
                                        ) : (
                                            <FaRocket className="w-8 h-8 text-cyan-400" />
                                        )}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
                                    </motion.div>
                                    <div>
                                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                            {project.title}
                                        </h2>
                                        <p className="text-cyan-300/80 font-mono text-sm tracking-wider uppercase">
                                            {project.category} • {project.year || 'Present'}
                                        </p>
                                    </div>
                                </div>
                                <motion.button
                                    onClick={onClose}
                                    className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaTimes className="w-5 h-5 text-red-400 group-hover:text-red-300" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Navigation tabs */}
                        <div className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-b border-cyan-500/20 px-6 py-4">
                            <div className="flex space-x-1">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon;
                                    return (
                                        <motion.button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                                    ? 'text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'
                                                    : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50'
                                                }`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Icon className="w-4 h-4" />
                                            <span className="text-sm">{tab.label}</span>
                                            {activeTab === tab.id && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30"
                                                />
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Content area */}
                        <div className="relative z-10 max-h-[calc(95vh-200px)] overflow-y-auto">
                            <div className="p-6 space-y-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Overview Tab */}
                                        {activeTab === 'overview' && (
                                            <div className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-4">
                                                        <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                                                            <FaRocket className="w-5 h-5" />
                                                            Project Overview
                                                        </h3>
                                                        <p className="text-slate-300 leading-relaxed">
                                                            {project.description}
                                                        </p>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-4 border border-cyan-500/20">
                                                            <div className="text-2xl font-bold text-cyan-400">
                                                                {project.technologies?.length || 0}
                                                            </div>
                                                            <div className="text-sm text-slate-400">Technologies</div>
                                                        </div>
                                                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
                                                            <div className="text-2xl font-bold text-purple-400">
                                                                {project.status || 'Active'}
                                                            </div>
                                                            <div className="text-sm text-slate-400">Status</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Features Tab */}
                                        {activeTab === 'features' && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                                                    <FaBrain className="w-5 h-5" />
                                                    Key Features
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {project.features?.map((feature, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                                                            whileHover={{ scale: 1.02 }}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                                                <span className="text-slate-300">{feature}</span>
                                                            </div>
                                                        </motion.div>
                                                    )) || (
                                                            <div className="text-slate-400 text-center py-8">
                                                                No features data available
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Tech Stack Tab */}
                                        {activeTab === 'tech' && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                                                    <FaAtom className="w-5 h-5" />
                                                    Technology Stack
                                                </h3>
                                                <div className="flex flex-wrap gap-3">
                                                    {project.technologies?.map((tech, index) => (
                                                        <motion.span
                                                            key={index}
                                                            className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 font-mono text-sm hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
                                                            whileHover={{ scale: 1.05 }}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: index * 0.05 }}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    )) || (
                                                            <div className="text-slate-400 text-center py-8">
                                                                No technology data available
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Challenges Tab */}
                                        {activeTab === 'challenges' && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                                                    <FaNetworkWired className="w-5 h-5" />
                                                    Challenges & Solutions
                                                </h3>
                                                <div className="space-y-4">
                                                    {project.challenges?.map((challenge, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-cyan-500/20"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                        >
                                                            <h4 className="font-semibold text-cyan-300 mb-3">
                                                                {challenge.problem || challenge.challenge}
                                                            </h4>
                                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                                {challenge.solution}
                                                            </p>
                                                        </motion.div>
                                                    )) || (
                                                            <div className="text-slate-400 text-center py-8">
                                                                No challenge data available
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Footer with action buttons */}
                        <div className="relative z-10 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-sm border-t border-cyan-500/30 p-6">
                            <div className="flex flex-wrap gap-3">
                                {project.githubLink && (
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="w-5 h-5 group-hover:text-white" />
                                        <span className="font-medium">View Code</span>
                                    </motion.a>
                                )}
                                {project.liveLink && (
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt className="w-5 h-5 group-hover:text-white" />
                                        <span className="font-medium">Live Demo</span>
                                    </motion.a>
                                )}
                                {project.playStoreLink && (
                                    <motion.a
                                        href={project.playStoreLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg text-green-300 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaPlay className="w-5 h-5 group-hover:text-white" />
                                        <span className="font-medium">Play Store</span>
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
