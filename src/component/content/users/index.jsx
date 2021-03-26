import React from "react";
import axios from "axios";
import { Th, Button, Input } from "../../Property";
import { Switch, Route, NavLink } from "react-router-dom";

import FormUser from "./formUser";
import swal from "sweetalert";
const Users = () => {
    // const options = [1,2];
    // const links=[`${options[1]}`];
    const options = [2, 5, 10];
    const options1 = [2];
    const options2 = [5];
    const options3 = [10];

    const [search, setSearch] = React.useState("");
    const [users, setUser] = React.useState([]);
    const [input, setInput] = React.useState(true);

    React.useEffect(() => {
        getUsers();
    }, [])

    const [userDetail, setUserDetail] = React.useState([]);
    // if (options == 2) {
    //    getUsers = let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/2?page=1`;
    // } if (options == 4) {
    //     let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/4?page=1`;
    // } if (options == 5) {
    //     let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/5?page=1`;
    // }

    const getUsers = async () => {
        let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/100?page=1`;
        if (url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${options1}?page=1`) {
            <select className="px-1 rounded-sm border">
                {options1.map((option) => (
                    <option value={option} onChange={option}>{option}</option>
                ))}

            </select>
        }
        if (url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${options2}?page=1`) {
            <select className="px-1 rounded-sm border">
                {options2.map((option2) => (
                    <option value={option2} onChange={option2}>{option2}</option>
                ))}

            </select>
        }

        //if (url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${options2}?page=1`) {
        //     <option onChange={options2}> {options2}</option>   
        // }
        // if (url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${options3}?page=1`) {
        //     <option onChange={options3}> {options3}</option>
        // }


        try {
            let response = await axios.get(url);
            setUser(response.data.data);

        } catch { }
    };

    const getUserDetail = async (idUser) => {
        let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/update/${idUser}`;
        try {
            let response = await axios.get(url);

            setUserDetail(response.data.data)
            setInput(!input)
        } catch { }
    };
    // const kon = async () =>{
    //     let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${options2}?page=1`;
    //     try {
    //         let response = await axios.get(url);
    //         setUser(response.data.data);

    //     } catch { }

    // };
    const Delete = async (idUser) => {
        let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${idUser}`;
        try {
            let response = await axios.get(url);
            setUserDetail(response.data.data)
            getUsers()
            swal("success", "data has been deleted", "error");
        } catch { }
    };
    // const fetchSearchResults = (query) => {
    //     const searchUrl = `https://belajar-react.smkmadinatulquran.sch.id/api/users/cari?q=${query}`;
    // }

    // const searchChanged = () => {
    //    {
    //      this.setState({ search: e.target.value })
    //     }
    // }


    const cariHandle = () => {
        let url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/cari=${getUserDetail}`;
        try {

            getUsers();
            swal("success", "data has been deleted", "success");
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
                        <select key="options" className="px-1 rounded-sm border">

                            {options1.map((option) => (

                                <option value={option} onChange={option}>{option}</option>
                            ))}
                            {options2.map((option2) => (
                                <option value={option2} onChange={option2}>{option2}</option>
                            ))}
                            {options3.map((option3) => (
                                <option value={option3} onChange={option3}>{option3}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/2 flex justify-end ">
                        <input
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}


                            // value = {name,username,email}
                            className="w-1/2 pl-4 pr-1 py-1 rounded-lg border mr-4"
                            placeholder="cari ...."
                        />
                        <Button
                            onClick={cariHandle}
                            className="bg-green-500"
                            label={"cari"}
                        />
                            <Switch>
                                <Route>
                                <NavLink to="/dashboard/users/create">
                                    <button
                                        onClick={() => {
                                            setInput(!input);
                                        }}
                                        className="border px-3 py-1 rounded-lg text-white text-sm hover:bg-green-800 font-semibold bg-green-500"
                                    >
                                        Tambah +
                                 </button>

                                </NavLink>
                                </Route>
                            </Switch>
                               
                          

                    </div>
                </div>
                <div className="overflow-visible mt-5">
                    <table className="table w-full">
                        <thead>
                            <tr className="border border-grey-400">
                                <Th className={""}>No</Th>
                                <Th>Nama</Th>
                                <Th>Username</Th>
                                <Th>Jenis Kelamin</Th>
                                <Th>Email</Th>
                                <Th>Daftar</Th>
                                <Th>Actions</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>

                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.jenis_kelamin}</td>
                                    <td>{user.email}</td>
                                    <td>{user.stored_at}</td>
                                    <td>
                                        <Button
                                            className="bg-green-300 "
                                            onClick={getUserDetail.bind(this, user.id)}

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
                                        <Button
                                            className="bg-red-500 "
                                            onClick={Delete.bind(this, user.id)}
                                            label={"Delete"}
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