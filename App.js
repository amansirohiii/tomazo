import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body"
// import About from "./src/components/About"
import Contact from "./src/components/Contact"
import Error from "./src/components/Error"
// import RestaurantMenu from "./src/components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const About=lazy(()=>import("./src/components/About"))
const RestaurantMenu=lazy(()=>import("./src/components/RestaurantMenu"))

const App = () => {
    return (
        <div className="app-cont">
            <Navbar />
            <Outlet />
        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>

            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }

        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
