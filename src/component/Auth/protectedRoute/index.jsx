import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({children, ...rest}) => {
    // const [auth, setAuth] = React.useState(false);

    // React.useEffect(()=>{
    //     if (localStorage.getItem("user-auth", "123456")) {
    //         setAuth(true);
    //         console.log(auth)
    //     }
    // }, [])
    let auth = useSelector(state => state.auth.auth)
    console.log(auth)

   
    return(
        <Route {...rest}>
            {auth ? children : <Redirect to="/login" />}
        </Route>
    );
};

export default ProtectedRoute;