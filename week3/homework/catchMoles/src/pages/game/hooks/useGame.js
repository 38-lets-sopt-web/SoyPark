import { useState } from "react"
import { GAME_SETTINGS, HOLE_STATUS } from "../constants/gameSetting"
import { useRef } from "react";
import { GAME_MESSAGES } from "../constants/gameMessages";
import { rankingStorage } from "../../../shared/utils/storage";
import { useEffect } from "react";
import { useCallback } from "react";

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
    const modalTimerRef = useRef(null);
    const holeTimersRef = useRef(new Array(GAME_SETTINGS.HOLE_COUNT).fill(null));
    
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
    const clearAllTimers = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        if (modalTimerRef.current) {
            clearInterval(modalTimerRef.current);
            modalTimerRef.current = null;
        }
        if (holeTimersRef.current) {
            holeTimersRef.current.forEach((timer) => {
                if (timer) clearTimeout(timer);
            });
        }
    }, []);

    // 랜덤으로 졸린 강아지 노출 (특정 hole)
    const showDog = useCallback(function showDog(holeIndex) {
        const isAngry = Math.random() < 0.3; // 30% 확률로 꽝
        const newStatus = isAngry ? HOLE_STATUS.ANGRY : HOLE_STATUS.SLEEPY;

        setHoleStates((prev) => {
            const updated = [...prev];
            updated[holeIndex] = newStatus;
            return updated;
        });

        holeTimersRef.current[holeIndex] = setTimeout(() => {
            setHoleStates((prev) => {
                const updated = [...prev];
                updated[holeIndex] = HOLE_STATUS.EMPTY;
                return updated;
            });
            

            holeTimersRef.current[holeIndex] = setTimeout(() => {
                showDog(holeIndex);
            }, GAME_SETTINGS.RANDOM_TIME());

        }, GAME_SETTINGS.DOG_SHOW_DURATION);
    }, []);

    // 모든 hole에 노출
    const startAllDogs = () => {
        for (let i = 0; i < GAME_SETTINGS.HOLE_COUNT; i++) {
            holeTimersRef.current[i] = setTimeout(() => {
                showDog(i);
            },GAME_SETTINGS.RANDOM_TIME() + i * 500);
        }
    };

    const gameStart = () => {
        if(isPlaying) return;

        setIsPlaying(true);
        initGame();
        startAllDogs();

        timerRef.current = setInterval(() => {
            setTimeLeft((now) => {
                if (now <= 1 ) { // 게임 종료
                    setScore((currentScore) => {
                        setTimeout(() => gameFinish(currentScore), 0);
                        return currentScore;
                    });
                    return 0;
                }
                return now - 1
            })
        }, GAME_SETTINGS.TIMER);
    };

    const gameFinish = (finishScore) => {
        if (!timerRef.current) return;

        clearAllTimers();
        setIsPlaying(false);
        setHoleStates(Array(GAME_SETTINGS.HOLE_COUNT).fill(HOLE_STATUS.EMPTY));
        setGameMessage(GAME_MESSAGES.GAME_OVER);

        if (finishScore > 0) {
            rankingStorage.save({
                id: Date.now(),
                level: "Level 1",
                score: finishScore,
                date: new Date().toLocaleString("ko-KR"),
            });
        }
        

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
        if (holeTimersRef.current[index]) clearTimeout(holeTimersRef.current[index]);

        if (holeStates[index] === HOLE_STATUS.SLEEPY){ // 성공시
            setScore((prev) => prev + 1);
            setSuccessCount((prev) => prev + 1);
            setGameMessage(GAME_MESSAGES.SUCCESS);

            setHoleStates((prev) => { // 성공시 이미지 변경
                const updated = [...prev];
                updated[index] = HOLE_STATUS.WAKE_UP;
                return updated;
            });

            holeTimersRef.current[index] = setTimeout(() => { // 성공한 구멍만 700ms 후에 비움
                setHoleStates((prev) => {
                    const updated = [...prev];
                    updated[index] = HOLE_STATUS.EMPTY;
                    return updated;
                });

                holeTimersRef.current[index] = setTimeout(() => {
                    showDog(index);
                }, GAME_SETTINGS.RANDOM_TIME());

            }, GAME_SETTINGS.SUCCESS_DURATION);

        } else if (holeStates[index] === HOLE_STATUS.ANGRY) { // 꽝 클릭시
            setScore((prev) => prev - 1);
            setFailCount((prev) => prev + 1);
            setGameMessage(GAME_MESSAGES.FAIL);
            
            setHoleStates((prev) => {
                const updated = [...prev];
                updated[index] = HOLE_STATUS.EMPTY;
                return updated;
            });

            holeTimersRef.current[index] = setTimeout(() => {
                showDog(index);
            }, GAME_SETTINGS.RANDOM_TIME());
        }
    };

    // 컴포넌트가 사라질 때 모든 타이머 파기
    useEffect(() => {
        return () => clearAllTimers();
    }, [clearAllTimers]);

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