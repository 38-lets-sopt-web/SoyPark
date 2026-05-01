export const GAME_SETTINGS = {
  DEFAULT_LIMIT_TIME: 15, 
  HOLE_COUNT: 4, // 2x2 보드
  DOG_SHOW_DURATION: 1000, 
  SUCCESS_DURATION: 700,
  RESET_TIME: 5,
  TIMER: 1000,
  RANDOM_TIME: () => Math.floor(Math.random()*1500) + 1000,
};

export const HOLE_STATUS = {
  EMPTY: 'empty',
  SLEEPY: 'sleepy', 
  ANGRY: 'angry',  
  WAKE_UP: 'success',  
};