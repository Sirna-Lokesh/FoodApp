import React from "react"

class ChildClass extends React.Component{
    constructor(props){
        super(props);

        console.log("constuctor - "+this.props.name);

        this.state={
            data:null
        }
    }
    async fetchData(){
        const dataAPI=await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json=await dataAPI.json();
        this.setState({
            data:json
        })
    }

    componentDidMount(){
        console.log("Component Did Mount - "+this.props.name);
        this.fetchData();
    }

    componentDidUpdate(){
        console.log("Component Did Update - "+this.props.name)
    }

    componentWillUnmount(){
        console.log("Component will unmount - "+this.props.name);
    }

    render(){
        console.log("Render -"+this.props.name)
        return (
            <div>
                <h1>Child class </h1>
            </div>
        )
    }
}

export default ChildClass;