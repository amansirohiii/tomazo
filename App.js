import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body"
import About from "./src/components/About"
import Contact from "./src/components/Contact"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App = () => {
    return (
        <div className="app-cont">
            <Navbar />
            <Body />
        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
