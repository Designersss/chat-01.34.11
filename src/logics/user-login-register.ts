import {IUser} from "../global-types/global-types.ts";
import {MutationTrigger} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {NavigateFunction} from "react-router-dom";
import {REACT_APP_ROUTER_HOME} from "../utils/utils.ts";

interface IRegProps{
    data: IUser[] | undefined,
    email: string,
    password: string,
    img: string,
    name: string,
    createUser: MutationTrigger<any>,
    setUser: ActionCreatorWithPayload<IUser, any>
    navigate: NavigateFunction
}

interface ILogProps{
    data: IUser[] | undefined,
    email: string,
    password: string,
    setUser: ActionCreatorWithPayload<IUser, any>
    navigate: NavigateFunction
}
export const registration = async ({data, email, password, img, name, createUser, setUser, navigate}: IRegProps) => {
    if (data?.find(el => el.email === email)){
        alert('такой пользователь существует')
    } else {
        if (email !== '' && password !== '' && img !== '' && name !== ''){
            const initialState: IUser = {
                email: email,
                password: password,
                img: img,
                chat: [],
                name: name,
                jwtToken: `JWT-${Math.floor(Math.random() * 123)}-${String.fromCharCode(323 + Math.random() * 431)}`
            }
            await createUser(initialState).then(() => setUser(initialState)).then(() => localStorage.setItem('token', initialState.jwtToken)).then(() => navigate(REACT_APP_ROUTER_HOME))
        } else {
            alert('Заполните поля')
        }
    }
}

export const login = ({data, email, password, setUser, navigate}: ILogProps) => {
    const candidate = data?.find(el => el.email === email)
    if (candidate?.password === password){
        setUser(candidate)
        localStorage.setItem('token', candidate.jwtToken)
        navigate(REACT_APP_ROUTER_HOME)
    } else {
        alert('Не правильный email или пароль')
    }
}