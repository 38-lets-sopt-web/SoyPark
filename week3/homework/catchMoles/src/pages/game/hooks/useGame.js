import { useState } from "react"
import { GAME_SETTINGS, HOLE_STATUS } from "../constants/gameSetting"
import { useRef } from "react";
import { GAME_MESSAGES } from "../constants/gameMessages";

export const useGame = () => {
    const [timeLeft, setTimeLeft] = useState(GAME_SETTINGS.DEFAULT_LIMIT_TIME);
    const [isPlaying, setIsPlaying] = useState(false);
    const timerRef = useRef(null);
    const [gameMessage, setGameMessage] = useState(GAME_MESSAGES.INTRO);

    const [score, setScore] = useState(0);
    const [successCount, setSuccessCount] = useState(0);
    const [failCount, setFailCount] = useState(0); 
    const [holeStates, setHoleStates] = useState(Array(4).fill('empty'));

    const showDog = () => {
        const randomIndex = Math.floor(Math.random() * 4);

        const newHoles = Array(4).fill('empty');
        newHoles[randomIndex] = 'sleepy';
        setHoleStates(newHoles);
    }


    const gameStart = () => {
        if(isPlaying) return;

        setIsPlaying(true);
        setTimeLeft(GAME_SETTINGS.DEFAULT_LIMIT_TIME);

        setScore(0);
        setSuccessCount(0);
        setFailCount(0);

        showDog();

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1 ) {
                    clearInterval(timerRef.current);
                    setIsPlaying(false);
                    setHoleStates(Array(4).fill(HOLE_STATUS.EMPTY));
                    setGameMessage(GAME_MESSAGES.GAME_OVER);
                    return 0;
                }
                return prev - 1
            })
        }, 1000);
    }

    const handleHoleClick = (index) => {
        if (!isPlaying) return;

        if (holeStates[index] === HOLE_STATUS.SLEEPY){
            setScore((prev) => prev + 1);
            setSuccessCount((prev) => prev + 1);
            setGameMessage(GAME_MESSAGES.SUCCESS);

            const successHoles = [...holeStates];
            successHoles[index] = HOLE_STATUS.WAKE_UP;
            setHoleStates(successHoles);

            setTimeout(() => {
                showDog();
            }, GAME_SETTINGS.DOG_SHOW_DURATION);

        } else if (holeStates[index] === HOLE_STATUS.ANGRY) { // 꽝 클릭시
            setScore((prev) => prev - 1);
            setFailCount((prev) => prev + 1);
            setGameMessage(GAME_MESSAGES.FAIL);
            
            showDog();
            }
    }

    return {
        timeLeft,
        isPlaying,
        gameMessage,
        score,
        successCount,
        failCount,
        holeStates,
        gameStart,
        handleHoleClick,
    }
}