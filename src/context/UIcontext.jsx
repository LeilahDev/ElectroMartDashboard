import { useState, createContext } from "react";

const MyUIcontext = createContext ();

function UIcontext ({children}) {

    const [errorMsg, setErrorMsg] = useState("");
    const [errors , setErrors] = useState(false)
    return (
        <MyUIcontext.Provider value = {{errorMsg, setErrorMsg, errors , setErrors}}>
            {children}
        </MyUIcontext.Provider>
    )

}

export {MyUIcontext}
export default UIcontext