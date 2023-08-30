export interface IUser {
    id?: number,
    name: string,
    img: string,
    jwtToken: string,
    chat: IChat[]
}

export interface IChat {
    id?: number
    userId: number,
    message: IMessage[]
    notViewed: IMessage[]
}

export interface IMessage{
    id?: number,
    title: string
}