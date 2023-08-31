import {useParams} from "react-router-dom";
import {useGetUserChatQuery, useSendMessageUserMutation} from "../api/api.ts";
import Header from "../components/Header.tsx";
import {useGetUser} from "../hooks/useGetUser.ts";
import {useEffect, useState} from "react";
import {IChat} from "../global-types/global-types.ts";


const Chat = () => {
    const {id} = useParams()
    const {user} = useGetUser()
    const {data} = useGetUserChatQuery(id)
    const [message, setMessage] = useState('')
    const [send] = useSendMessageUserMutation()
    const [userChat, setUserChat] = useState<IChat | undefined>()
    console.log(userChat?.message.map(el => el.userId))
    useEffect(() => {
        if (id) {
            const chat = user.chat.find(el => el.userId === parseInt(id))
            setUserChat(chat)
        }
    }, [user, id]);
    const sendMessage = () => {
        if (data) {
            const slnMMessage = userChat?.message ? userChat.message : []
            const initialMessage = [
                ...slnMMessage,
                {
                    userId: user.id,
                    title: message
                }
            ]
            const initialChat = {
                userId: data.id,
                img: data.img,
                name: data.name,
                message: initialMessage,
            }

            const initialChatTw = {
                userId: user.id,
                img: user.img,
                name: user.name,
                message: initialMessage,
            }

            const spliceChat = [...user.chat, initialChat]
            const indexChat = spliceChat.map(el => el.userId).indexOf(initialChat.userId)
            spliceChat.splice(indexChat, 1)

            const spliceChatTw = [...data.chat, initialChatTw]
            const indexChatTw = spliceChatTw.map(el => el.userId).indexOf(initialChatTw.userId)
            spliceChatTw.splice(indexChatTw, 1)

            send({...user, chat: spliceChat}).then(() => send({...data, chat: spliceChatTw}))
            console.log(spliceChat)
        }
    }
    return (
        <div className='w-full'>
            {
                data ? <Header user={data}/> : <>Loading...</>
            }
            <div>
                <div className='w-full h-[680px] bg-[#474747] p-10 mt-2'>
                    {
                        user.chat.length ? userChat?.message?.map(el => <div className={el.userId === user.id ? 'flex w-full justify-end' : 'flex w-full justify-start'}><span className='bg-[#444444] px-4 py-2 rounded-md'>{el.title}</span></div>) : <>Напишите первый</>
                    }
                </div>
                <div className='flex items-center justify-center mt-2'>
                    <input value={message} onChange={e => setMessage(e.target.value)}
                           className='ml-2 p-2 outline-0 w-96 rounded-md bg-[#424242]' placeholder='Введите текст'
                           type="text"/>
                    <button onClick={sendMessage} className='ml-2 p-2 rounded-full bg-[#424242]'>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1 1L18 10L1 19L6 10L1 1Z" stroke="white"
                                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;