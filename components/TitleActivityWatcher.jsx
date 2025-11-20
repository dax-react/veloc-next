"use client";
import { useEffect } from "react";

export default function TitleActivityWatcher({ activeTitle }) {
    useEffect(() => {
        if (!activeTitle) return;

        const originalTitle = activeTitle;

        const handleVisibilityChange = () => {
            let intervalId;

            const titles = [
                "🥹 We miss you!",
                "👋 Come back!",
            ];

            let currentIndex = 0;

            if (document.hidden) {
                intervalId = setInterval(() => {
                    document.title = titles[currentIndex];
                    currentIndex = (currentIndex + 1) % titles.length; // Loop back to start
                }, 1000);

                window.titleInterval = intervalId;
            } else {
                if (window.titleInterval) {
                    clearInterval(window.titleInterval);
                    window.titleInterval = null;
                }
                document.title = originalTitle;
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () =>
            document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, [activeTitle]);

    return null;
}
