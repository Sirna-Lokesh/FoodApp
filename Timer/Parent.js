//this is an example for contextAPI ,which act as store

import { useContext } from "react";
import { createContext ,useState } from "react"

const userContext=createContext({
    name:"sirna Lokesh",
    email:"Sirnalokesh@gmail.com"
}); 

const Component1 = () =>{
    const [user , setUser] = useState({
        name:"chinnu ",
        email : "lokeshchinnu2001"
    })
    return (
        <userContext.Provider value={{user, setUser}}> 
            <div className="border border-black w-[400px] h-[100px] ">
                <h1>Component-1</h1>
                <input type="text" onChange={(e)=>{
                    setUser({
                        ...user,
                        name:e.target.value
                    })
                }}/>
                <Component2/>
            </div>
        </userContext.Provider>
    )
}

const Component2 = () =>{
    const {user,setUser} =useContext(userContext)
    console.log(user)
    return (
        <div className="border border-black w-[400px] h-[100px]">
            <h1>Component - 2</h1>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <Component3></Component3>
        </div>
    )
}

  


const Component3 = () =>{
    const {user,setUser} =useContext(userContext)
    return (
        <div className="border border-black w-[400px] h-[100px]" >
            <h1>Component - 3</h1>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <Component4/>
        </div>
    )
}

const Component4 = () =>{
    const {user,setUser} =useContext(userContext)
    return (
        <div className="border border-black w-[400px] h-[100px]">
            <h1>Component - 4</h1>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

export default Component1;