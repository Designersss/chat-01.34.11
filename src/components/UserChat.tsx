import {IChat} from "../global-types/global-types.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

interface UserChatProps {
    chat: IChat
}
const UserChat:FC<UserChatProps> = ({chat}) => {
    return (
        <Link key={chat.id} to={`/chat/${chat.userId}`} className='flex w-52 mt-2 items-center bg-[#242424] rounded-md px-3 py-1'>
            <img className='w-9 h-9 object-cover rounded-full' src={chat.img} alt=""/>
            <div className='ml-2'>
                <p>{chat.name}</p>
                {
                    chat.message ? <span className='flex text-[12px] -mt-1'>{chat?.message[chat.message.length - 1]?.title}</span> : <span className='flex text-[12px] -mt-1'>Напишите сообщение...</span>
                }
            </div>
        </Link>
    );
};

export default UserChat;