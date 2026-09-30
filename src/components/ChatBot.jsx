import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes } from 'react-icons/fa';
import { scroller } from 'react-scroll';

function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hi! I can help answer questions about Aditya. What would you like to know?' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -80
        });
    };

    const generateResponse = (question) => {
        const questionLower = question.toLowerCase();

        if (questionLower.includes('projects') || questionLower.includes('portfolio') || questionLower.includes('project')) {
            setTimeout(() => scrollToSection('projects'), 1000);
            return "Let me show you Aditya's projects. I'm scrolling to the projects section where you can see his work including the Ultraviolette UV App, NewKommerce suite, GreenWave Terratech, Wedium, and more.";
        }

        if (questionLower.includes('experience') || questionLower.includes('work')) {
            setTimeout(() => scrollToSection('experience'), 1000);
            return "I'll take you to Aditya's work experience. He's currently a Flutter Developer at Ultraviolette (contracted via Appscrip), previously built the NewKommerce suite at Appscrip, and worked as an iOS Developer at Concept Infoway.";
        }

        if (questionLower.includes('about') || questionLower.includes('who is')) {
            setTimeout(() => scrollToSection('about'), 1000);
            return "Let me show you more about Aditya. He's a Flutter Developer with 3+ years of experience building cross-platform mobile and web applications.";
        }

        if (questionLower.includes('contact') || questionLower.includes('reach')) {
            setTimeout(() => scrollToSection('contact'), 1000);
            return "I'll show you how to contact Aditya. You can reach him via email, LinkedIn, or through the contact form.";
        }

        if (questionLower.includes('education') || questionLower.includes('study')) {
            return "Aditya completed his B.Tech in Computer Science from Gandhi Engineering College (2020-2024) with a GPA of 8.29.";
        }

        if (questionLower.includes('skills') || questionLower.includes('technologies')) {
            return "Aditya is skilled in Flutter, Dart, Swift, Python, Java, and has experience with REST APIs, WebSockets, BLoC, GetX, Provider, and platform channels.";
        }

        return "I'm not sure about that. You can ask me about Aditya's education, skills, experience, projects, or how to contact him.";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages([
            ...messages,
            { type: 'user', text: input },
            { type: 'bot', text: generateResponse(input) }
        ]);
        setInput('');
    };

    return (
        <>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="fixed bottom-8 right-8 z-50"
            >
                {!isOpen && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="group bg-accent-secondary text-bg-primary p-4 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] transition-all duration-300"
                        aria-label="Open chat assistant"
                    >
                        <FaRobot size={24} />
                    </motion.button>
                )}
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.95 }}
                        className="fixed bottom-8 right-8 w-80 sm:w-96 bg-bg-secondary/95 backdrop-blur-xl rounded-2xl shadow-2xl z-50 max-h-[600px] flex flex-col border border-bg-tertiary/50"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-bg-tertiary/50 flex justify-between items-center flex-shrink-0">
                            <h3 className="text-accent-secondary font-medium flex items-center gap-3">
                                <FaRobot size={20} />
                                <span>Ask about my work</span>
                            </h3>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                                className="text-text-secondary hover:text-accent-secondary transition-colors"
                                aria-label="Close chat"
                            >
                                <FaTimes size={20} />
                            </motion.button>
                        </div>

                        {/* Messages */}
                        <div className="h-96 overflow-y-auto p-5 space-y-4 flex-grow">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${
                                            message.type === 'user'
                                                ? 'bg-accent-secondary text-bg-primary font-medium'
                                                : 'bg-bg-tertiary/50 text-text-primary border border-bg-tertiary/50'
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-5 border-t border-bg-tertiary/50 flex-shrink-0">
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about projects, skills..."
                                    className="flex-1 bg-bg-primary text-text-primary px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-secondary/50 border border-bg-tertiary/50 text-sm placeholder-text-secondary/50 transition-all"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="bg-accent-secondary text-bg-primary px-5 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all font-medium text-sm"
                                >
                                    Send
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default ChatBot; 