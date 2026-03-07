import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login.jsx"
import Dashboard from '../pages/Dashboard.jsx'
import ProtectedRoutes from "./ProtectedRoutes.jsx"
import { useContext } from "react"
import { Auth } from "../context/AuthContext.jsx"

function Router () {

    const {isAuthenticated} = useContext(Auth);

    return (
        <Routes>
            <Route  path="/" element = {<Login />}/>
            <Route path="/dashboard" element = {
                                                <ProtectedRoutes isAuthenticated = {isAuthenticated}>
                                                    <Dashboard />
                                                </ProtectedRoutes>
                                                
                                               } />
        </Routes>
    )
}

export default Router