import React from "react";
const UseCallback = ()  => {
    const [number,setNumber] = React.useState(0);
    const [count,setCount] = React.useState(0);
    const incrementNumber = React.useCallback(() => {
        setNumber(number + 1);
    }, [number]); 
    const incrementCount = React.useCallback(() => {
        setCount(count + 1);
    }, [count]);
    return (
        <div className="">
            <Show label="number" val={number} />
            <Button  label ="number" onClick={incrementNumber}/>
            <Show label="count" val={count} />
            <Button label="count" onClick={incrementCount} />

        </div>
    );
    
};

export default UseCallback;
const Show = React.memo(({label, val }) => {
    console.log(`component ${label} telah di render`);
    return (
        <div className=""><div className="">{label} {val}</div></div>
    );
});

const Button = React.memo(({label,...props}) => {
    console.log(`component ${label} telah di render`);
    return(
        <div className="">
            <button {...props}>add {label}</button>
        </div>
    );
});