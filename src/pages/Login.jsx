import FormInput from "../components/FormInput.jsx";
import Button from "../components/Button.jsx";
import loginPageImage from "../assets/loginPageImage.jpg";
import Logo from "../components/Logo.jsx";

function Login () {

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
                <div className="flex flex-col justify-center items-center py-3
                                gap-3 bg-gray-200 text-gray-600 md:w-3/4
                           ">
                        <h1 >Enter Your Details to login</h1>
                        <FormInput 
                        id = "username" 
                        label= "Username" 
                        placeholder = "Enter your username"
                        />

                        <FormInput 
                        id = "password" 
                        label= "Password" 
                        placeholder = "Enter your password"
                        />

                        <Button btnText= "Login" />
                </div>
           </div>

    </div>
      
      <hr className="hidden md:block text-orange-300 mx-40 mt-8 "></hr>
           
        </>
    )

}

export default Login;