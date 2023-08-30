import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {REACT_APP_URL} from "../utils/utils.ts";


export const api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({
        baseUrl: REACT_APP_URL
    }),
    endpoints: build => ({
        getUser: build.query({
            query: () => '/users'
        })
    })
})

export const {useGetUserQuery} = api