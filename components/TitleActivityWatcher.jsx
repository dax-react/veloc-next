"use client";
import { useEffect } from "react";

export default function TitleActivityWatcher({ activeTitle }) {
    useEffect(() => {
        if (!activeTitle) return;

        const originalTitle = activeTitle;

        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = "We miss you! Come back 💜";
            } else {
                document.title = originalTitle;
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () =>
            document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, [activeTitle]);

    return null;
}
