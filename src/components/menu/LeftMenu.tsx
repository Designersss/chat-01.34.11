import {useGetUser} from "../../hooks/useGetUser.ts";
import UserChat from "../UserChat.tsx";


const LeftMenu = () => {
    const {user} = useGetUser()
    return (
        <div className='bg-[#323232] px-3 py-2 h-screen'>
            <section className='flex justify-center items-center'>
                <div className='flex w-full h-0.5 bg-white'></div>
                <span className='ml-2 mr-2'>Пользователи</span>
                <div className='flex w-full h-0.5 bg-white'></div>
            </section>
            <div>
                {
                    user.chat ? user.chat.map(chat => <UserChat key={chat.id} chat={chat} />).reverse() : <span className='flex w-52 mt-2 items-center bg-[#242424] rounded-md px-3 py-1'>Добавьте контакт</span>
                }
            </div>
        </div>
    );
};

export default LeftMenu;