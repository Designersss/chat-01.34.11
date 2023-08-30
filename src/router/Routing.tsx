import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import {REACT_APP_ROUTER_HOME} from "../utils/utils.ts";


const Routing = () => {
    return (
        <Routes>
            <Route path={REACT_APP_ROUTER_HOME} element={<Home />} />
        </Routes>
    );
};

export default Routing;