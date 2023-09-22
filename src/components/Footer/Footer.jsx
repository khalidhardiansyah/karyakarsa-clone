import React from 'react'
import {HomeIcon, MagnifyingGlassIcon, PlusCircleIcon, UserIcon} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
const footerNavigation = [
    {
        id:1,
        icon: <HomeIcon className="h-6 w-6 text-secondary"/>,
        path:'/'
    },
    {
        id:2,
        icon: <MagnifyingGlassIcon className="h-6 w-6 text-secondary"/>,
        path:'/'
    },
    {
        id:3,
        icon: <PlusCircleIcon className="h-6 w-6 text-primary"/>,
        path:'/'
    },
    {
        id:4,
        icon: <UserIcon className="h-6 w-6 text-secondary"/>,
        path:'/login'
    },
]


function Footer({}) {

    const printFooterNavigation = footerNavigation.map((footNav) =>(
        <li key={footNav.id}>
          <Link to={footNav.path}>{footNav.icon}</Link>
        </li>
    ))
  return (
    <div className='fixed bottom-0 w-full h-16 bg-white sm:bg-transparent  flex flex-row sm:justify-center border-t-2 sm:border-t-0'>
        <ul className='flex justify-between w-full items-center mx-11 sm:w-[25rem]  sm:bg-gray-50 sm:shadow-xl sm:rounded-full sm:px-10 sm:mb-2'>
            {printFooterNavigation}
        </ul>
    </div>
  )
}

export default Footer