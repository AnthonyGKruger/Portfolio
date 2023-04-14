import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: { aboutPageIsVisible: false },
	reducers: {
		toggle(state) {
			state.aboutPageIsVisible = !state.aboutPageIsVisible;
      console.log(state.aboutPageIsVisible)
		},
	},
});


export const uiActions = uiSlice.actions;

export default uiSlice;


//checkout how to get current url using react router and then manipulate navigation with redux state