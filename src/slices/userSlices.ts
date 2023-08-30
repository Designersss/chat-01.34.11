import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../global-types/global-types.ts";

const initialState = {
    user: <IUser>{}
}
export const UserSlices = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        }
    }
})