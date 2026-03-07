import { useContext } from "react"
import { Auth } from "../context/AuthContext.jsx"
import {  Navigate } from "react-router-dom";

function ProtectedRoutes ({children}) {

    const {isAuthenticated} = useContext(Auth);
    
    if (!isAuthenticated){
       return <Navigate to ="/" />
    }

    return (
        {children}
    )

}

export default ProtectedRoutes