import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/home';

const store = configureStore({
	reducer: {
		home: authReducer,
	},
});

export default store;
