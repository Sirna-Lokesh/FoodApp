import React from "react";
import { createRoot } from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Profile from "./Timer/Profile";
import ParentClass from "./Timer/ParentClass";
import Component1 from "./Timer/Parent";
//custom components
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Rate from "./components/Rate";
//import Contact from "./components/Contact";
import Body from "./components/Body";
import PageNotFound from "./components/PageNotFound";
import RestaurantMenu from "./components/RestaurantsMenu";

//lazy loading(DemandLoading) About Component
import { lazy, Suspense } from "react";

const Contact = lazy(() => import("./components/Contact"));

const root = createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading your Contact page </h1>}>
            <Contact></Contact>
          </Suspense>
        ),
      },
      {
        path: "/rate",
        element: <Rate></Rate>,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
  },

  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/parent",
    element: <ParentClass />,
  },
]);

//root.render(<RouterProvider router={appRouter}></RouterProvider>);
 root.render(<Component1/>);
