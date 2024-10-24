import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";


import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Error from "./components/Error.js";
import Login from "./components/Login.js";
import store from "./utils/Store.js";


const App = ()=>{
    return(
        <>
        <Provider store={store}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Provider>
        </>
    )
}

const router = createBrowserRouter([
    {
        path : "/",
        errorElement : <Error/>,
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Body/>,
            },
            {
                path :"/login",
                element : <Login/>
            }
        ]
    }
])

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);