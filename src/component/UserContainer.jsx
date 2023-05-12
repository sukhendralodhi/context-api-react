import { useContext } from "react";
import { NavContext } from "./Navbar";

const UserContainer = () => {
    const value = useContext(NavContext);
    console.log(value);
    return (
        <div className="user-container">
            <p>Hello There,</p>
            <button className="btn">logout</button>
        </div>
    );
}

export default UserContainer;