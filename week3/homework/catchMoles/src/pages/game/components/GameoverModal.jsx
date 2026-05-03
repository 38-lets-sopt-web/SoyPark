import { createPortal } from "react-dom";

const GameoverModal = ({ level, score, resetTime }) => {
    return createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg text-center">
                <h1 className="text-md">LEVEL {level} 게임 종료!</h1>
                <p className="text-xl text-blue-400">최종 점수: {score}</p>
                <p className="text-xs">{resetTime}초 후에 리셋됩니다...</p>
            </div>
        </div>,
        document.body
  )};

export default GameoverModal;