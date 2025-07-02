import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FaChartLine } from 'react-icons/fa';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function CareerGrowth() {
    const [animatedData, setAnimatedData] = useState({
        labels: ['2020', '2021', '2022', '2023', '2024 (H1)', '2024 (H2)', '2025'],
        datasets: [
            {
                label: 'Technical Skills',
                data: Array(7).fill(0),
                borderColor: '#64ffda',
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Project Complexity',
                data: Array(7).fill(0),
                borderColor: '#a8b2d1',
                backgroundColor: 'rgba(168, 178, 209, 0.1)',
                tension: 0.4,
                fill: true
            }
        ]
    });

    const finalData = {
        technicalSkills: [20, 35, 50, 65, 75, 85, 95],
        projectComplexity: [15, 30, 45, 60, 70, 80, 90]
    };

    useEffect(() => {
        const animateChart = async () => {
            const steps = 30; // Number of animation steps
            for (let i = 0; i <= steps; i++) {
                const progress = i / steps;

                setAnimatedData(prevData => ({
                    ...prevData,
                    datasets: [
                        {
                            ...prevData.datasets[0],
                            data: finalData.technicalSkills.map(value => value * progress)
                        },
                        {
                            ...prevData.datasets[1],
                            data: finalData.projectComplexity.map(value => value * progress)
                        }
                    ]
                }));

                await new Promise(resolve => setTimeout(resolve, 50)); // Controls animation speed
            }
        };

        animateChart();
    }, []);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#8892b0'
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#8892b0'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#8892b0'
                }
            },
            tooltip: {
                backgroundColor: '#112240',
                titleColor: '#64ffda',
                bodyColor: '#a8b2d1',
                borderColor: '#233554',
                borderWidth: 1,
                padding: 10,
                displayColors: true,
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`;
                    }
                }
            }
        }
    };

    const milestones = [
        {
            year: '2020',
            achievement: 'Started B.Tech in Computer Science at Gandhi Engineering College',
            skills: 'Computer Science Fundamentals, Member of Robotics Club'
        },
        {
            year: '2021',
            achievement: 'Started Learning Mobile Development',
            skills: 'Swift, Flutter, Mobile Development Basics'
        },
        {
            year: '2024 (Jan-Jun)',
            achievement: 'Intern iOS Developer at Concept Infoway',
            skills: 'iOS Development, Swift, Xcode'
        },
        {
            year: '2024 (Jun-Jan)',
            achievement: 'Junior iOS Developer at Concept Infoway',
            skills: 'iOS Apps: Helping Hand, To Heart, Health Care'
        },
        {
            year: '2025',
            achievement: 'Flutter Developer at Appscrip',
            skills: 'Flutter, AI Integration, ML Models'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#112240] p-4 md:p-6 rounded-lg shadow-xl w-full"
        >
            <h3 className="text-lg md:text-xl font-bold text-[#64ffda] mb-4 md:mb-6 flex items-center gap-2">
                <FaChartLine className="animate-pulse text-base md:text-lg" />
                Career Growth Analysis
            </h3>

            <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
                <div className="lg:col-span-2 h-[300px] md:h-[400px]">
                    <Line data={animatedData} options={options} />
                </div>

                <div className="space-y-3 md:space-y-4">
                    <h4 className="text-gray-300 font-medium mb-3 md:mb-4 text-sm md:text-base">Key Milestones</h4>
                    <div className="max-h-[300px] md:max-h-[350px] overflow-y-auto space-y-3 md:space-y-4 pr-2">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-[#0a192f] p-3 md:p-4 rounded-lg"
                            >
                                <div className="flex items-center gap-2 mb-1 md:mb-2">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: index * 0.2 + 0.1 }}
                                        className="w-2 h-2 rounded-full bg-[#64ffda] flex-shrink-0"
                                    />
                                    <span className="text-[#64ffda] font-medium text-sm md:text-base">{milestone.year}</span>
                                </div>
                                <h5 className="text-gray-300 font-medium mb-1 text-sm md:text-base leading-tight">{milestone.achievement}</h5>
                                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{milestone.skills}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
                {[
                    { label: 'Technical Skills', value: '95%' },
                    { label: 'Project Complexity', value: '90%' },
                    { label: 'Years Experience', value: '2+' },
                    { label: 'Projects Completed', value: '10+' }
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#0a192f] p-3 md:p-4 rounded-lg text-center"
                    >
                        <motion.h4
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{ delay: index * 0.1 + 1.2 }}
                            className="text-[#64ffda] text-lg md:text-xl lg:text-2xl font-bold mb-1"
                        >
                            {stat.value}
                        </motion.h4>
                        <p className="text-gray-400 text-xs md:text-sm leading-tight">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default CareerGrowth; 