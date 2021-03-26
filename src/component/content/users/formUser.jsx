import React from "react";
import axios from "axios";
import swal from 'sweetalert';
import { Switch, Route,NavLink } from "react-router-dom";
import { Input, InputRadio, Button } from "../../Property";

const FormUser = ({ input, setInput, userDetail, setUserDetail, getUsers }) => {
  const [username, setUsername] = React.useState(userDetail.username);
  const [name, setName] = React.useState(userDetail.name);
  const [jenis_kelamin, setJenis_kelamin] = React.useState(
    userDetail.jenis_kelamin
  );
  const [email, setEmail] = React.useState(userDetail.email);
  const [password, setPassword] = React.useState("");
  const [password_confimation, setPassword_confimation] = React.useState("");
  const [error, setError] = React.useState([]);

  console.log("userDetail", userDetail);

  // const Delete = async () => {
  //   let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus`;
  //   let payload = {
  //     id: userDetail.id,
  //     username: username,
  //     name: name,
  //     email: email,
  //     jenis_kelamin: jenis_kelamin,

  //   };

  //   console.log("payload", payload);
  //   try {
  //     let response = await axios.get(url, payload);
  //     getUsers()
  //     swal("success", "data has been deleted", "error");
  //   } catch {

  //   }
  // };
  // let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus`,
  const Update = async () => {
    let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/update`;
    let payload = {
      id: userDetail.id,
      username: username,
      name: name,
      email: email,
      jenis_kelamin: jenis_kelamin,

    };

    console.log("payload", payload);
    try {
      let response = await axios.put(url, payload);
      getUsers()
      swal("Nice", "the data has been updated", "success");
    } catch {

    }
  };
  const Register = async () => {
    let url = `https://belajar-react.smkmadinatulquran.sch.id/api/register`;
    let payload = {
      username: username,
      name: name,
      email: email,
      jenis_kelamin: jenis_kelamin,
      password: password,
      password_confirmation: password_confimation,
    };

    console.log("payload", payload);
    try {
      let response = await axios.post(url, payload);
    } catch (err) {
      setError(err.response.data.errors);
    }
  };

  return (
    <React.Fragment>
      <h2 className="text-center text-2xl mb-3  font-semibold">
        {userDetail.length === 0 ? " Form Registrasi Users" : "Form Edit Users"}
      </h2>
      <Input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
        label={"username"}
      />
      <p className="text-md mt-2 text-red-500"> {error.username}</p>
      <Input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        label={"name"}
      />
      <p className="text-md mt-2 text-red-500"> {error.name}</p>
      <Input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        label={"email"}
      />
      <p className="text-md mt-2 text-red-500"> {error.email}</p>
      <div className="flex w-1/4 justify-between py-2">
        <InputRadio
          value={"laki-laki"}
          checked={jenis_kelamin === "laki-laki"}
          label="laki-laki"
          onChange={(e) => {
            setJenis_kelamin(e.target.value);
          }}
        />
        <InputRadio
          value={"perempuan"}
          checked={jenis_kelamin === "perempuan"}
          label="perempuan"
          onChange={(e) => {
            setJenis_kelamin(e.target.value);
          }}
        />
      </div>
      <p className="text-md mt-2 text-red-500"> {error.jenis_kelamin}</p>
      {userDetail.length === 0 ? (
        <div>
          {" "}
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            label="password"
          />
          <p className="text-md mt-2 text-red-500"> {error.password}</p>
          <Input
            onChange={(e) => {
              setPassword_confimation(e.target.value);
            }}
            value={password_confimation}
            label="password confimation"
          />
        </div>
      ) : (
          ""
        )}
      <p className="text-md mt-2 text-red-500"> {error.password_confimation}</p>
      <div className="flex items-center mt-3 justify-end ">
          <NavLink to="/dashboard/users">
          <Button onClick={() => {
            setInput(!input);
            setUserDetail([]);
          }}
            className="bg-red-500 mr-3 w-32 focus:outline-none  focus:bg-red-700 hover:bg-red-700"
            label="Batal"
          />  
          </NavLink>
        <Button
          onClick={userDetail.length === 0 ? Register : Update}
          className="bg-green-500  w-32 focus:outline-none focus:bg-green-700 hover:bg-green-700"
          label={userDetail.length === 0 ? 'Register' : 'Update'}
        />
        
      </div>
    </React.Fragment>
  );
};
export default FormUser;