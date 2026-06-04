import { GAME_SETTINGS, HOLE_STATUS } from '../constants/gameSetting';

export const createEmptyHoleStates = () => {
  return Array(GAME_SETTINGS.HOLE_COUNT).fill(HOLE_STATUS.EMPTY);
};

export const getRandomDogStatus = () => {
  const isAngry = Math.random() < 0.3;
  return isAngry ? HOLE_STATUS.ANGRY : HOLE_STATUS.SLEEPY;
};

export const updateHoleStatus = (holeStates, index, status) => {
  const updated = [...holeStates];
  updated[index] = status;
  return updated;
};