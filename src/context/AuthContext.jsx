import { createContext , useState} from "react"

const Auth = createContext ();

function AuthContext ({children}) {
  
    const authObj = {
        email: "admin@electromart.ke",
        password: "Admin"
    }

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <>
           <Auth.Provider value={{authObj,isAuthenticated, setIsAuthenticated}}>
                 {children}
           </Auth.Provider>
        </>
    )

}


export default AuthContext
export {Auth}
