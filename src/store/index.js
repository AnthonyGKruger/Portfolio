import { configureStore } from "@reduxjs/toolkit";

import contactMeSlice from "./contactMe-slice";

const store = configureStore({
	reducer: {  contactMe: contactMeSlice.reducer },
});

export default store;
