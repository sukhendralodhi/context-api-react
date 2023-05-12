import { useState, createContext } from "react";
import { useContext } from "react";

import NavLinks from "./NavLinks";

export const NavContext = createContext();

//custom hooks 
export const useAppContext = () => {
    return useContext(NavContext);
}

const Navbar = () => {

    const [user, setUser] = useState({ name: 'bob' });
    const logOut = () => {
        setUser(null);
    }
    return (
        <NavContext.Provider value={{ user, logOut }}>
            <nav className="navbar" style={{ border: "1px solid red" }}>
                <h4>CONTEXT api</h4>
                <NavLinks />
            </nav>
        </NavContext.Provider>
    );
}

export default Navbar;