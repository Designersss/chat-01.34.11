import {IUser} from "../global-types/global-types.ts";
import {FC} from "react";

interface HeaderProps {
    user: IUser
}
const Header:FC<HeaderProps> = ({user}) => {
    return (
        <div className='w-full px-20 mt-4 items-center'>
            <div className='flex items-center ml-4'>
                <img className='flex w-14 h-14 rounded-full object-cover' src={user.img} alt=""/>
                <span className='ml-4'>{user.name}</span>
            </div>
            <div className='w-full h-0.5 bg-[#393939] mt-3'></div>
        </div>
    );
};

export default Header;