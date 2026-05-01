import { useState } from "react"
import { GAME_SETTINGS, HOLE_STATUS } from "../constants/gameSetting"
import { useRef } from "react";
import { GAME_MESSAGES } from "../constants/gameMessages";
import { rankingStorage } from "../../../shared/utils/storage";
import { useEffect } from "react";

export const useGame = () => {
    const [timeLeft, setTimeLeft] = useState(GAME_SETTINGS.DEFAULT_LIMIT_TIME); // 남은시간
    const [isPlaying, setIsPlaying] = useState(false);
    const [score, setScore] = useState(0); // 총점수
    const [successCount, setSuccessCount] = useState(0);
    const [failCount, setFailCount] = useState(0); 
    const [holeStates, setHoleStates] = useState(Array(GAME_SETTINGS.HOLE_COUNT).fill('empty')); // 구멍 이미지 상태
    const [gameMessage, setGameMessage] = useState(GAME_MESSAGES.INTRO);
    const [showModal, setShowModal] = useState(false);
    const [resetTime, setResetTime] = useState(GAME_SETTINGS.RESET_TIME);

    const timerRef = useRef(null); // 게임 전체 시간
    const dogTimerRef = useRef(null); // 강아지 나오는 타이밍
    const modalTimerRef = useRef(null);
    
    // 초기화 함수
    const initGame = () => {
        setTimeLeft(GAME_SETTINGS.DEFAULT_LIMIT_TIME);
        setGameMessage(GAME_MESSAGES.INTRO);
        setScore(0);
        setSuccessCount(0);
        setFailCount(0);
        setHoleStates(Array(GAME_SETTINGS.HOLE_COUNT).fill(HOLE_STATUS.EMPTY));
    };

    // 타이머 정리 함수
    const clearAllTimers = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null; 
        }
        if (dogTimerRef.current) {
            clearTimeout(dogTimerRef.current);
            dogTimerRef.current = null;
        }
        if (modalTimerRef.current) {
            clearInterval(modalTimerRef.current);
            modalTimerRef.current = null;
        }
    };

    // 랜덤으로 졸린 강아지 노출
    const showDog = () => {
        if (dogTimerRef.current) clearTimeout(dogTimerRef.current);

        dogTimerRef.current = setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * GAME_SETTINGS.HOLE_COUNT);
            const isAngry = Math.random() < 0.3; // 30% 확률로 꽝

            const newHoles = Array(GAME_SETTINGS.HOLE_COUNT).fill(HOLE_STATUS.EMPTY);
            newHoles[randomIndex] = isAngry ? HOLE_STATUS.ANGRY : HOLE_STATUS.SLEEPY;

            setHoleStates(newHoles);

            showDog();
        }, GAME_SETTINGS.RANDOM_TIME);
    };

    const gameStart = () => {
        if(isPlaying) return;

        setIsPlaying(true);
        initGame();
        showDog();

        timerRef.current = setInterval(() => {
            setTimeLeft((now) => {
                if (now <= 1 ) { // 게임 종료
                    gameFinish();
                    return 0;
                }
                return now - 1
            })
        }, GAME_SETTINGS.TIMER);
    };

    const gameFinish = () => {
    clearAllTimers();

    setIsPlaying(false);
    setHoleStates(Array(GAME_SETTINGS.HOLE_COUNT).fill(HOLE_STATUS.EMPTY));
    setGameMessage(GAME_MESSAGES.GAME_OVER);

    rankingStorage.save({
        id: Date.now(),
        level: "Level 1",
        score,
        date: new Date().toLocaleString("ko-KR"),
    });

    setShowModal(true);
    setResetTime(GAME_SETTINGS.RESET_TIME);

    modalTimerRef.current = setInterval(() => {
        setResetTime((prev) => {
            if (prev <= 1) {
                clearInterval(modalTimerRef.current);
                modalTimerRef.current = null;

                setShowModal(false);
                initGame();

                return 0;
            }

            return prev - 1;
        });
    }, GAME_SETTINGS.TIMER);
};

    const gameStop = () => {
        clearAllTimers();
        setIsPlaying(false);
        initGame();
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
    };

    useEffect(() => {
        return () => clearAllTimers();
    }, []);

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