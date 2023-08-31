export interface IUser {
    id?: number,
    name: string,
    email: string,
    password: string,
    img: string,
    jwtToken: string,
    chat: IChat[]
}

export interface IChat {
    id?: number
    userId: number | undefined,
    name: string,
    img: string
    message: IMessage[]
}

export interface IMessage{
    userId: number | undefined
    title: string
}

export const initialUser: IUser = {
    name: 'New-User',
    img: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
    jwtToken: '',
    chat: [],
    password: '',
    email: ''
}