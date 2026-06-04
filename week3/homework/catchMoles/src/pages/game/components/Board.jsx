const progressStyle = {
    container: "flex flex-col items-center justify-center p-3 gap-1 rounded-lg bg-blue-100",
    title: "text-sm underline",
    number: "text-2xl"
};

const GameProgress = ({ timeLeft, score, successCount, failCount, gameMessage }) => {
    return (
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
    );
};

export default GameProgress;