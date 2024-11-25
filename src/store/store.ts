import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlicer';

const store = configureStore({
  reducer: {
    items: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
