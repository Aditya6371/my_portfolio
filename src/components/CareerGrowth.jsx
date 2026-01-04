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
import { careerMilestones } from '../data/portfolioData';

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
                borderColor: '#64ffda', // Teal
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Project Complexity',
                data: Array(7).fill(0),
                borderColor: '#8892b0', // Slate
                backgroundColor: 'rgba(136, 146, 176, 0.1)',
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
                    color: 'rgba(255, 255, 255, 0.05)'
                },
                ticks: {
                    color: '#8892b0' // Light Slate
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)'
                },
                ticks: {
                    color: '#8892b0' // Light Slate
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
                backgroundColor: '#112240', // Light Navy
                titleColor: '#64ffda', // Teal
                bodyColor: '#8892b0', // Light Slate
                borderColor: '#233554', // Navy
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bg-secondary p-4 md:p-6 rounded-2xl border border-bg-tertiary shadow-lg w-full"
        >
            <h3 className="text-lg md:text-xl font-bold text-accent-secondary mb-4 md:mb-6 flex items-center gap-2">
                <FaChartLine className="animate-pulse text-base md:text-lg" />
                Career Growth Analysis
            </h3>

            {/* Optimized layout to use all available space */}
            <div className="grid lg:grid-cols-5 gap-4 md:gap-6">
                {/* Chart section - takes up most space */}
                <div className="lg:col-span-3 h-[280px] md:h-[320px] lg:h-[380px] w-full">
                    <Line data={animatedData} options={options} />
                </div>

                {/* Stats section - right side */}
                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                    <div>
                        <h4 className="text-text-secondary font-medium mb-3 md:mb-4 text-sm md:text-base">Statistics</h4>
                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 md:gap-3">
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
                                    className="bg-bg-primary p-3 md:p-4 rounded-xl border border-bg-tertiary text-center"
                                >
                                    <motion.h4
                                        initial={{ y: 20 }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: index * 0.1 + 1.2 }}
                                        className="text-accent-secondary text-lg md:text-xl font-bold mb-1"
                                    >
                                        {stat.value}
                                    </motion.h4>
                                    <p className="text-text-secondary text-xs md:text-sm leading-tight">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Milestones section - full width below */}
            <div className="mt-4 md:mt-6">
                <div className="space-y-2 md:space-y-3">
                    <h4 className="text-text-secondary font-medium mb-3 md:mb-4 text-sm md:text-base">Key Milestones</h4>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
                        {careerMilestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-bg-primary p-3 rounded-lg border border-bg-tertiary"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: index * 0.1 + 0.1 }}
                                        className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent-secondary flex-shrink-0"
                                    />
                                    <span className="text-accent-secondary font-medium text-xs md:text-sm">{milestone.year}</span>
                                </div>
                                <h5 className="text-text-primary font-medium mb-1 text-xs md:text-sm leading-tight">{milestone.achievement}</h5>
                                <p className="text-xs text-text-secondary leading-snug">{milestone.skills}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default CareerGrowth; 