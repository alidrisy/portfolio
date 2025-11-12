'use client';

import React from 'react'

const LogoIcon: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="Alidrisy icon" width="32" height="32">
            <defs>
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
                    .icon-text { 
                        fill: url(#iconGradient);
                        font-family: "Orbitron", sans-serif; 
                        font-weight: 800;
                        letter-spacing: 0.02em;
                        text-anchor: middle;
                        dominant-baseline: middle;
                    }
                `}</style>
                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#c9b8a3', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#d4c4b0', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="#1a1816" rx="16" />
            <text className="icon-text" x="50" y="50" fontSize={68}>
                A
            </text>
        </svg>
    )
}

export default LogoIcon
