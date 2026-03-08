import { useState } from "react";
import Logo from "../components/Logo.jsx"
import Sidebar from "../components/Sidebar.jsx"

 import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

function Dashboard () {
   const [isOpen , setIsOpen ] = useState (false);
   function closeSidebar () {
      setIsOpen(false)
   }

   function openSidebar () {
      setIsOpen(true)
      console.log("opened")
   }
  return (
     <>
        <div className="flex bg-green-200 items-center justify-between pr-5">
            <Logo />
            {isOpen 
                  ?<XMarkIcon className="w-6 h-6" onClick={closeSidebar}/>
                  :<Bars3Icon className="w-6 h-6" onClick={openSidebar}/>
            }
            
        </div>
         
         <div>
            <div className="bg-gray-300">
               {isOpen && <Sidebar />}
            </div>
              
         </div>
        
     </>
  )
}

export default Dashboard