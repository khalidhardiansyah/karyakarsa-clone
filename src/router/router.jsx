import { createBrowserRouter } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import Register from "../views/Register"
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Register/>
            }
        ]
    },
    {
        path:'/about',
        element: <About/>,
        title: 'About'
    }
])

export default router;