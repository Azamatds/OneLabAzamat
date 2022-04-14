import React from 'react';
import {Component} from "react";
import './App.css';


type CounterProps =  {
}

type CounterState =  {
    inputValue: number;
}
class Hw1 extends Component<CounterProps,CounterState>{
    constructor(props: CounterProps) {
        super(props);

        this.state = {
            inputValue: 0
        };
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        this.setState({inputValue:+e.target.value})
    }

    onIncrease = () =>{
        this.setState(state => ({
            inputValue : +state.inputValue +1
        }));
    }

    onDecrease = () =>{
        this.setState(state =>({
            inputValue : +state.inputValue >0 ?  +state.inputValue -1 : 0
        }));
    }

    render() {
        return(
            <div className="App">
                <h2>Counter: {+this.state.inputValue}</h2>
                <input onInput={this.onChange} defaultValue={0}/>
                <button onClick={this.onIncrease}>Increase</button>
                <button onClick={this.onDecrease}>Decrease</button>
            </div>
        );
    }

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
