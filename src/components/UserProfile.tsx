import {FC} from "react";
import {useCreateChatMutation} from "../api/api.ts";
import {useGetUser} from "../hooks/useGetUser.ts";
import {IChat, IUser} from "../global-types/global-types.ts";

interface UserProfileProps {
    name: string,
    img: string,
    userId: IUser,
    userIdChat: Array<object>
}
const UserProfile:FC<UserProfileProps> = ({name, img, userId, userIdChat}) => {
    const [createChat] = useCreateChatMutation()
    const {user} = useGetUser()
    console.log()
    const addChat = () => {
        const initialChatOne: IChat = {
            userId: userId.id,
            img: userId.img,
            name: userId.name,
            message: []
        }
        const initialChatTw: IChat = {
            userId: user.id,
            img: user.img,
            name: user.name,
            message: []
        }
        createChat({...user, chat: [...user.chat, initialChatOne]}).then(() => createChat({...userId, chat: [...userIdChat, initialChatTw]}))
    }
    return (
        <div className='bg-[#393939] mt-2 px-4 py-4 rounded-md justify-center'>
            <img className='flex m-auto w-12 h-12 rounded-full object-cover' src={img} alt=""/>
            <span className='flex justify-center mt-2'>{name}</span>
            {
                user.chat.find(el => el.userId === userId.id) ? <button className='text-white bg-[#444444] cursor-auto px-8 py-2 w-full rounded-md mt-2'>Есть в списке</button> : <button onClick={addChat} className='text-white bg-[#444444] px-8 py-2 rounded-md mt-2'>Добавить в чат</button>
            }

        </div>
    );
};

export default UserProfile;