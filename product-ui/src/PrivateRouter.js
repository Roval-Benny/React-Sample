import React from "react";
import {Route, Navigate, Outlet} from "react-router-dom";
import { UserContext } from "./userContext";

const PrivateRoute = ({component:Component, ...rest}) => {
    debugger;
    const {user,setUser} = React.useContext(UserContext);
    return user ? <Outlet /> : <Navigate to="/login" />;

}

export default PrivateRoute;    