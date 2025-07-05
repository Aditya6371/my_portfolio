import React, { useState } from 'react';
import { validatePortfolioData, getDataSummary } from '../utils/dataValidation';
import { exportPortfolioData, generateDataTemplate, exportToMarkdown } from '../utils/dataExport';
import portfolioData from '../data/portfolioData';

const DataManagementPanel = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [validation, setValidation] = useState(null);
    const [summary, setSummary] = useState(null);

    const runValidation = () => {
        const result = validatePortfolioData(portfolioData);
        setValidation(result);
    };

    const showSummary = () => {
        const summaryData = getDataSummary(portfolioData);
        setSummary(summaryData);
    };

    // Only show in development mode
    if (process.env.NODE_ENV === 'production') {
        return null;
    }

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
                {isVisible ? 'Hide' : 'Data Manager'}
            </button>

            {isVisible && (
                <div className="absolute bottom-12 right-0 bg-white text-black p-4 rounded-lg shadow-xl w-80 max-h-96 overflow-y-auto">
                    <h3 className="font-bold mb-4">Portfolio Data Manager</h3>

                    <div className="space-y-2">
                        <button
                            onClick={runValidation}
                            className="w-full bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 text-sm"
                        >
                            Validate Data
                        </button>

                        <button
                            onClick={showSummary}
                            className="w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm"
                        >
                            Show Summary
                        </button>

                        <button
                            onClick={exportPortfolioData}
                            className="w-full bg-purple-600 text-white px-3 py-2 rounded hover:bg-purple-700 text-sm"
                        >
                            Export JSON
                        </button>

                        <button
                            onClick={exportToMarkdown}
                            className="w-full bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700 text-sm"
                        >
                            Export Markdown
                        </button>

                        <button
                            onClick={generateDataTemplate}
                            className="w-full bg-orange-600 text-white px-3 py-2 rounded hover:bg-orange-700 text-sm"
                        >
                            Generate Template
                        </button>
                    </div>

                    {validation && (
                        <div className="mt-4 p-3 bg-gray-100 rounded">
                            <h4 className="font-semibold mb-2">Validation Results:</h4>
                            {validation.isValid ? (
                                <p className="text-green-600">✓ All data is valid!</p>
                            ) : (
                                <div className="text-red-600">
                                    <p className="font-medium">Issues found:</p>
                                    <ul className="text-sm mt-1">
                                        {validation.errors.map((error, index) => (
                                            <li key={index}>• {error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {summary && (
                        <div className="mt-4 p-3 bg-gray-100 rounded">
                            <h4 className="font-semibold mb-2">Data Summary:</h4>
                            <div className="text-sm space-y-1">
                                <p>Personal Info: {summary.personalInfo ? '✓' : '✗'}</p>
                                <p>Social Links: {summary.socialLinks} items</p>
                                <p>Skill Categories: {summary.skillCategories}</p>
                                <p>Education: {summary.educationEntries} entries</p>
                                <p>Experience: {summary.experienceEntries} entries</p>
                                <p>Major Projects: {summary.majorProjects}</p>
                                <p>Minor Projects: {summary.minorProjects}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default DataManagementPanel;
