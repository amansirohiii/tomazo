import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
    }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Greater Noida</h3>
        <h3>Contact: @amansirohiii</h3>
      </div>
    );
  }
}
export default UserClass;