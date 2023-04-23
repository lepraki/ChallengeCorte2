import { configureStore } from "@reduxjs/toolkit";
//import { FotosSlice } from "./slices/fotos/FotosSlice";
//import { todosApi } from "../api/Parcial2Api";
import {counterSlice} from "./counterSlice.jsx";

export const store= configureStore({
	reducer: {
		counter: counterSlice.reducer
		
	}
		
});
