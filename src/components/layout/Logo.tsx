'use client';

import React from 'react'
import { useLocale } from 'next-intl';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'w-48 h-12' }) => {
    const locale = useLocale();
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 80" role="img" aria-label={'Alidrisy wordmark'} className={className}>
            <defs>
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
                    .logo-text { 
                        fill: url(#logoGradient);
                        font-family: "Orbitron", sans-serif; 
                        font-weight: 700;
                        letter-spacing: 0.05em;
                        text-anchor: ${locale === 'ar' ? 'end' : 'start'};
                    }
                `}</style>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#c9b8a3', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#d4c4b0', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <text className="logo-text" y="58" fontSize={56}>
                Alidrisy
            </text>
        </svg>
    )
}

export default Logo