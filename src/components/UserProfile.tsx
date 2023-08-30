import {FC} from "react";

interface UserProfileProps {
    name: string,
    img: string
}
const UserProfile:FC<UserProfileProps> = ({name, img}) => {
    return (
        <div className='bg-[#393939] mt-2 px-4 py-4 rounded-md justify-center'>
            <img className='flex m-auto w-12 h-12 rounded-full object-cover' src={img} alt=""/>
            <span className='flex justify-center mt-2'>{name}</span>
            <button className='text-white bg-[#444444] px-8 py-2 rounded-md mt-2'>Добавить в чат</button>
        </div>
    );
};

export default UserProfile;