import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Users from "../content/users";
import Quran from "../content/quran";
import Profile from "../content/Profile"


import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

const Layout = () => { //Tambah props children

    let match = useRouteMatch();
    const [latihan, setLatihan] = React.useState(0)
    const [namaSiswa, setNamaSiswa] = React.useState('')
    const [sekolahSiswa, setSekolah] = React.useState('')
    const getNamaSiswa = (nama) => {
        console.log('function called')
        setNamaSiswa(nama)
    }
    const getSekolah = (sekolah) => {
        setSekolah(sekolah)
    }
    return (
        <React.Fragment>
            <div className="">
                {/* Navbar */}
                {namaSiswa}

                <div className=""><Navbar getNamaSiswa={getNamaSiswa}  latihan={latihan} url="https://youtube.com" /></div>
                <div className="flex">
                    {/* sidebar */}
                    <div className="w-1/5 border  bg-blue-600 h-screen"><Sidebar getSekolah={getSekolah}/>
                      
                    </div>
                    <div className="w-4/5 h-screen  p-10">
                        <Switch className>
                            <Route path={`${match.url}/users`}>
                                <Users />
                            </Route>
                            <Route path={`${match.url}/table`}>
                                <Users />
                            </Route>
                            <Route path={`${match.url}/profile`}>
                                <Profile/>
                            </Route>
                            <Route path={`${match.url}/quran`}>
                                <Quran />
                            </Route>
                            <Redirect to={`${match.url}/users`} />
                        </Switch>
                    </div>
                    {/* content */}
                </div>
            </div>

        </React.Fragment>
    );
}

export default Layout;

    // const Quran = () =>{
    //     return(
    //         <div className="">ini adalah Quran</div>
    //     )
    // }
// const Lous = () => {
//     return (
//         <div className="">ini adalah profile</div>
//     )
// }