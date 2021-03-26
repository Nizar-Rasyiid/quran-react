// import React from 'react';
// const UseEffect3 = () => {
//     const [count, setCount] = React.useState(1);
//     const [text, setText] = React.useState('');
//     React.UseEffect(() => {
//         setCount(count + 1);
//         console.log("jalankan useEffect");

//     }, [text]);
//     return (
//         <React.Fragment>
//             <div className="">
//                 <p>{count}</p>
//                 <button onClick={setCount.bind(this, (counter) => counter + 1)} className="border bg-blue-400 text-white font-semibold rounded-lg px-5 py-1">
//                     Login
//                 </button>
//                 <input className="border p-2 " type="text" value={text} onChange={((e) =>
//                     setText(e.target.value)
//                 )} />
//             </div>
//         </React.Fragment>
//     );
// };
// export default UseEffect3;