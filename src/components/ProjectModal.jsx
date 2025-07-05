import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaPlay, FaDownload, FaRocket, FaBrain, FaAtom, FaNetworkWired, FaCode, FaCog, FaLightbulb, FaMicrochip } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [glowEffect, setGlowEffect] = useState(false);
    const [particleCount, setParticleCount] = useState(20); // Reduced from 50 to 20
    const [hologramEffect, setHologramEffect] = useState(false);
    const [scanlinePosition, setScanlinePosition] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setGlowEffect(true);
            setHologramEffect(true);
            const timer = setTimeout(() => setGlowEffect(false), 3000);

            // Scanline animation
            const scanlineInterval = setInterval(() => {
                setScanlinePosition(prev => (prev + 1) % 100);
            }, 50);

            return () => {
                clearTimeout(timer);
                clearInterval(scanlineInterval);
            };
        }
    }, [isOpen]);

    // Floating particle animation variants
    const particleVariants = {
        animate: {
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 360],
            transition: {
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

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
                >                    {/* Simplified animated background with fewer particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {/* Floating particles - reduced count and simplified animation */}
                        {[...Array(particleCount)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    width: `${2 + Math.random() * 2}px`,
                                    height: `${2 + Math.random() * 2}px`,
                                    backgroundColor: `hsl(${180 + Math.random() * 60}, 70%, 60%)`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}

                        {/* Simplified grid lines - reduced count */}
                        <div className="absolute inset-0">
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={`v-${i}`}
                                    className="absolute w-px bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
                                    style={{
                                        left: `${i * 10}%`,
                                        height: '100%',
                                    }}
                                    animate={{
                                        opacity: [0.1, 0.2, 0.1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Simplified scanline */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent"
                            style={{
                                height: '1px',
                                width: '100%',
                                top: `${scanlinePosition}%`,
                            }}
                        />
                    </div>                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className={`relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 rounded-2xl border-2 max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform-gpu backdrop-blur-sm ${glowEffect ? 'border-cyan-400 shadow-cyan-400/50' : 'border-cyan-500/30'
                            }`}
                        style={{
                            boxShadow: glowEffect
                                ? '0 0 40px rgba(6, 182, 212, 0.3), inset 0 0 40px rgba(6, 182, 212, 0.1)'
                                : '0 0 20px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(6, 182, 212, 0.05)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Simplified holographic border effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm"></div>

                        {/* Simplified corner accents */}
                        {[
                            { top: '0', left: '0', rotate: '0deg' },
                            { top: '0', right: '0', rotate: '90deg' },
                            { bottom: '0', right: '0', rotate: '180deg' },
                            { bottom: '0', left: '0', rotate: '270deg' },
                        ].map((corner, i) => (
                            <div
                                key={i}
                                className="absolute w-6 h-6 border-t-2 border-l-2 border-cyan-400/50"
                                style={{
                                    ...corner,
                                    transform: `rotate(${corner.rotate})`,
                                }}
                            />
                        ))}

                        {/* Enhanced header with project icon and title */}
                        <div className="relative z-10 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-sm border-b border-cyan-500/30 p-6 overflow-hidden">
                            {/* Header background animation */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"
                                animate={{
                                    x: ['-100%', '100%'],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center overflow-hidden"
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {/* Icon container with pulsing effect */}
                                        <motion.div
                                            className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                                            animate={{
                                                scale: [1, 1.05, 1],
                                                opacity: [0.3, 0.6, 0.3],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        />

                                        {project.icon ? (
                                            <motion.img
                                                src={project.icon}
                                                alt={project.title}
                                                className="w-10 h-10 object-contain filter brightness-125 relative z-10"
                                                animate={{
                                                    rotateY: [0, 180, 360],
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        ) : (
                                            <motion.div
                                                animate={{
                                                    rotate: [0, 360],
                                                }}
                                                transition={{
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                            >
                                                <FaRocket className="w-8 h-8 text-cyan-400" />
                                            </motion.div>
                                        )}

                                        {/* Orbiting particles around icon */}
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                                                animate={{
                                                    rotate: [0, 360],
                                                }}
                                                transition={{
                                                    duration: 2 + i * 0.5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                                style={{
                                                    top: '50%',
                                                    left: '50%',
                                                    transformOrigin: `${20 + i * 5}px 0px`,
                                                    transform: `translate(-50%, -50%) rotate(${i * 120}deg)`,
                                                }}
                                            />
                                        ))}
                                    </motion.div>

                                    <div>
                                        <motion.h2
                                            className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {project.title}
                                        </motion.h2>
                                        <motion.p
                                            className="text-cyan-300/80 font-mono text-sm tracking-wider uppercase"
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <motion.span
                                                animate={{
                                                    opacity: [0.6, 1, 0.6],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                {project.category}
                                            </motion.span>
                                            <span className="mx-2">•</span>
                                            <span>{project.year || 'Present'}</span>
                                        </motion.p>
                                    </div>
                                </div>

                                <motion.button
                                    onClick={onClose}
                                    className="relative p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300 group overflow-hidden"
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0, 0.5, 0],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                    />
                                    <FaTimes className="w-5 h-5 text-red-400 group-hover:text-red-300 relative z-10" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Enhanced navigation tabs */}
                        <div className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-b border-cyan-500/20 px-6 py-4 overflow-hidden">
                            {/* Tab background animation */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-50"
                                animate={{
                                    x: ['-100%', '100%'],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            <div className="relative z-10 flex space-x-1">
                                {tabs.map((tab, index) => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <motion.button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden ${isActive
                                                ? 'text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'
                                                : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 border border-transparent'
                                                }`}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            {/* Tab background effect */}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
                                                    animate={{
                                                        scale: [1, 1.05, 1],
                                                        opacity: [0.3, 0.6, 0.3],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                    }}
                                                />
                                            )}

                                            <motion.div
                                                animate={isActive ? {
                                                    rotate: [0, 360],
                                                    scale: [1, 1.1, 1],
                                                } : {}}
                                                transition={{
                                                    duration: 2,
                                                    repeat: isActive ? Infinity : 0,
                                                }}
                                            >
                                                <Icon className="w-4 h-4 relative z-10" />
                                            </motion.div>

                                            <span className="text-sm relative z-10">{tab.label}</span>

                                            {/* Active tab indicator */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30"
                                                    initial={false}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 500,
                                                        damping: 30
                                                    }}
                                                />
                                            )}

                                            {/* Hover particles */}
                                            <motion.div
                                                className="absolute inset-0 pointer-events-none"
                                                whileHover="hover"
                                                initial="initial"
                                                variants={{
                                                    initial: { opacity: 0 },
                                                    hover: { opacity: 1 }
                                                }}
                                            >
                                                {[...Array(3)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                                                        variants={{
                                                            initial: { scale: 0, opacity: 0 },
                                                            hover: {
                                                                scale: [0, 1, 0],
                                                                opacity: [0, 1, 0],
                                                                y: [-5, -15, -25],
                                                            }
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            delay: i * 0.1
                                                        }}
                                                        style={{
                                                            left: `${20 + i * 20}%`,
                                                            top: '50%',
                                                        }}
                                                    />
                                                ))}
                                            </motion.div>
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
                                        {/* Enhanced Overview Tab */}
                                        {activeTab === 'overview' && (
                                            <div className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <motion.div
                                                        className="space-y-4"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 }}
                                                    >
                                                        <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                                                            <motion.div
                                                                animate={{ rotate: [0, 360] }}
                                                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                                            >
                                                                <FaRocket className="w-5 h-5" />
                                                            </motion.div>
                                                            <span>Project Overview</span>
                                                        </h3>
                                                        <motion.p
                                                            className="text-slate-300 leading-relaxed"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                        >
                                                            {project.description}
                                                        </motion.p>
                                                    </motion.div>

                                                    <motion.div
                                                        className="grid grid-cols-2 gap-4"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.2 }}
                                                    >
                                                        <motion.div
                                                            className="relative bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-4 border border-cyan-500/20 overflow-hidden"
                                                            whileHover={{ scale: 1.05, rotateY: 5 }}
                                                            transition={{ type: "spring", stiffness: 300 }}
                                                        >
                                                            <motion.div
                                                                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                                                                animate={{
                                                                    scale: [1, 1.1, 1],
                                                                    opacity: [0.1, 0.3, 0.1],
                                                                }}
                                                                transition={{ duration: 3, repeat: Infinity }}
                                                            />
                                                            <motion.div
                                                                className="text-2xl font-bold text-cyan-400 relative z-10"
                                                                animate={{
                                                                    textShadow: [
                                                                        "0 0 5px rgba(6, 182, 212, 0.5)",
                                                                        "0 0 10px rgba(6, 182, 212, 0.8)",
                                                                        "0 0 5px rgba(6, 182, 212, 0.5)"
                                                                    ]
                                                                }}
                                                                transition={{ duration: 2, repeat: Infinity }}
                                                            >
                                                                {project.technologies?.length || 0}
                                                            </motion.div>
                                                            <div className="text-sm text-slate-400 relative z-10">Technologies</div>
                                                        </motion.div>

                                                        <motion.div
                                                            className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20 overflow-hidden"
                                                            whileHover={{ scale: 1.05, rotateY: -5 }}
                                                            transition={{ type: "spring", stiffness: 300 }}
                                                        >
                                                            <motion.div
                                                                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                                                                animate={{
                                                                    scale: [1, 1.1, 1],
                                                                    opacity: [0.1, 0.3, 0.1],
                                                                }}
                                                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                                            />
                                                            <motion.div
                                                                className="text-2xl font-bold text-purple-400 relative z-10"
                                                                animate={{
                                                                    textShadow: [
                                                                        "0 0 5px rgba(139, 92, 246, 0.5)",
                                                                        "0 0 10px rgba(139, 92, 246, 0.8)",
                                                                        "0 0 5px rgba(139, 92, 246, 0.5)"
                                                                    ]
                                                                }}
                                                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                                            >
                                                                {project.status || 'Active'}
                                                            </motion.div>
                                                            <div className="text-sm text-slate-400 relative z-10">Status</div>
                                                        </motion.div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Enhanced Features Tab */}
                                        {activeTab === 'features' && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                                                    <motion.div
                                                        animate={{
                                                            scale: [1, 1.2, 1],
                                                            rotate: [0, 180, 360],
                                                        }}
                                                        transition={{ duration: 3, repeat: Infinity }}
                                                    >
                                                        <FaBrain className="w-5 h-5" />
                                                    </motion.div>
                                                    <span>Key Features</span>
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {project.features?.map((feature, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden group"
                                                            whileHover={{ scale: 1.02, rotateX: 5 }}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                        >
                                                            {/* Animated background */}
                                                            <motion.div
                                                                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
                                                                animate={{
                                                                    scale: [1, 1.05, 1],
                                                                    opacity: [0, 0.3, 0],
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                    delay: index * 0.2
                                                                }}
                                                            />

                                                            {/* Feature content */}
                                                            <div className="relative z-10 flex items-start gap-3">
                                                                <motion.div
                                                                    className="w-3 h-3 bg-cyan-400 rounded-full mt-1 flex-shrink-0"
                                                                    animate={{
                                                                        scale: [1, 1.3, 1],
                                                                        boxShadow: [
                                                                            "0 0 5px rgba(6, 182, 212, 0.5)",
                                                                            "0 0 15px rgba(6, 182, 212, 0.8)",
                                                                            "0 0 5px rgba(6, 182, 212, 0.5)"
                                                                        ]
                                                                    }}
                                                                    transition={{
                                                                        duration: 2,
                                                                        repeat: Infinity,
                                                                        delay: index * 0.3
                                                                    }}
                                                                />
                                                                <span className="text-slate-300 group-hover:text-white transition-colors">
                                                                    {feature}
                                                                </span>
                                                            </div>

                                                            {/* Hover particles */}
                                                            <motion.div
                                                                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                                                            >
                                                                {[...Array(5)].map((_, i) => (
                                                                    <motion.div
                                                                        key={i}
                                                                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                                                                        animate={{
                                                                            scale: [0, 1, 0],
                                                                            opacity: [0, 1, 0],
                                                                            x: [0, Math.random() * 40 - 20],
                                                                            y: [0, Math.random() * 40 - 20],
                                                                        }}
                                                                        transition={{
                                                                            duration: 1.5,
                                                                            repeat: Infinity,
                                                                            delay: i * 0.1
                                                                        }}
                                                                        style={{
                                                                            left: `${Math.random() * 100}%`,
                                                                            top: `${Math.random() * 100}%`,
                                                                        }}
                                                                    />
                                                                ))}
                                                            </motion.div>
                                                        </motion.div>
                                                    )) || (
                                                            <motion.div
                                                                className="text-slate-400 text-center py-8"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                            >
                                                                No features data available
                                                            </motion.div>
                                                        )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Enhanced Tech Stack Tab */}
                                        {activeTab === 'tech' && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                                                    <motion.div
                                                        animate={{
                                                            rotate: [0, 360],
                                                            scale: [1, 1.1, 1],
                                                        }}
                                                        transition={{ duration: 4, repeat: Infinity }}
                                                    >
                                                        <FaAtom className="w-5 h-5" />
                                                    </motion.div>
                                                    <span>Technology Stack</span>
                                                </h3>
                                                <div className="flex flex-wrap gap-3">
                                                    {project.technologies?.map((tech, index) => (
                                                        <motion.span
                                                            key={index}
                                                            className="relative px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 font-mono text-sm hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-default overflow-hidden group"
                                                            whileHover={{ scale: 1.05, rotateY: 10 }}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: index * 0.05 }}
                                                        >
                                                            {/* Animated background */}
                                                            <motion.div
                                                                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
                                                                animate={{
                                                                    scale: [1, 1.2, 1],
                                                                    opacity: [0, 0.5, 0],
                                                                }}
                                                                transition={{
                                                                    duration: 3,
                                                                    repeat: Infinity,
                                                                    delay: index * 0.1
                                                                }}
                                                            />

                                                            {/* Tech name */}
                                                            <span className="relative z-10 group-hover:text-white transition-colors">
                                                                {tech}
                                                            </span>

                                                            {/* Orbiting particles */}
                                                            {[...Array(3)].map((_, i) => (
                                                                <motion.div
                                                                    key={i}
                                                                    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                                                                    animate={{
                                                                        rotate: [0, 360],
                                                                        scale: [0, 1, 0],
                                                                    }}
                                                                    transition={{
                                                                        duration: 2,
                                                                        repeat: Infinity,
                                                                        delay: i * 0.3
                                                                    }}
                                                                    style={{
                                                                        top: '50%',
                                                                        left: '50%',
                                                                        transformOrigin: `${15 + i * 5}px 0px`,
                                                                        transform: `translate(-50%, -50%) rotate(${i * 120}deg)`,
                                                                    }}
                                                                />
                                                            ))}
                                                        </motion.span>
                                                    )) || (
                                                            <motion.div
                                                                className="text-slate-400 text-center py-8"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                            >
                                                                No technology data available
                                                            </motion.div>
                                                        )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Enhanced Challenges Tab */}
                                        {activeTab === 'challenges' && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                                                    <motion.div
                                                        animate={{
                                                            scale: [1, 1.2, 1],
                                                            rotate: [0, 180, 360],
                                                        }}
                                                        transition={{ duration: 4, repeat: Infinity }}
                                                    >
                                                        <FaNetworkWired className="w-5 h-5" />
                                                    </motion.div>
                                                    <span>Challenges & Solutions</span>
                                                </h3>
                                                <div className="space-y-4">
                                                    {project.challenges?.map((challenge, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-cyan-500/20 overflow-hidden group"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            whileHover={{ scale: 1.02, rotateX: 2 }}
                                                        >
                                                            {/* Animated background layers */}
                                                            <motion.div
                                                                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
                                                                animate={{
                                                                    scale: [1, 1.02, 1],
                                                                    opacity: [0, 0.3, 0],
                                                                }}
                                                                transition={{
                                                                    duration: 3,
                                                                    repeat: Infinity,
                                                                    delay: index * 0.5
                                                                }}
                                                            />

                                                            {/* Content */}
                                                            <div className="relative z-10">
                                                                <motion.h4
                                                                    className="font-semibold text-cyan-300 mb-3 flex items-center gap-2"
                                                                    initial={{ opacity: 0, y: -10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: index * 0.1 + 0.2 }}
                                                                >
                                                                    <motion.div
                                                                        className="w-2 h-2 bg-cyan-400 rounded-full"
                                                                        animate={{
                                                                            scale: [1, 1.5, 1],
                                                                            boxShadow: [
                                                                                "0 0 5px rgba(6, 182, 212, 0.5)",
                                                                                "0 0 15px rgba(6, 182, 212, 0.8)",
                                                                                "0 0 5px rgba(6, 182, 212, 0.5)"
                                                                            ]
                                                                        }}
                                                                        transition={{
                                                                            duration: 2,
                                                                            repeat: Infinity,
                                                                            delay: index * 0.3
                                                                        }}
                                                                    />
                                                                    <span className="group-hover:text-white transition-colors">
                                                                        {challenge.problem || challenge.challenge}
                                                                    </span>
                                                                </motion.h4>

                                                                <motion.p
                                                                    className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors"
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: index * 0.1 + 0.4 }}
                                                                >
                                                                    {challenge.solution}
                                                                </motion.p>
                                                            </div>

                                                            {/* Circuit-like decorative elements */}
                                                            <motion.div
                                                                className="absolute top-2 right-2 w-4 h-4 opacity-20 group-hover:opacity-40 transition-opacity"
                                                                animate={{
                                                                    rotate: [0, 360],
                                                                }}
                                                                transition={{
                                                                    duration: 8,
                                                                    repeat: Infinity,
                                                                    ease: "linear"
                                                                }}
                                                            >
                                                                <FaMicrochip className="w-full h-full text-cyan-400" />
                                                            </motion.div>
                                                        </motion.div>
                                                    )) || (
                                                            <motion.div
                                                                className="text-slate-400 text-center py-8"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                            >
                                                                No challenge data available
                                                            </motion.div>
                                                        )}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Enhanced footer with action buttons */}
                        <div className="relative z-10 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-sm border-t border-cyan-500/30 p-6 overflow-hidden">
                            {/* Footer background animation */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"
                                animate={{
                                    x: ['100%', '-100%'],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            <div className="relative z-10 flex flex-wrap gap-3">
                                {project.githubLink && (
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 group overflow-hidden"
                                        whileHover={{ scale: 1.05, rotateY: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {/* Button background animation */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                                            animate={{
                                                scale: [1, 1.05, 1],
                                                opacity: [0, 0.3, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: 0.5
                                            }}
                                        />

                                        <motion.div
                                            animate={{
                                                rotate: [0, 360],
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            <FaGithub className="w-5 h-5 group-hover:text-white transition-colors relative z-10" />
                                        </motion.div>
                                        <span className="font-medium relative z-10 group-hover:text-white transition-colors">View Code</span>

                                        {/* Hover particles */}
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                                                animate={{
                                                    y: [0, -20, -40],
                                                    opacity: [0, 1, 0],
                                                    scale: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    delay: i * 0.2
                                                }}
                                                style={{
                                                    left: `${30 + i * 20}%`,
                                                    top: '50%',
                                                }}
                                            />
                                        ))}
                                    </motion.a>
                                )}

                                {project.liveLink && (
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 group overflow-hidden"
                                        whileHover={{ scale: 1.05, rotateY: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {/* Button background animation */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30"
                                            animate={{
                                                scale: [1, 1.05, 1],
                                                opacity: [0, 0.3, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: 1
                                            }}
                                        />

                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 10, -10, 0],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <FaExternalLinkAlt className="w-5 h-5 group-hover:text-white transition-colors relative z-10" />
                                        </motion.div>
                                        <span className="font-medium relative z-10 group-hover:text-white transition-colors">Live Demo</span>

                                        {/* Pulsing ring effect */}
                                        <motion.div
                                            className="absolute inset-0 rounded-lg border-2 border-cyan-400 opacity-0 group-hover:opacity-100"
                                            animate={{
                                                scale: [1, 1.1, 1.2],
                                                opacity: [0, 0.5, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                            }}
                                        />
                                    </motion.a>
                                )}

                                {project.playStoreLink && (
                                    <motion.a
                                        href={project.playStoreLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg text-green-300 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 group overflow-hidden"
                                        whileHover={{ scale: 1.05, rotateY: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {/* Button background animation */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30"
                                            animate={{
                                                scale: [1, 1.05, 1],
                                                opacity: [0, 0.3, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: 1.5
                                            }}
                                        />

                                        <motion.div
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 360],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <FaPlay className="w-5 h-5 group-hover:text-white transition-colors relative z-10" />
                                        </motion.div>
                                        <span className="font-medium relative z-10 group-hover:text-white transition-colors">Play Store</span>

                                        {/* Orbiting effect */}
                                        {[...Array(2)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"
                                                animate={{
                                                    rotate: [0, 360],
                                                }}
                                                transition={{
                                                    duration: 2 + i * 0.5,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                                style={{
                                                    top: '50%',
                                                    left: '50%',
                                                    transformOrigin: `${25 + i * 10}px 0px`,
                                                    transform: `translate(-50%, -50%) rotate(${i * 180}deg)`,
                                                }}
                                            />
                                        ))}
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
