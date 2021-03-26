import React from 'react';
import { Route, useHistory } from "react-router-dom";

const ProtectedLogin = ({ children, ...rest }) => {
    const history = useHistory();
    const previousPath = () => {
        history.goBack();
    };
    let auth = localStorage.getItem("user-auth");

    return (
        <Route {...rest}>
            {auth == "true" ? previousPath() : children}
        </Route>
    );
};

export default ProtectedLogin;