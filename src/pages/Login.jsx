import FormInput from "../components/FormInput.jsx";
import Button from "../components/Button.jsx";
import loginPageImage from "../assets/loginPageImage.jpg";
import Logo from "../components/Logo.jsx";
import { useContext , useState} from "react";
import {Auth} from '../context/AuthContext.jsx'
import { useNavigate } from "react-router-dom";
import { MyUIcontext } from "../context/UIcontext.jsx";

function Login () {

    const {email, password} = useContext(Auth);
    const {errorMsg, setErrorMsg, errors, setErrors} = useContext(MyUIcontext);
    
    const navigate = useNavigate();

    //CHECK OUT THIS PAGE
    const [formData, setFormData] = useState({
            email: "",
            password: ""
            });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prev => ({
                ...prev,
                [name]: value
            }));
    }

    function handleSubmit(e) {
            e.preventDefault();
            
            if(formData.email === email && formData.password === password){
                navigate ('/dashboard');
                setErrors(false)
            }else if(formData.email !== email && formData.password !== password){
                setErrorMsg("Incorrect email and password")
                setErrors(true)
            }
            else if(formData.email !== email){
                setErrorMsg("Email not found")
                setErrors(true)
            }else if(formData.password !== password){
                 setErrorMsg("Incorrect password")
                 setErrors(true)
            }
    }

    return (
        <>
       <Logo />
    <div className="md:grid md:grid-cols-2 md:gap-8 md:px-20 md:mt-18">
          
           <div className="px-6 md:px-0 md:flex md:items-center md:justify-end 
                           md:py-5
                           ">
                <img src={loginPageImage} className=" rounded md:w-3/4" />
           </div>

           <div className="px-6 py-6">
                        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center py-3
                                gap-3 bg-gray-200 text-gray-600 md:w-3/4
                           ">
                             <h1 >Enter Your Details to login</h1>
                             {errors && <p className="text-red-400">{errorMsg}</p>}
                               <FormInput 
                                    id = "email" 
                                    label= "Email" 
                                    placeholder = "Enter your email"
                                    name = "email"
                                    value = {formData.email}
                                    onChange={handleChange}
                                />

                               <FormInput 
                                    id = "password" 
                                    label= "Password" 
                                    placeholder = "Enter your password"
                                    name = "password"
                                    type = "password"
                                    value = {formData.password}
                                    onChange={handleChange}
                               />
                                <Button btnText= "Login" type = "submit"/>
                        </form>
           </div>

    </div>
      
      <hr className="hidden md:block text-orange-300 mx-40 mt-8 "></hr>
           
        </>
    )

}

export default Login;