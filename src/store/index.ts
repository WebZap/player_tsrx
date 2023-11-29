import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './reducers';

const;
const store = configureStore({
	reducer: RootReducer,
});

export type ReducerType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
