import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const [increment, setIncrement] = useState<number>(1);

    const addAction = () => {
        setCount(count + increment);
    };
    const minusAction = () => {
        setCount(count - increment);
    };
    const rest = () =>{
        setCount(0)
    }

    const increPlus = () =>{
        setIncrement(increment + 1);
    }
    const increMinus = () => {
        setIncrement(increment - 1);
    }

    return (
        <div>
            <h1>Counter App</h1>
            <p>Count: {count} -- Increments by {increment}</p>
            <button onClick={addAction}>Plus</button>
            <button onClick={minusAction}>Minus</button>
            <button onClick={rest}>Reset</button>

            <button onClick={increPlus}>Increments plus</button>
            <button onClick={increMinus}>Increments minus</button>
        </div>
    );
};

export default Counter;
