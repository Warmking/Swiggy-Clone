import { Component } from "react";
import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent - construct");
  }

  componentDidMount() {
    console.log("parent - compDdidMount");
  }

  render() {
    console.log("parent - render");
    return (
      <div className="m-2 p-2">
        <h1>About us</h1>
        <h1> Best online food deliver app </h1>
        <div>
          UserName :{" "}
          <UserContext.Consumer>
            {({ logInUser }) => <h1>{logInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Mohan Reddy"} />
        <UserClass name={"Arjun Reddy"} />
      </div>
    );
  }
}

export default About;
