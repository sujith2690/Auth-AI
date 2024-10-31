import React from 'react';
import { useNavigate } from 'react-router-dom';

const Buttons = ({ content, className = '', data }) => {
    const navigate = useNavigate();

    const handlePath = () => {
        if (data) { // Ensure data exists to navigate
            navigate(`/services/serviceDetails/${data}`);
        }
    };

    return (
        <>
            {content ? (
                <button
                    onClick={handlePath}
                    className={`bg-gradient-to-r from-[#0788AE] to-[#22AAD2] rounded-full text-white px-8 py-1 text-[10px] md:text-sm border-0 border-[#A0EAFF] ${className}`}
                >
                    {content}
                </button>
            ) : null}
        </>
    );
};

export default Buttons;
