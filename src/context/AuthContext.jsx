import { createContext} from "react"

const Auth = createContext ();

function AuthContext ({children}) {
  
    const authObj = {
        email: "admin@electromart.ke",
        password: "Admin"
    }

    return (
        <>
           <Auth.Provider value={authObj}>
                 {children}
           </Auth.Provider>
        </>
    )

}


export default AuthContext
export {Auth}
