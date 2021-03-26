import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = React.memo(() => {
    const Navigasi = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Dashboard', to: '/dashboard' },
    ]
    return (
        <div>
            <ul className="flex bg-blue-500 text-white">
                <div className="text-4xl font-bold">
                    <span className="text-blue-800 ml-2 ">React</span>
                    <span className="text-red-500 ml-2  capitalize">JS</span>
                </div> 
                {Navigasi.map((nav, index) => (
                    <nav className="navbar navbar-expand-lg  mr-3 justify-items-end  hover:bg-blue-700 text-white">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink activeStyle={{
                          color: "red",
                             fontWeight: "bold",
                             fontSize: "20"
                         }} exact to={nav.to}>{nav.name}</NavLink>
                            </li>
                        </ul>

                    </nav>
                    
                    // <li key={index}>
                    //     <NavLink activeStyle={{
                    //         color: "red",
                    //         fontWeight: "bold",
                    //         fontSize: "20"
                    //     }} exact to={nav.to}>{nav.name}</NavLink>
                    // </li>
                ))}


            </ul>
        </div>
    )
})
export default Navbar