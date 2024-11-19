//state management
//states are mutable. It is local memory for our component. 
//Will keep track of all the things that are happening inside the component
//If we have to use state in class component, we have to use this keyword mount, unmount method etc.,
//In functional component, we don't need to use this keyword. We can directly use the state
//We can use state in functional component using useState hook.

import { useState } from "react"

const CounterState = () => {

    const [count, setCount] = useState(0);   //count: is a state variable that will change time to time. 
    // This is used internally by React components and should not be used directly by applications that rely 
    // on React components and useState internally as a way to control the state of a component that depends 
    // on a state variable that changes every time the state changes and needs to be updated.
    //setCount is a method which will invoke/ initiate when you want to change something for your state
    //inside useState() we can give our default value. Here it is initialized with value zero.

    function incrementCount() {
        setCount(count + 1);
    }
    
    function decrementCount() {
        setCount(count - 1);
    }

    return (
    <div>
        <h1>This is my counter: {count}</h1>
        <button onClick={incrementCount}>Increment</button>  
        {/* Whenever we click on a button a state(count) changes, 
        the value of state(count) is changing because of incrementCount() function. 
        Whenever a change is occurred in state, React will automatically re-render the component. */}
        <button onClick={decrementCount}>Decrement</button>
    </div>
    )
}

export default CounterState
