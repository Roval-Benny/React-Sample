import React from "react";
import { useContext } from "react";
import { useState } from "react";

const UserContext = React.createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    if(localStorage.getItem('user') && !user){
        setUser(JSON.parse(localStorage.getItem('user')));
    }
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
};

export { UserProvider, UserContext };
