import { Component } from "react";
import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass"

class About extends Component  {
  constructor(props){
    super(props)
      console.log('parent - construct');
  }

  componentDidMount(){
    console.log('parent - compDdidMount');
  }

  render(){
    console.log('parent - render');
  return (
    <div > 
      <h1>About us</h1>
      <h1> Best online food deliver app </h1>
      <UserClass name={'Mohan Reddy'}/>
      <UserClass name={'Arjun Reddy'}/>
    </div>
  )
};
}

export default About;
