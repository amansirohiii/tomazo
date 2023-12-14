import User from "./User";
import UserClass from "./UserClass"
const About=()=>{
    return (
    <>
    <h1 className="about-us">About Us</h1>
    <div className="user-cont">
    <User name={"Aman Sirohi"}/>
    <UserClass name={"Aman Sirohi"}/>
    </div>
    </>
)}
export default About;