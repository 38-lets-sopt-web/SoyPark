import Button from "../../shared/components/button/Button";
import GameoverModal from "./components/GameoverModal";
import Hole from "./components/Hole";
import { useGame } from "./hooks/useGame";

const progressStyle = {
    container: "flex flex-col items-center justify-center p-3 gap-1 rounded-lg bg-blue-100",
    title: "text-sm underline",
    number: "text-2xl"
}

const GamePage = () => {
    const 
    {   
        timeLeft,
        score,
        successCount,
        failCount,
        gameMessage,
        holeStates,
        showModal,
        resetTime,
        handleHoleClick,
        gameStart,
        gameStop,
    } = useGame();

    return (
        <>
            <section className="flex rounded-lg bg-blue-200 p-4 gap-3">
                {/* 진행 상황 */}
                <div className="grid grid-cols-2 gap-2 w-45 rounded-lg">
                    <div className={`${progressStyle.container} col-span-2 py-6`}>
                        <p className={progressStyle.title}>남은 시간</p>
                        <p className={progressStyle.number}>{timeLeft}</p>
                    </div>
                    <div className={`${progressStyle.container} col-span-2 py-6`}>
                        <p className={progressStyle.title}>총 점수</p>
                        <p className={progressStyle.number}>{score}</p>
                    </div>
                    <div className={progressStyle.container}>
                        <p className={`${progressStyle.title} text-green-500`}>성공</p>
                        <p className={progressStyle.number}>{successCount}</p>
                    </div>
                    <div className={progressStyle.container}>
                        <p className={`${progressStyle.title} text-pink-500`}>실패</p>
                        <p className={progressStyle.number}>{failCount}</p>
                    </div>
                    <div className={`${progressStyle.container} col-span-2 pt-5 pb-6`}>
                        <p className={`${progressStyle.title}`}>안내 메시지</p>
                        <p className="text-xs text-center mt-1">{gameMessage}</p>
                    </div>
                </div>

                {/* 게임 보드 */}
                <div className={`${progressStyle.container} w-full flex-1`}>
                    <div className="section-header w-full p-1">
                        <select className="bg-white/30 border-none rounded-lg px-1 py-1.5 text-xs font-semibold shadow-sm outline-none cursor-pointer">
                            <option selected>Level 1</option>
                            <option>Level 2</option>
                            <option>Level 3</option>
                        </select>
                        <div className="flex gap-1">
                            <Button color="green" onClick={gameStart}>시작</Button>
                            <Button color="pink" onClick={gameStop}>중단</Button>
                        </div>
                    </div>
                        <div className="grid grid-cols-2 gap-6 w-100 bg-slate-100 p-8 rounded-2xl">
                            {holeStates.map((status, index) => (
                                <Hole 
                                    key={index} 
                                    status={status} 
                                    onClick={() => handleHoleClick(index)} 
                                />
                            ))}
                    </div>
                    
                </div>
            </section>

            {showModal && (
                <GameoverModal
                    level={1}
                    score={score}
                    resetTime={resetTime}
                />
            )}
        </>
    );
};

export default GamePage;