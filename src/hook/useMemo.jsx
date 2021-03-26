import React from 'react';

const UseMemo = ( ) => {
    const [number, setNumber] = React.useState(0);
    const [count, setCount] = React.useState(0);

    const incrementNumber = () => setNumber(prev => + 1);
    const incrementCount = () => setNumber(prev => + 1);

    const isNumberEven = React.useMemo(() => {
        let i = 0;
        while (i < 200000000) i++
        return number % 2 === 0
    });

    return(
        <div className="App">
            <button onClick={incrementNumber}>number : {number}</button>
            <div className="">{isNumberEven ? "even" : "odd" }</div>
            <button onClick={incrementCount}>count : {count}</button>
        </div>
    )
}
export default UseMemo;