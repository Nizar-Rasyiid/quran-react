import React from 'react'

// Belajar state
//State Berada di dalam komponen itu sendiri
//State tidak bisa diakses oleh komponen lain
//value state bisa berubah

const LatihanState = () => {

    const [number, setNumber] = React.useState(100);
    // state untuk string
    const [string, setString] = React.useState("hari ini saya belajar react");
    //contoh state dalam bentuk array
    const [namaSiswa, setNamaSiswa] = React.useState(["anom", "bayu"]);
    let [i, setI] = React.useState(0);
    const siswaBaru = ["dhafin", "udil", "amir", "shihab", "arkan"];
    const listNamaSiswa = namaSiswa.map((nama) => <li>{nama}</li>)

    //eventHandle
    const tambahNumber = () => {
        setNumber(number + 1);
    };
    const kurangNumber = () => {
        setNumber(number - 1);
    };
    const stringHandle = () => {
        setString("alhamdulillah saya mengerti")

    }
    const stringHandleWhenOut = () => {
        setString("Hari ini saya belajar react")
    };

    const tambahSiswa = () => {
        setNamaSiswa([...namaSiswa, "Anom"]);

    }

    return (
        <React.Fragment>
            <h5>Belajar State</h5>
            <p>ini adalah angka <span p-2>{number}</span> </p>

            <div className="d-flex justify-between">
                <button onClick={tambahNumber} className="btn btn-sm btn-success mr-3">tambah 1</button>
                <button onClick={kurangNumber} className="btn btn-sm btn-danger">kurang 1</button>
            </div>

            <div className="">
                <h3 onMouseOver={stringHandle} onMouseOut={stringHandleWhenOut} >ini adalah contoh state yaitu {string}</h3>
            </div>
            <div className="container">
                <ol>
                    {listNamaSiswa}
                </ol>
                <button onClick={tambahSiswa} >Tambah Santri</button>
            </div>
        </React.Fragment>
    )
}
export default LatihanState;