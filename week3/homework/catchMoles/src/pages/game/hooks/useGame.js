import { useState } from "react"
import { GAME_SETTINGS } from "../constants/gameSetting"
import { useRef } from "react";
import { GAME_MESSAGES } from "../constants/gameMessages";

export const useGame = () => {
    const [timeLeft, setTimeLeft] = useState(GAME_SETTINGS.DEFAULT_LIMIT_TIME);
    const [isPlaying, setIsPlaying] = useState(false);
    const timerRef = useRef(null);
    const [gameMessage, setGameMessage] = useState("");

    const gameStart = () => {
        if(isPlaying) return;

        setIsPlaying(true);
        setTimeLeft(GAME_SETTINGS.DEFAULT_LIMIT_TIME);

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1 ) {
                    clearInterval(timerRef.current);
                    setIsPlaying(false);
                    setGameMessage(GAME_MESSAGES.GAME_OVER);
                    return 0;
                }
                return prev - 1
            })
        }, 1000);
    }

    return {
        timeLeft,
        isPlaying,
        gameMessage,
        gameStart,
    }
}