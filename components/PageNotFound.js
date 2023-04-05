import React from "react"
import { useRouteError } from "react-router-dom"
const PageNotFound = () =>{
    const error=useRouteError();
    console.log(error)
    return (
        <div id="page-not-found">
            <h1>Oops !!! Page Not Found</h1>
            <h3>{error.status} : {error.statusText}</h3>
        </div>
    )
}

export default PageNotFound;