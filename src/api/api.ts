import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {REACT_APP_URL} from "../utils/utils.ts";
import {IUser} from "../global-types/global-types.ts";


export const api = createApi({
    reducerPath: 'Api',
    tagTypes: ['Api'],
    baseQuery: fetchBaseQuery({
        baseUrl: REACT_APP_URL
    }),
    endpoints: build => ({
        getUser: build.query<IUser[], []>({
            query: () => '/users',
            providesTags: () => [{type: 'Api'}]
        }),
        getUserChat: build.query<IUser, string | undefined>({
            query: (id) => `/users/${id}`,
            providesTags: () => [{type: 'Api'}]
        }),
        createUser: build.mutation<IUser, object>({
            query: (user: IUser) => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: () => [{type: 'Api'}]
        }),
        createChat: build.mutation({
            query: (chat) => ({
                url: `/users/${chat.id}`,
                method: 'PUT',
                body: chat
            }),
            invalidatesTags: () => [{type: 'Api'}]
        }),
        sendMessageUser: build.mutation({
            query: (chat) => ({
                url: `/users/${chat.id}`,
                method: 'PUT',
                body: chat
            }),
            invalidatesTags: () => [{type: 'Api'}]
        })
    })
})

export const {useGetUserQuery, useSendMessageUserMutation, useCreateChatMutation, useGetUserChatQuery, useCreateUserMutation} = api