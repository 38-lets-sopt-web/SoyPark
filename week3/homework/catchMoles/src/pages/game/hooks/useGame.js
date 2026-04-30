import { useState } from "react"
import { GAME_SETTINGS, HOLE_STATUS } from "../constants/gameSetting"
import { useRef } from "react";
import { GAME_MESSAGES } from "../constants/gameMessages";

export const useGame = () => {
    const [timeLeft, setTimeLeft] = useState(GAME_SETTINGS.DEFAULT_LIMIT_TIME); // 남은시간
    const [isPlaying, setIsPlaying] = useState(false);
    const timerRef = useRef(null);
    const dogTimerRef = useRef(null);
    const modalTimerRef = useRef(null); 

    const [score, setScore] = useState(0); // 총점수
    const [successCount, setSuccessCount] = useState(0);
    const [failCount, setFailCount] = useState(0); 
    const [holeStates, setHoleStates] = useState(Array(GAME_SETTINGS.HOLE_COUNT).fill('empty')); // 구멍 이미지 상태
    const [gameMessage, setGameMessage] = useState(GAME_MESSAGES.INTRO);

    const [showModal, setShowModal] = useState(false);
    const [resetTime, setResetTime] = useState(GAME_SETTINGS.RESET_TIME);
    
    // 초기화 함수
    const initGame = () => {
        setTimeLeft(GAME_SETTINGS.DEFAULT_LIMIT_TIME);
        setGameMessage(GAME_MESSAGES.INTRO);
        setScore(0);
        setSuccessCount(0);
        setFailCount(0);
    }

    // 랜덤으로 졸린 강아지 노출
    const showDog = () => {
        if (dogTimerRef.current) clearTimeout(dogTimerRef.current);

        dogTimerRef.current = setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * GAME_SETTINGS.HOLE_COUNT);
            const newHoles = Array(GAME_SETTINGS.HOLE_COUNT).fill(HOLE_STATUS.EMPTY);

            const isAngry = Math.random() < 0.3; // 30% 확률로 꽝
            newHoles[randomIndex] = isAngry ? HOLE_STATUS.ANGRY : HOLE_STATUS.SLEEPY;
            setHoleStates(newHoles);

            showDog();
        }, 700);
    }

    const gameStart = () => {
        if(isPlaying) return;

        setIsPlaying(true);

        initGame();

        showDog();

        timerRef.current = setInterval(() => {
            setTimeLeft((now) => {
                if (now <= 1 ) { // 게임 종료
                    clearInterval(timerRef.current);
                    if (dogTimerRef.current) clearTimeout(dogTimerRef.current);

                    setIsPlaying(false);
                    setHoleStates(Array(GAME_SETTINGS.HOLE_COUNT).fill(HOLE_STATUS.EMPTY));
                    setGameMessage(GAME_MESSAGES.GAME_OVER);
                    
                    triggerModal();
                    return 0;
                }
                return now - 1
            })
        }, 1000);
    }

    const gameStop = () => {
        setIsPlaying(false);
        initGame();
        setHoleStates(Array(GAME_SETTINGS.HOLE_COUNT).fill('empty'));
        clearInterval(timerRef.current);
        clearTimeout(dogTimerRef.current);
    }

    // 게임 종료 모달 
    const triggerModal = () => {
        setShowModal(true);
        setResetTime(GAME_SETTINGS.RESET_TIME);

        if (modalTimerRef.current) {
            clearInterval(modalTimerRef.current);
        }

        modalTimerRef.current = setInterval(() => {
            setResetTime((prev) => {
                if (prev <= 1) {
                    clearInterval(modalTimerRef.current);
                    setShowModal(false);

                    initGame();
                    return 0;
                }
                return prev - 1;
            })
        }, 1000);
    };

    const handleHoleClick = (index) => {
        if (!isPlaying) return;

        if (holeStates[index] === HOLE_STATUS.SLEEPY){ // 성공시
            setScore((prev) => prev + 1);
            setSuccessCount((prev) => prev + 1);
            setGameMessage(GAME_MESSAGES.SUCCESS);

            const successHoles = [...holeStates]; // 성공시 이미지 변경
            successHoles[index] = HOLE_STATUS.WAKE_UP;
            setHoleStates(successHoles);

            if (dogTimerRef.current) clearTimeout(dogTimerRef.current);

            setTimeout(() => {
                showDog();
            }, GAME_SETTINGS.DOG_SHOW_DURATION);

        } else if (holeStates[index] === HOLE_STATUS.ANGRY) { // 꽝 클릭시
            setScore((prev) => prev - 1);
            setFailCount((prev) => prev + 1);
            setGameMessage(GAME_MESSAGES.FAIL);
            
            if (dogTimerRef.current) clearTimeout(dogTimerRef.current);
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
        showModal,
        resetTime,
        gameStart,
        gameStop,
        handleHoleClick,
    }
}