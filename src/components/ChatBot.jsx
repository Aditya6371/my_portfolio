import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaChevronUp } from 'react-icons/fa';
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
            offset: -64 // Adjust based on your navbar height
        });
    };

    const generateResponse = (question) => {
        const questionLower = question.toLowerCase();

        if (questionLower.includes('projects') || questionLower.includes('portfolio')) {
            setTimeout(() => scrollToSection('projects'), 1000);
            return "Let me show you Aditya's projects. I'm scrolling to the projects section where you can see his work including GreenWave Terratech, Wedium, and other applications.";
        }

        if (questionLower.includes('experience') || questionLower.includes('work')) {
            setTimeout(() => scrollToSection('experience'), 1000);
            return "I'll take you to Aditya's work experience. He has worked as a Flutter Developer at Appscrip Pvt Ltd and as an iOS Developer at Concept Infoway Pvt Ltd.";
        }

        if (questionLower.includes('about') || questionLower.includes('who is')) {
            setTimeout(() => scrollToSection('about'), 1000);
            return "Let me show you more about Aditya. He's a Software Developer specializing in mobile development with expertise in Swift, Flutter, and more.";
        }

        if (questionLower.includes('contact') || questionLower.includes('reach')) {
            setTimeout(() => scrollToSection('contact'), 1000);
            return "I'll show you how to contact Aditya. You can reach him via email, LinkedIn, or through the contact form.";
        }

        if (questionLower.includes('education') || questionLower.includes('study')) {
            return "Aditya is pursuing B.Tech in Computer Science from Gandhi Engineering College (2020-2024) with a GPA of 8.29.";
        }
        if (questionLower.includes('skills') || questionLower.includes('technologies')) {
            return "Aditya is skilled in Swift, Python, Java, Dart, Flutter, iOS Development, and more. He has experience with RESTful APIs and Bluetooth Communication.";
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
                className="fixed bottom-4 right-4 z-50"
            >
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-[#64ffda] text-[#0a192f] p-4 rounded-full shadow-lg hover:bg-[#64ffda]/90 transition-colors"
                    >
                        <FaRobot size={24} />
                    </button>
                )}
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-4 right-4 w-80 bg-[#112240] rounded-lg shadow-xl z-50"
                    >
                        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                            <h3 className="text-[#64ffda] font-medium flex items-center gap-2">
                                <FaRobot /> Chat Assistant
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-[#64ffda]"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="h-96 overflow-y-auto p-4 space-y-4">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${message.type === 'user'
                                            ? 'bg-[#64ffda] text-[#0a192f]'
                                            : 'bg-[#1d2d50] text-gray-300'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about Aditya..."
                                    className="flex-1 bg-[#0a192f] text-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#64ffda] text-[#0a192f] px-4 py-2 rounded-lg hover:bg-[#64ffda]/90 transition-colors"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default ChatBot; 