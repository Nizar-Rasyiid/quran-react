import React from 'react';
import {
    Link,
} from "react-router-dom";
const Navbar = React.memo(() => {
    return (
        <div>
            <ul className="flex items-center">
                <li>
                    <NavLink activeStyle={{ color: "red", fontWeight: "bold", fontSize: "20px", }} to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: "red", fontWeight: "bold", fontSize: "20px", }} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" activeStyle={{ color: "red", fontWeight: "bold", fontSize: "20px", }}>Dashboard</NavLink>
                </li>
            </ul>
        </div>
    )
})

export default Navbar;