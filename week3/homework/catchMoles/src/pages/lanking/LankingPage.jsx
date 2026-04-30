import Button from "../../shared/components/button/Button";

const tableStyles = {
  table: "w-full text-sm text-center",
  thead: "bg-blue-400 text-white",
  th: "py-3 px-4 font-semibold",
  tr: "text-slate-600 hover:bg-white/40 transition-colors",
  td: "py-4 px-4",
};

const LankingPage = () => {
    // 임시데이터
    const rankings = [
        { id: 1, rank: 1, level: "Level 2", score: "20점", date: "2026. 4. 25. 오전 1:14:15" },
    ];

    return (
        <section className="section-container">
            <div className="section-header">
                <h1 className="font-semibold">랭킹 보드</h1>
                <Button color="red">
                    기록 초기화
                </Button>
            </div>
            
            {/* 테이블 영역 */}
            <div className="overflow-hidden rounded-xl bg-white/50">
                <table className={tableStyles.table}>
                <thead className={tableStyles.thead}>
                    <tr>
                    <th className={tableStyles.th}>순위</th>
                    <th className={tableStyles.th}>레벨</th>
                    <th className={tableStyles.th}>점수</th>
                    <th className={tableStyles.th}>기록 시각</th>
                    </tr>
                </thead>
                
                {/* 테이블 바디 */}
                <tbody className="divide-y divide-blue-100">
                    {rankings.map((item) => (
                    <tr key={item.id} className="text-slate-600 hover:bg-white/40 transition-colors">
                        <td className={tableStyles.td}>{item.rank}</td>
                        <td className={tableStyles.td}>{item.level}</td>
                        <td className={tableStyles.td}>{item.score}</td>
                        <td className={tableStyles.td}>{item.date}</td>
                    </tr>
                    ))}
                    
                    {/* 데이터가 없을 때 */}
                    {rankings.length === 0 && (
                    <tr>
                        <td colSpan="4" className="py-3 text-black">아직 기록이 없습니다.</td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
        </section>
    )
}

export default LankingPage;