import React from "react";  
import { UserContext } from "./userContext";
import Home from "./home";
import LogIn from "./login";

export default function RenderBody() {

    const {user, setUser} = React.useContext(UserContext);

    if(user)
        return <Home/>
    else
        return <LogIn/>

}

