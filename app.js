import React from "react"
import { createRoot } from "react-dom";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
//custom components 
import AppLayout from "./components/AppLayout"
import About from "./components/About";
import Rate from "./components/Rate";
import Contact from "./components/Contact";
import Body from "./components/Body";
import PageNotFound from "./components/PageNotFound";
import RestaurantMenu from "./components/RestaurantsMenu";
const root=createRoot(document.getElementById("root"));


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout></AppLayout>,
        errorElement:<PageNotFound></PageNotFound>,
        children:[
            {
                path:"/",
                element:<Body></Body>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/rate",
                element:<Rate></Rate>
            },
        ]
    },
    {
        path:"/restaurants/:id",
        element: <RestaurantMenu/>
    }
    
]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);