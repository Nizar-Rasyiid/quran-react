import React from 'react';
const UseEffect = () => {
    
    const [count, setCount] = React.useState(1);
    const [text, setText] = React.useState("");
    const [number, setNumber] = React.useState(1)

    return(
        <React.Fragment>
            <div className="">
                <p>{count}</p>
                <p>{text}</p>
                <button onClick={setNumber.bind(this, (counter) => counter + 1)} className="border bg-blue-400 text-white font-semibold rounded-lg px-5 py-1">
                    Increment
                </button>
                <input type="text" className="border p-2" value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                />
            </div>
        </React.Fragment>
    )
}
export default UseEffect;