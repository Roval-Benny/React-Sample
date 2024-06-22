import React from "react";
import { BrowserRouter as Router, Route,Link, Routes } from "react-router-dom";
import RenderBody from "./render-body";
import PrivateRoute  from "./PrivateRouter";
import { useNavigate } from "react-router-dom";
import Admin from "./admin";
import LogIn from "./login";

export default function RouterBody(){
    return(
        <div>
        <Router>
        <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>   
            <Routes>
                <Route path="/" element={<PrivateRoute/>} >
                    <Route path="admin" element={<Admin/>} />
                    <Route index element={<RenderBody/>} />
                </Route>
                <Route path="/login" element={<LogIn/>} />
            </Routes>
        </Router>
        </div>
    )
}
