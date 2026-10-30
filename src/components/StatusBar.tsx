'use client';

import { useState, useEffect } from "react";
import "./StatusBar.css";

export const StatusBar = () => {
    const [timeStr, setTimeStr] = useState<string>("");
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const updateTime = () => {
            setTimeStr(new Date().toLocaleTimeString([], { hour12: false }));
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const percentage = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
            setScroll(Math.min(100, Math.max(0, percentage)));
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            clearInterval(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="status-bar">
            <div className="status-left">
                <span className="status-indicator">
                    <span className="status-dot-pulse" />
                    SYSTEM ONLINE
                </span>
                <span className="status-hidden-mobile">User State: Active</span>
                <span className="status-hidden-mobile">Mode: Research</span>
            </div>

            <div className="status-right">
                <div className="scroll-indicator-container">
                    <span className="scroll-label">Scroll</span>
                    <div className="scroll-bar-track">
                        <div
                            className="scroll-bar-fill"
                            style={{ width: `${scroll}%` }}
                        />
                    </div>
                    <span className="scroll-percentage">{Math.round(scroll)}%</span>
                </div>
                <span className="status-time" suppressHydrationWarning>
                    {timeStr || "--:--:--"}
                </span>
            </div>
        </div>
    );
};
