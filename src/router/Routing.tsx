import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import {
    REACT_APP_ROUTER_CHAT,
    REACT_APP_ROUTER_HOME,
    REACT_APP_ROUTER_LOGIN,
    REACT_APP_ROUTER_REGISTRATION
} from "../utils/utils.ts";
import Login from "../pages/Login.tsx";
import Chat from "../pages/Chat.tsx";

const Routing = () => {
    return (
        <Routes>
            <Route path={REACT_APP_ROUTER_HOME} element={<Home />} />
            <Route path={REACT_APP_ROUTER_LOGIN} element={<Login />} />
            <Route path={REACT_APP_ROUTER_REGISTRATION} element={<Login />} />
            <Route path={REACT_APP_ROUTER_CHAT} element={<Chat />} />
        </Routes>
    );
};

export default Routing;