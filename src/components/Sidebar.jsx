import { Link } from 'react-router-dom';
import {
  HomeIcon,
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";

function Sidebar () {

    return(
        <>
        <div className='flex flex-col gap-2 px-8 pt-14 pb-4'>
                <Link to = "/dashboard" className='flex gap-4 bg-orange-300 p-2'><HomeIcon className='w-5 h-5'/> Dashboard</Link>
                <Link to = "/products" className='flex gap-4 bg-orange-300 p-2'>< ShoppingBagIcon className='w-5 h-5'/> Products</Link>
                <Link to = "/orders" className='flex gap-4 bg-orange-300 p-2'><ClipboardDocumentListIcon className='w-5 h-5'/> Orders</Link>
                <Link to = "/users" className='flex gap-4 bg-orange-300 p-2'><UsersIcon className='w-5 h-5'/> Users</Link>
                <Link to = "/settings" className='flex gap-4 bg-orange-300 p-2'><Cog6ToothIcon className='w-5 h-5'/> Settings</Link>
        </div>

        </>
    )

}

export default Sidebar;