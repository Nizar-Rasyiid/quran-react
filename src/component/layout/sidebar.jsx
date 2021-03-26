import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
// import { counterIncrement, counterDecrement } from "../../redux/Actions"

const routing = [
    { Name: "Users", href: "/users" },
    { Name: "Table", href: "/table" },
    { Name: "Profile", href: "/profile" },
    { Name: "Alquran", href: "/quran" },


];

const Sidebar = (props) => {
    let match = useRouteMatch();
    console.log('useroutematch', match.url);
    let counter = useSelector(state => state.counter)
    let dispatch = useDispatch()
    return (
        <React.Fragment>
            <div>
                {routing.map((routes, index) => (
                    <div className="" key="index">
                        <NavLink activeClassName="bg-blue-700 bg-opacity-50 my-3"
                            className="font-semibold text-white flex justify-center py-2 container-fluid position-static h-100"
                            to={match.url + routes.href}>
                            {routes.Name}
                        </NavLink>
                    {props.namaSekolah}
                    </div>
                ))}
                {/* <div className="flex my-5">
                    <button onClick={() => dispatch(counterIncrement())} >tambah</button>
                    <p>{counter}</p>
                    <button onClick={() => dispatch(counterDecrement())} >kurang</button>
                </div> */}
            </div>

        </React.Fragment>
    )
}
export default Sidebar;