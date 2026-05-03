import { rankingStorage } from "../../../shared/utils/storage";

export const saveRanking = (score) => {
  if (score <= 0) return;

  rankingStorage.save({
    id: Date.now(),
    level: 'Level 1',
    score,
    date: new Date().toLocaleString('ko-KR'),
  });
};