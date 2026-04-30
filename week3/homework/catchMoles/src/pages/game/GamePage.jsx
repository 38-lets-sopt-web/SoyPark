const progressStyle = {
    container: "flex flex-col items-center p-3 gap-1 rounded-lg bg-blue-100",
    title: "text-sm",
    number: "text-xl"
}



const GamePage = () => {
    return (
        <section className="section-container">
            {/* 진행 상황 */}
            <div className="grid grid-cols-2 gap-2 w-40 rounded-lg">
                <div className={`${progressStyle.container} col-span-2 py-6`}>
                    <p className={progressStyle.title}>남은 시간</p>
                    <p className={progressStyle.number}>20.0</p>
                </div>
                <div className={`${progressStyle.container} col-span-2 py-6`}>
                    <p className={progressStyle.title}>총 점수</p>
                    <p className={progressStyle.number}>0</p>
                </div>
                <div className={progressStyle.container}>
                    <p className={`${progressStyle.title} text-red-500`}>성공</p>
                    <p className={progressStyle.number}>0</p>
                </div>
                <div className={progressStyle.container}>
                    <p className={`${progressStyle.title} text-green-500`}>실패</p>
                    <p className={progressStyle.number}>0</p>
                </div>
                <div className={`${progressStyle.container} col-span-2 pt-5 pb-8`}>
                    <p className={`${progressStyle.title}`}>안내 메시지</p>
                    <p className="text-xs">안내메시지 자리입니다.안내메시지 자리입니다.안내메시지 자리입니다.</p>
                </div>
                
            </div>

            {/* 게임 보드 */}
            <div>

            </div>
        </section>
    )
}

export default GamePage;