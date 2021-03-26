import React, {useState} from "react";

const useCallback2 = () => {
    let [kelas,setKelas] = useState([]);

    const namaKelas = React.useCallback((kelasBaru = "rpl") => {
        return ["X RPL", "X TKJ", "XI RPL", "XI TKJ"];
    }, []);

    React.useEffect(() => {
        setKelas(namaKelas());
        console.log("UseEffect jalan");
    }, [namaKelas]);

    return (
        <div className="">
            {kelas.map((kelas, index)=> (
                <div className="" key={index}>{kelas}</div>
            ))}
        </div>
    )
}
export default useCallback2;