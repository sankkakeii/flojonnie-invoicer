import React from 'react';
import Navbar from '@/components/Navbar';
import { useRequireAuth } from '../config/useRequireAuth';
import LoadingSpinner from '@/components/Loader';

const LetterHead = () => {
    const loading = useRequireAuth();

    if (loading) {
        return <LoadingSpinner/>;
    }
    
    const handleDownload = (fileType) => {
        let fileName;
        if(fileType === "docx") {
            fileName = "flojonnie-letterhead.docx";
        } else if(fileType === "pdf") {
            fileName = "flojonnie-letterhead.pdf";
        }

        fetch(`/docs/${fileName}`)  // Adjusted path to file
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${fileName}`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        });
    };

    return (
        <>
        <Navbar/>
        <main className="flex flex-col min-h-screen items-center justify-center p-8 bg-gray-100">
            <h1 className="text-4xl font-bold mb-8 text-center">Letterhead</h1>
            <div className="flex flex-col space-y-4 bg-white p-16 shadow-lg rounded">
                <button 
                    className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => handleDownload("docx")}
                >
                    Download DOCX
                </button>
                <button 
                    className="px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600"
                    onClick={() => handleDownload("pdf")}
                >
                    Download PDF
                </button>
            </div>
        </main>
        </>
    );
};

export default LetterHead;
