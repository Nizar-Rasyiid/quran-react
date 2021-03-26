import React from 'react';
const UseRef = () => {
    const [name, setName] = React.useState("");
    const inputRef = React.useRef("nizar");
    const renderCount = React.useRef(0);
    React.useRef(() => {
        const renderCount = renderCount.current + 1;
       
    });
    function klikme() {
         inputRef.current.focus()
        inputRef.current.value="saya nizar"
        inputRef.current.className= "border p-4 bg-red-500"
    }
    return (
        <React.Fragment>
            <div className="">
             
                <input
                ref={inputRef}
                className="border p-2 " type="text" value={name} onChange={((e) =>
                    setName(e.target.value)
                )} />
                <div className="">Nama Saya adalah {name}</div>
                <div className="">Render Count {renderCount.current} times</div>
                <div className="" onClick={klikme}>Klik Me</div>
            </div>


        </React.Fragment>
    )
}
export default UseRef;