import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {REACT_APP_URL} from "../utils/utils.ts";
import {IUser} from "../global-types/global-types.ts";


export const api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({
        baseUrl: REACT_APP_URL
    }),
    endpoints: build => ({
        getUser: build.query<IUser[], []>({
            query: () => '/users'
        }),
        createUser: build.mutation<IUser, object>({
            query: (user: IUser) => ({
                url: '/users',
                method: 'POST',
                body: user
            })
        })
    })
})

export const {useGetUserQuery, useCreateUserMutation} = api