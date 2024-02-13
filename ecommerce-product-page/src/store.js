import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import mainPageReducer from "./features/mainPage/mainPageSlice";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
	reducer: {
		mainPage: mainPageReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export default store;
