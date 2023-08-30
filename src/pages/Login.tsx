import {useState} from "react";
import {useCreateUserMutation, useGetUserQuery} from "../api/api.ts";
import {login, registration} from "../logics/user-login-register.ts";
import {useActions} from "../hooks/useActions.ts";
import {REACT_APP_ROUTER_LOGIN, REACT_APP_ROUTER_REGISTRATION} from "../utils/utils.ts";
import {Link, useNavigate} from "react-router-dom";


const Login = () => {
    const {data} = useGetUserQuery([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [createUser] = useCreateUserMutation()
    const {setUser} = useActions()
    const navigate = useNavigate()
    return (
        <div>

            {
                location.pathname === '/registration'
                    ?
                    <section>
                        <div>
                            <h3>Регистрация</h3>
                        </div>
                        <input className='flex text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="text"/>
                        <input className='flex text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md' value={password} onChange={e => setPassword(e.target.value)} placeholder='Paswword' type="text"/>
                        <div className='text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md'>
                            <p className='text-[12px] text-[#487666]'>Вставьте url изображения из интернета!</p>
                            <input className='flex text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md' value={img} onChange={e => setImg(e.target.value)} placeholder='Img' type="text"/>
                        </div>
                        <input className='flex text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md' value={name} onChange={e => setName(e.target.value)} placeholder='Name' type="text"/>
                        {
                            data ? <div>
                                <button className='text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md' onClick={() => registration({data, email, password, img, name, createUser, setUser, navigate})}>Регистрация</button>

                                <p className='text-[#878787]' >Есть аккаунт? <Link className='text-[#f4f4f4]' to={REACT_APP_ROUTER_LOGIN}>Вход!</Link></p>
                            </div> : <></>
                        }
                    </section>
                    :
                    <section>
                        <div>
                            <h3>Вход в аккаунт</h3>
                        </div>
                        <input className='flex text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="text"/>
                        <input className='flex text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md' value={password} onChange={e => setPassword(e.target.value)} placeholder='Paswword' type="text"/>
                        {
                            data ? <div>
                                <button className='text-center bg-[#393939] mt-2 px-3 py-1 w-full rounded-md' onClick={() => login({data, email, password, setUser, navigate})}>Вход</button>
                                <p className='text-[#878787]' >Нету аккаунта? <Link className='text-[#f4f4f4]' to={REACT_APP_ROUTER_REGISTRATION}>Регистрация!</Link></p>
                            </div> : <></>
                        }
                    </section>
            }

        </div>
    );
};

export default Login;