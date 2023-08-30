import Routing from "./router/Routing.tsx";
import LeftMenu from "./components/menu/LeftMenu.tsx";
import {useEffect} from "react";
import {useActions} from "./hooks/useActions.ts";
import {useGetUserQuery} from "./api/api.ts";
import RightMenu from "./components/menu/RightMenu.tsx";

function App() {
    const {setUser} = useActions()
    const {data} = useGetUserQuery([])
    useEffect(() => {
        const candidate = data?.find(el => el.jwtToken === localStorage.getItem('token'))
        candidate ? setUser(candidate) : console.log('Loading...')
    }, [data]);

  return (
    <div className='flex justify-between'>
        <LeftMenu />
        <Routing />
        <RightMenu />
    </div>
  )
}

export default App
