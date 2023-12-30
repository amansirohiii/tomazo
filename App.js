import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body"
// import About from "./src/components/About"
import Contact from "./src/components/Contact"
import Cart from "./src/components/Cart";
import Error from "./src/components/Error"
// import RestaurantMenu from "./src/components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const About=lazy(()=>import("./src/components/About"))
const RestaurantMenu=lazy(()=>import("./src/components/RestaurantMenu"))

const App = () => {
    return (
       <Provider store={appStore}>
         <div className="app-cont">
            <Navbar />
            <Outlet />
        </div>
        </Provider>
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
                path: "/cart",
                element: <Cart/>
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
