import React from 'react'

// Belajar state
//State Berada di dalam komponen itu sendiri
//State tidak bisa diakses oleh komponen lain
//value state bisa berubah

const BelajarState = () => {
    
//     const [number, setNumber] = React.useState( 100 );
//     // state untuk string
//     const [string, setString] = React.useState("hari ini saya belajar react");
//     //contoh state dalam bentuk array
//     const [namaSiswa, setNamaSiswa] = React.useState(["anom", "bayu"]);
//     let [i, setI] = React.useState(0);
//     const siswaBaru = ["dhafin", "udil", "amir", "shihab", "arkan"];
//     const listNamaSiswa = namaSiswa.map((nama)=> <li>{nama}</li>)

//     //eventHandle

//    const tambahSiswa =()=> {
//        setNamaSiswa([...namaSiswa, siswaBaru[i]])
//        setI(i+1)
//        ;

//    }
  const [isLoading, setLoading] = React.useState(false);
  const Login = () => {
      setLoading(!isLoading);
  }

    return(
        <React.Fragment>
           <div className="container">
               <div onClick={Login} className="btn btn-primary">{isLoading ? (<Loading />) : "Login"} </div>
           </div>
        </React.Fragment>
    )
}
export default BelajarState;

const Loading = () => {
    return(
        <div className="spinner-border text-light" role="status">
        <span className="sr-only"></span>
        </div>
    )
}