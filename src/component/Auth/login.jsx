import React from 'react';
import {Input , Button}from '../Property';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import { UserLogin} from "../../redux/Actions";
import { useDispatch } from "react-redux";


const Login = () => {
    let dispatch = useDispatch();

    const [values, setValues] = React.useState({
        email: "",
        password: "",
    });
        let history = useHistory();
    const buttonDisable= () => {
        if (values.email == "" || values.password == "") {
            return true
        } else{
            return false;
        }
    }
    const changeHandle = (e) => {
        let key = e.target.id
        let value = e.target.value
        setValues(values => (
            {
                ...values, [key]: value,
            }
        ) )
        
    }
    const submitHandle = () => {
        let url = 'https://api-react123.herokuapp.com/api/login'
       let payload ={
            email :values.email,
            password : values.password
        }
       dispatch( UserLogin(url,payload))
    }
    
    return(
        <React.Fragment>
            <div className="flex h-screen">
                <div className="w-1/2 h-full bg-blue-500 ">
                   <div className="h-full px-5 py-20 w-1/2 font-bold justify-center ">
                        <p className="text-9xl text-white">Welcome</p>
                        <p className="text-9xl ml-52 text-white">To</p>
                       <div className="text-9xl font-bold ">
                    <span className="text-blue-800 ml-2 ">React</span>
                        <span className="text-red-500 ml-5 capitalize">JS</span>
                    </div>
                   </div>
                </div>
                <div className="w-1/2 h-full px-5 py-20">
                    <p className="text-2xl font-bold capitalize">Silahkan login{""}</p>
                    <form onSubmit={submitHandle}>
                        <Input onChange={changeHandle} label="email" value={values.email}/>
                        <Input onChange={changeHandle} label="password" value={values.password} />
                        <button>Login</button>
                        <Button type="button"
                 
                           disable={buttonDisable()

                        }
                          className={`${buttonDisable() ? "bg-blue-300" :'bg-blue-500'} mt-3 p-3 w-full`} label="Login" />
                              
                    </form>
                    <a onPointerEnterCapture={() => {
                        history.push("/")
                    }} onClick={() => {
                        history.push("/")
                    }} className="flex justify-center text-blue-400 capitalize mt-3">back to home</a>
                </div>
               
            </div>
        </React.Fragment>
    )
}

export default Login;