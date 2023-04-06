import React from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
const Profile = () => {
    const [data,setData]=useState(null);

    async function fetchData(){
        const dataAPI=await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json=await dataAPI.json();
        setData(json);
        console.log(json);
    }
    useEffect(()=>{
        console.log("useEffect of empty dependency array")
        fetchData();
        return ()=>{
            console.log("UseEffect return from empty depe array")
        }
    },[])

    useEffect(()=>{
        console.log("useEffect of count");

        return ()=>{
            console.log("useEffect return from count")
        }
    },[data])
    console.log("Render")
  return (
    <div>
        <h1>profile</h1>
        <h2><Link to="/">Go Home</Link></h2>
    </div>
  )
}

export default Profile