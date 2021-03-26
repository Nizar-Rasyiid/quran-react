import React from 'react';
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logout} from '../../redux/Actions'

const Navbar = (props) => {
    console.log('props yg ada'.props);
    let dispatch = useDispatch()
    let history = useHistory();
    let namaSiswa = 'nizar';
    let namaSekolah= 'SMK MADINATULQURAN';
    const [userDetail, setUserDetail] = React.useState(false);
    React.useEffect( () => {
       setTimeout(() => {
           props.getNamaSiswa(namaSiswa);
       }, 5000);
    }, [])
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         props.getSekolah(namaSekolah);
    //     }, 5000);
    // }, [])

    return(
        <React.Fragment>
            <div className=" flex items-center justify-between bg-blue-500">
                <p>{props.latihan}</p>
                <p>{props.url}</p>
                <div className="text-4xl font-bold">
                    <span className="text-blue-800 ml-2 ">React</span>
                    <span className="text-red-500 ml-2  capitalize">JS</span>
                </div>
                    <div className="flex justify-end py-2 w-full">
                        <input className="border px-2 py-2 w-2/3 rounded-lg focus:outline-none
                        "type="text" placeholder="cari..."/>
                        <img src="/logo192.png" className=" w-10 h-10 rounded-full mr-2" alt="" onClick={()=> {
                            setUserDetail(!userDetail)
                        }} />
                        {userDetail ? ( <div className="absolute text-white font-semibold rounded-xl z-10 bg-blue-700 flex px-3 py-5 top-16 ">
                            <ul>
                            <li className="py-2 button-small">User Profile</li>
                            <li className="py-2 button-small">Products</li>
                            <li className="py-2 button-small">User Profile</li>
                            <button className="bg-blue-400 text-white font-semibold rounded-lg px-3 py-1" onClick={() => {
                                dispatch(logout())
                                history.push("/");
                            }}>Logout</button>
                            </ul>
                       
                        </div>) : ''}
                    </div>
            </div>
        </React.Fragment>
    )
}
export default Navbar;  

