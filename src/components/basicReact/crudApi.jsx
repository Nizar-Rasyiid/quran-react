import React from "react";
import axios from "axios";
import { Th, Button } from "../../Property";
import FormUser from "./formUser";
// import swal from "sweetalert";
const Users = () => {
    const options = [5, 10, 25, 100];
    const [users, setUser] = React.useState([]);
    const [input, setInput] = React.useState(true);
    const [userDetail, setUserDetail] = React.useState([]);

    const getUsers = async () => {
        let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/100?page=1`;
        try {
            let response = await axios.get(url);

            setUser(response.data.data);

        } catch { }
    };

    const getUsetDetail = async (idUser) => {
        let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/update/${idUser}`;
        try {
            let response = await axios.get(url);

            setUserDetail(response.data.data)
            setInput(!input)
        } catch { }
    };

    const getUsersHandle = () => {
        getUsers();
    };

    if (input) {
        return <FormUser getUsers={getUsers} setUserDetail={setUserDetail} userDetail={userDetail} input={input} setInput={setInput} />;
    } else {
        return (
            <React.Fragment>
                <div className="flex items-center justify-between">
                    <div className="w-1/2">
                        <select className="px-1 rounded-sm border">
                            {options.map((option) => (
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/2 flex justify-end ">
                        <input
                            className="w-1/2 pl-4 pr-1 py-1 rounded-lg border mr-4"
                            placeholder="cari ...."
                        />
                        <Button
                            onClick={getUsersHandle}
                            className="bg-blue-500"
                            label={"Get Data"}
                        />
                        <button
                            onClick={() => {
                                setInput(!input);
                            }}
                            className="border px-3 py-1 rounded-lg text-white text-sm hover:bg-green-800 font-semibold bg-green-500"
                        >
                            Tambah +
            </button>
                    </div>
                </div>
                <div className="overflow-visible mt-5">
                    <table className="table w-full">
                        <thead>
                            <tr className="border border-grey-400">
                                <Th className={"w-1/8"}>No</Th>
                                <Th>Action</Th>
                                <Th>Nama</Th>
                                <Th>Username</Th>
                                <Th>Jenis Kelamin</Th>
                                <Th>Email</Th>
                                <Th>Daftar</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Button
                                            className="bg-green-300 "
                                            onClick={getUsetDetail.bind(this, user.id)}

                                            label={"Edit"}
                                            path={
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                />
                                            }
                                        />
                                    </td>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.jenis_kelamin}</td>
                                    <td>{user.email}</td>
                                    <td>{user.stored_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
};

export default Users;
import React from "react";
import axios from "axios";
import swal from 'sweetalert';
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
            swal("", response.data.message, "success");
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
                <Button onClick={() => {
                    setInput(!input);
                    setUserDetail([]);
                }}
                    className="bg-red-500 mr-3 w-32 focus:outline-none  focus:bg-red-700 hover:bg-red-700"
                    label="Batal"
                />
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