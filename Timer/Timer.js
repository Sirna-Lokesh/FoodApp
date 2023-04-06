import React from 'react'

import { useState } from 'react'
import { useRef } from 'react';
const Timer = () => {

    const [count,setCount]=useState(0);

    const timerId=useRef(null);
    
    function startTimer(){
        timerId.current=setInterval(()=>{
            setCount((count)=>count+1);
        },1000)
        console.log(timerId.current)
    }
    function pauseTimer(){
        clearInterval(timerId.current);
        console.log(timerId.current)
    }
    function clearTimer(){
        setCount(0);
        clearInterval(timerId.current);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={clearTimer}>Clear</button>
    </div>
  )
}

export default Timer