import React from 'react';
import {Component} from "react";
import {useState} from "react";
import './App.css';

const Hw1 = () =>{
    const [inputValue,setValue] = useState(0);

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setValue(+e.target.value)
    }

    const onIncrease = () =>{
        setValue(inputValue>=50 ? 0: inputValue+1);
    }

    const onDecrease = () =>{
        setValue(inputValue>0 ? inputValue-1 : 0);
    }

    return(
        <div className="App">
            <h2 id="h2">Counter: {+inputValue}</h2>
            <input onInput={onChange} defaultValue={0}/>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>Decrease</button>
        </div>
    )


}


function App() {
    return (
        <div className="App">
            <h1>Hello HW1</h1>
            <Hw1/>
        </div>
    );
}

export default App;

