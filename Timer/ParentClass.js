import React from "react";
import { Link } from "react-router-dom";
import ChildClass from "./ChildClass";
class ParentClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            data:null,
            count:0,
        }
        
        console.log("Construtor - parent ");

    }
    
    componentDidMount(){
        console.log("component Did Mount - parent ");
    }

    componentDidUpdate(){
        console.log("Component Did update - parent")
    }

    componentWillUnmount(){
        console.log("Component will unmount - parent ")
    }
    render(){
        console.log("render - parent ")
        return (
            <div>
                <h1>ParentClass</h1>
                <h2><Link to="/">Go Home</Link></h2>
                <ChildClass name="child-1"/>
            </div>
        )
    }
}

export default ParentClass;