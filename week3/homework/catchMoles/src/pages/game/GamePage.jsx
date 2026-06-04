import GameProgress from "./components/Board";
import GameoverModal from "./components/GameoverModal";
import GameBoard from "./components/GameProgress";
import { useGame } from "./hooks/useGame";

const level = 1;

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
        isPlaying,
        handleHoleClick,
        gameStart,
        gameStop,
    } = useGame();

    return (
        <>
            <section className="flex rounded-lg bg-blue-200 p-4 gap-3">
                {/* 진행 상황 */}
                <GameProgress 
                    timeLeft={timeLeft}
                    score={score}
                    successCount={successCount}
                    failCount={failCount}
                    gameMessage={gameMessage}
                />

                {/* 게임 보드 */}
                <GameBoard
                    level={level}
                    // handleLevelChange={handleLevelChange}
                    isPlaying={isPlaying}
                    gameStart={gameStart}
                    gameStop={gameStop}
                    holeStates={holeStates}
                    handleHoleClick={handleHoleClick}
                />
            </section>

            {showModal && (
                <GameoverModal
                    level={level}
                    score={score}
                    resetTime={resetTime}
                />
            )}
        </>
    );
};

export default GamePage;