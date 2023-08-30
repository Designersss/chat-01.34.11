import {combineReducers} from "@reduxjs/toolkit";
import {api} from "../api/api.ts";
import {UserSlices} from "../slices/userSlices.ts";


export const globalStore = combineReducers({
    user: UserSlices.reducer,
    [api.reducerPath]: api.reducer
})