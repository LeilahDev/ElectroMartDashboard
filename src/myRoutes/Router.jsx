import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login.jsx"
import Dashboard from '../pages/Dashboard.jsx'
import Products from "../pages/Products.jsx"
import Orders from "../pages/Orders.jsx"
import Users from "../pages/Users.jsx"
import Settings from "../pages/Settings.jsx"
import ProtectedRoutes from "./ProtectedRoutes.jsx"
import { useContext } from "react"
import { Auth } from "../context/AuthContext.jsx"

function Router () {

    const {isAuthenticated} = useContext(Auth);

    return (
        <Routes>
            <Route  path="/" element = {<Login />}/>
            {/* <Route path="/dashboard" element = {
                                                <ProtectedRoutes isAuthenticated = {isAuthenticated}>
                                                    <Dashboard />
                                                </ProtectedRoutes>
                                                
                                               } /> */}
            <Route path="/dashboard" element = {<Dashboard />} />
            <Route path="/products" element = {<Products />} />
            <Route path="/orders" element = {<Orders />} />
            <Route path="/users" element = {<Users />} />
            <Route path = "/settings" element = {<Settings />} />
        </Routes>
    )
}

export default Router