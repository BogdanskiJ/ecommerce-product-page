import { createSlice } from "@reduxjs/toolkit";

const mainPageSlice = createSlice({
	name: "mainPageSlice",
	initialState: {
		status: "loading",
	},
	reducers: {
		fetchTeritorialUnitError: (state) => {
			state.status = "error";
		},
	},
});

export const { fetchTeritorialUnitError } = mainPageSlice.actions;

export const selectTeritorialUnitState = (state) => state.teritorialUnit;
export const selectTeritorialUnitStatus = (state) =>
	selectTeritorialUnitState(state).status;

export default mainPageSlice.reducer;
