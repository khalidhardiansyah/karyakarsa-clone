import React, { useState } from "react";
import Button from "../Button/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate} from "react-router-dom";

const pages = [
  {
    id:1,
    name: "Tentang Karyakarsa",
    path: "/",
  },
  {
    id:2,
    name: "Explore",
    path: "/",
  },
  {
    id:3,
    name: "Kenapa Kami",
    path: "/",
  },
];



function Navbar() {
const navigate = useNavigate()

  const navigationItems = pages.map((page) => (
    <li key={page.id} className="border-b py-3 sm:border-b-0 sm:py-0 w-full text whitespace-nowrap">
      <Link className="px-5 sm:px-0 w-full block" to={page.path}>{page.name}</Link>
    </li>
  ));

  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div>
      <nav className="flex bg-white justify-between items-center px-5 py-5 max-h-20 border-b-2">
        <div className="box-wrapper-1 flex ">
          <div className="logo flex items-center">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxOSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMi42NjY2N1YyNC4wMDAxSDE4Ljk5OTlMMCAyLjY2NjY3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDIuNjY2NjdMMTguOTk5OSAyNC4wMDAxSDBWMi42NjY2N1pNMS4zNTcxMyAyMi42NjY3VjYuMjE1MjhMMTYuMDA5MSAyMi42NjY3SDEuMzU3MTNaIiBmaWxsPSIjNEE0QTRBIi8+CjxwYXRoIGQ9Ik0wIDE4LjY2NjdWMEgxOC45OTk5TDAgMTguNjY2N1oiIGZpbGw9IiNGRjU1NjkiLz4KPC9zdmc+Cg=="
              alt="karykarsa"
            />
            <h1 className="font-semibold text-lg mx-2 mr-8 hidden sm:block">
              karyakarsa
            </h1>
          </div>
          <ul className="sm:flex font-semibold items-center space-x-11 hidden">
            {navigationItems}
          </ul>
        </div>

        <div className="box-wraper-2 flex space-x-4 items-center">
          <Button onClick={()=>navigate('/login')}  labelButton="Masuk" style="secondary" type="button" />
          <Button onClick={()=>navigate('/')}  labelButton="Jadi Kreator" style="primary" type="button" />
          <div className="block sm:hidden">
          <Button
            labelButton={<Bars3Icon className="h-6 w-6 text-secondary" />}
            style=""
          onClick={()=>setMobileNav(true)}
          />
          </div>
        </div>
      </nav>
      {
        mobileNav && <div className="relative w-full">
        <div className="absolute -top-20 w-1/2 right-0 min-h-screen py-5 bg-white z-30">
          <div className="flex flex-col ">
            <div className="wrapper-1  p-5 flex flex-row justify-between h-10 items-center">
              <div className="logo flex items-center">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxOSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMi42NjY2N1YyNC4wMDAxSDE4Ljk5OTlMMCAyLjY2NjY3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDIuNjY2NjdMMTguOTk5OSAyNC4wMDAxSDBWMi42NjY2N1pNMS4zNTcxMyAyMi42NjY3VjYuMjE1MjhMMTYuMDA5MSAyMi42NjY3SDEuMzU3MTNaIiBmaWxsPSIjNEE0QTRBIi8+CjxwYXRoIGQ9Ik0wIDE4LjY2NjdWMEgxOC45OTk5TDAgMTguNjY2N1oiIGZpbGw9IiNGRjU1NjkiLz4KPC9zdmc+Cg=="
                  alt="karykarsa"
                />
                <h1 className="font-semibold text-lg mx-2 mr-8">karyakarsa</h1>
              </div>

              <div className="close-button">
                <Button
                  labelButton={<XMarkIcon className="h-6 w-6 text-secondary" />}
                  style=""
                onClick={()=>setMobileNav(false)}
                />
              </div>
            </div>
            <div className="line h-[1px] w-full bg-gray-100 my-3"></div>
            <ul className="">
            {
                navigationItems
            }
            </ul>
            <div className="m-5 flex flex-col space-y-4">
          <Button labelButton="Jadi Kreator" style="primary" type="button" />
            <Button labelButton="Masuk" style="secondary-outline" type="button" />
            </div>
          </div>
        </div>
        <div onClick={()=>setMobileNav(false)} className="overlay absolute -top-20 min-h-screen bg-gray-500 bg-opacity-25 z-10 w-full">
        </div>
      </div>
      }
    </div>
  );
}

export default Navbar;
