import { createBrowserRouter,Navigate } from "react-router-dom";
import About from "../views/About";
import Register from "../views/Register"
import Layout from "../components/Layout/Layout";
import Login from "../views/Login";
import Dashboard from "../components/Layout/Dashboard";
import OnBoarding from "../views/OnBoarding";
import Overview from "../views/Overview";
import Posts from "../views/Posts";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Register/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:"dashboard",
                element:<Navigate to="onboarding"/>,
                
            },
            {
                path:"dashboard",
                element:<Dashboard/>,
                
                children:[
                    {
                        
                        path:'onboarding',
                        element:<OnBoarding/>
                    },
                    {
                        path:'overview',
                        element: <Overview/>
                    },
                    {
                        path:'posts',
                        element: <Posts/>
                    }
                ]
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