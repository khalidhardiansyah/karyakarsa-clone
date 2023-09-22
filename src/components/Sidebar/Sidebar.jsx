import { ExclamationCircleIcon, ArrowTrendingUpIcon, FolderIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const menus = [
    {
      id:1,
      name: "Mulai",
      icon: <CalendarDaysIcon className='w-0 sm:w-6'/>,
      path: "onboarding",
    },
    {
      id:2,
      name: "Dashboard",
      icon: <ArrowTrendingUpIcon className='w-0 sm:w-6'/>,
      path: "overview",
    },
    {
      id:3,
      name: "Karya",
      icon: <FolderIcon className='w-0 sm:w-6'/>,
      path: "posts",
    },
  ];

function Sidebar() {
    const renderSidebarMenu = menus.map((menu) =>(
   <Link to={menu.path} className={`grid grid-cols-1 sm:grid-cols-2 w-fit sm:w-full sm:bg-red-500 sm:mb-5 items-center justify-items-center  py-3 rounded-full`}> {menu.icon} <div className='w-full'>{menu.name}</div> </Link>
    ))
  return (
    <div className="sidebar-wrapper py-3 sm:py-5 bg-white sm:bg-transparent sm:w-1/2 sm:max-w-xs">
        <div className="sidebar-menu flex flex-row flex-nowrap justify-between px-5 sm:block">
        {
        renderSidebarMenu
        }
        </div>
    </div>
  )
}

export default Sidebar