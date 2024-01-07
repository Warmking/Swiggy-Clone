import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
        console.log('child - construct');
    }
    componentDidMount(){
        console.log('child - compDdidMount');
    }
    componentWillUnmount(){
        console.log(this.props.name+'comp will unmount');
    }
    render(){
        console.log('child - render');
        const name = this.props.name
        let {count} = this.state
        return (
            <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Location : kadapa </h3>
            <h3>Age : 24 </h3>
            <h3>{count}</h3>
            <button onClick={()=>{
                this.setState(
                    {count:count+1}
                )
            }}>click</button>
        </div>
        )
    }
}

export default UserClass;