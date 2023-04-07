import { useEffect , useState} from "react";

const useIsOnline = () => {
    const [status,setStatus] = useState(true);

    const handleOnline = ()=>{
        setStatus(true);
    }
    const handleOffline = ()=>{
        setStatus(false);
    }
    useEffect(()=>{
        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)

        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        } 
        
    },[])

    

    return status;
} 

export default useIsOnline;

/**
 * here we can you a normal function for it as well , but if we are doing it with a normal function , react wont give
 * access to useEffect() and all those stuff 
 * 
 * Why do we even need useEffect here ???
 * -- we can even add event listeners outside of useEffect as well , but they will be add again and many times 
 * because re-renders , so if we use a useEffect with a empty dependency array , then it will executed only once 
 */
