import React from 'react'
import {useSelector,useDispatch} from "react-redux"
// import {counterIncrement,counterDecrement} from "../../../redux/Actions"

const Profile = () => {
    let counter = useSelector(state => state.counter)
    let dispatch = useDispatch()
    console.log(counter)
    return(
        <React.Fragment>
            {/* <div className="">
            <div className="">
                counter saat ini adalah {counter}
            </div>
            <div className="flex my-5">
                <button  onClick={() => dispatch(counterIncrement())} >tambah</button>
                <p>{counter}</p>
                <button onClick={() => dispatch(counterDecrement())} >kurang</button>
            </div>
            </div> */}
            <p>profile</p>
           
        </React.Fragment>
    )
}

export default Profile;