import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

function Dashboard() {
  return (
<div className="flex flex-col sm:flex-row min-h-screen w-full ">
<Sidebar/>
<div className="flex-grow w-full p-5">
  <Outlet/>
</div>
</div>



  )
}

export default Dashboard