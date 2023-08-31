import {useGetUser} from "../../hooks/useGetUser.ts";
import {useGetUserQuery} from "../../api/api.ts";
import UserProfile from "../UserProfile.tsx";
import {useActions} from "../../hooks/useActions.ts";
import {initialUser} from "../../global-types/global-types.ts";
import {Link} from "react-router-dom";
import {REACT_APP_ROUTER_LOGIN, REACT_APP_ROUTER_REGISTRATION} from "../../utils/utils.ts";

const RightMenu = () => {
    const {user} = useGetUser()
    const {data} = useGetUserQuery([])
    const {setUser} = useActions()
    const logout = () => {
        setUser(initialUser)
        localStorage.setItem('token', '')
    }
    return (
        <div className='bg-[#323232] px-10 py-2 h-screen'>
            <section className='flex justify-center'>
                {
                    user.jwtToken
                        ? <div>
                            <img className='flex w-32 h-32 rounded-full object-cover' src={user.img} alt=""/>
                            <span className='flex justify-center mt-2 text-[#a8a8a8]'>{user.name}</span>
                            <button className='block text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md' onClick={logout}>Выйти</button>
                        </div>
                        : <div>
                            <img className='flex w-32 h-32 rounded-full' src={user.img} alt=""/>
                            <span className='flex justify-center mt-2 text-[#a8a8a8]'>{user.name}</span>
                            <div>
                                <Link to={REACT_APP_ROUTER_LOGIN} className='block text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md'>Войти</Link>
                                <Link to={REACT_APP_ROUTER_REGISTRATION} className='block text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md'>Регистрация</Link>
                            </div>

                        </div>
                }
            </section>
            <section className='flex justify-center items-center mt-5'>
                <div className='flex w-full h-0.5 bg-white'></div>
                <span className='ml-2 mr-2'>Пользователи</span>
                <div className='flex w-full h-0.5 bg-white'></div>
            </section>
            <div className='scrollbar overflow-y-auto h-[740px]'>
                {
                    data ? data.map(el => <UserProfile key={el.id} userIdChat={el.chat} userId={el} name={el.name} img={el.img}/>) : <>Никого нету</>
                }
            </div>

        </div>
    );
};

export default RightMenu;