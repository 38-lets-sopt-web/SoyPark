// src/pages/game/components/GameBoard.jsx
import Button from "../../../shared/components/button/Button";
import Hole from "./Hole";

const GameBoard = ({
    level,
    handleLevelChange,
    isPlaying,
    gameStart,
    gameStop,
    holeStates,
    handleHoleClick
}) => {

    const gridColsClass = level === 1 ? "grid-cols-2" : level === 2 ? "grid-cols-3" : "grid-cols-4";

    return (
        <div className="flex flex-col items-center justify-center p-3 gap-1 rounded-lg bg-blue-100 w-full flex-1">
            <div className="section-header w-full p-1 flex justify-between">
                <select 
                    className="bg-white/30 border-none rounded-lg px-1 py-1.5 text-xs font-semibold shadow-sm outline-none cursor-pointer disabled:opacity-50"
                    value={level}
                    onChange={(e) => handleLevelChange(e.target.value)}
                    disabled={isPlaying}
                >
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                </select>
                <div className="flex gap-1">
                    <Button color="green" onClick={gameStart}>시작</Button>
                    <Button color="pink" onClick={gameStop}>중단</Button>
                </div>
            </div>

            <div className={`grid ${gridColsClass} gap-6 w-full max-w-md bg-slate-100 p-8 rounded-2xl`}>
                {holeStates.map((status, index) => (
                    <Hole 
                        key={index} 
                        status={status} 
                        onClick={() => handleHoleClick(index)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default GameBoard;