import React from "react"

class Counter extends React.Component{
    constructor(props){
        super(props);

        console.log("constructor")
        //state variables
        this.state={
            count:0,
            count2:0
        }
    }
    componentDidMount(){
        console.log("ComponentDidMount ")
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    }
    render(){
        //NEVER DO THIS.STATE.COUNT = SOMETHING , NEVER MUTATE STATE DIRECTLY ,ALWAYS USE SETSTATE FOR CHANGING STATE VARIABLES
        console.log("Rendered ")
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <h1>Count2 : {this.state.count2}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}> Increment </button>

                <button onClick={()=>{
                    this.setState({
                        count2:this.state.count2+1,
                    })
                }}>Increment-2 </button>
            </div>
        )
    }
}

export default Counter;