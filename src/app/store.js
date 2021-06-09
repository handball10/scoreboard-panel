import { configureStore } from '@reduxjs/toolkit';
import gameStateReducer from '../reducer/gameStateSlice';

export const store = configureStore({
  reducer: {
    game: gameStateReducer
  },
});
