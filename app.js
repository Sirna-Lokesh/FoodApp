import React from "react"
import { createRoot } from "react-dom";

//custom components 
import AppLayout from "./components/AppLayout"

const root=createRoot(document.getElementById("root"));

root.render(<AppLayout/>);