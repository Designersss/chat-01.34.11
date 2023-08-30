import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialUser, IUser} from "../global-types/global-types.ts";

const initialState = {
    user: <IUser>initialUser
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

export const {actions, reducer} = UserSlices