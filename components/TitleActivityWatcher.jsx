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
                "😢 Don't leave us alone ",
                "👋 Hey! Still there?",
                "🍪 Come back, we have cookies ",
                "🚀 Your project awaits! ",
                "💔 Missing you already... ",
                "✨ Click here to return! ",
                "⏰ We're waiting for you! "
            ];

            let currentIndex = 0;

            if (document.hidden) {
                // Start changing titles every 1 second
                intervalId = setInterval(() => {
                    document.title = titles[currentIndex];
                    currentIndex = (currentIndex + 1) % titles.length; // Loop back to start
                }, 1000);

                // Store interval ID to clear it later
                window.titleInterval = intervalId;
            } else {
                // Clear the interval when user comes back
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
