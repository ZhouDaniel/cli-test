import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
export function Demo() {
    let [number, setNumber] = useState(0);
    const changeNumber = () => {
        setNumber(number + 1 )
    }
    return (
        <>
            <Child number={number} changeNumber={changeNumber}/>
            
        </>
    )
}
let input;
function Child({number,changeNumber}) {
    const inputRef = useRef();
    console.log('input===inputRef', input === inputRef);
    input = inputRef;
    function getFocus() {
        inputRef.current.focus();
    }
    return (
        <>
            <input type="text" ref={inputRef} value={number} />
            <button onClick={getFocus}>获得焦点</button>
            <button onClick={changeNumber}>{number}</button>
        </>
    )
}
