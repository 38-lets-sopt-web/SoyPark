const RANKING_KEY = "rankings";

export const rankingStorage = {
    // 전체 데이터 조회
    get: () => {
        const data = localStorage.getItem(RANKING_KEY);
        return data ? JSON.parse(data) : [];
    },

    // 새 기록 저장
    save: (newRecord) => {
        const current = rankingStorage.get();
        const updated = [...current, newRecord].sort((a, b) => b.score - a.score); // 점수 내림차순
        
        localStorage.setItem(RANKING_KEY, JSON.stringify(updated));
    },

    // 전체 초기화
    clear: () => {
        localStorage.removeItem(RANKING_KEY);
    }
};