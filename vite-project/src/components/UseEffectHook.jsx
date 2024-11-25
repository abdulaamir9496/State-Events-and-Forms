import { useState } from "react"

import { useEffect } from "react";


const UseEffectHook = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    let incrementCount = () => {
        setCount(count + 1);
    }

    let handleChange = (e) => {
        setText(e.target.value)
    }

    //syntax of useEffectHook: useEffect will run after everything has happened.
    //Like we say in console example of increment
    //1. If we have useEffect in our application, whatever state(useState) changes it(useEffect) will always run.
    //2. useEffect no matter what it will run once after the component has rendered automatically
    //The below syntax and code proves the above two points

    //1st case : What is component mounting(default behavior) & component updating: The first render of the application component
    //& whenever we change and / or update anything useEffect will be called before the component is rendered 
    //and the component is rendered automatically

    //1st case : component mounting and component updating
    // useEffect(() => {
    //     console.log("Use Effect Hook runs")
    //     document.title = `button clicked for ${count} times`;
    // })

    //Sometimes we don't want to accomplish/ run the useEffect every time when we write some text/click events etc.,
    //In such scenarios we can make our useEffect dependent on the component being rendered.
    //How can we achieve that ? 

    //2nd case : Restricted to only component mounting(default behavior). When we added the empty Array.
    //2nd case : Component mounting (Default behavior).
    // useEffect(() => {
    //     console.log("Use Effect Hook runs");
    //     document.title = `Button clicked for ${count} times`
    // }, []) 
    //Added empty dependent array. This is our dependency[] in the useEffect Hook.
    //For the 1st time the component will mount(render) because mounting is a default behavior. My state is changing but useEffect is not running.
    //No change in count in browser title, and no change in console output related to useEffect hook.


    //3rd case: What if we add some dependency in this array of dependencies
    //For example : I want my useEffect hook to run when my count is updated but not when my text is updated.
    //How can I do that ? 
    //3rd case : Runs only for the dependencies like : count / text useState Hook.
    useEffect(() => {
        console.log("Use Effect Hook runs only for count useState Hook");
        document.title = `Button Clicked for ${count} times`;
    }, [count])

    useEffect(() => {
        console.log("Use Effect Hook runs only for text useState Hook");
        // document.title = `Text written in ${text} field` or 
        document.title = `Text written in ${count} field`
    }, [text])


    //What is the use of the useEffect Hook ?
    //Sometimes what happens is if we have to do some heavy operations
    //like we are going to work with API's/ communicate with an APIs to get the data
    //so, what will happen is as this useEffect hook will be executed at the end
    //1st will render all of our html, jsx code then useEffect will be executed to get the data from the API and it will be mounted/ rendered
    //on that basis we can add dependencies on what useState hook the useEffect hook will be executed
    //So, all of these things we can decide. This is why this useEffect hook is very important.

    return (
        <>
            <h1>This is my count value: {count}</h1>
            <input onChange={handleChange} type="text" value={text}/>
            <h2>{text}</h2>
            <button onClick={incrementCount}>Increment Count</button>
        </>
    )
}

export default UseEffectHook


//Understanding the behaviour of useEffectHook:
//Before we use to work with class based components, component mounting, 
//component unmounting, component updating these are known as lifecycle methods.
//ALl these above lifecycle methods can be managed by using useEffectHook.
//Lets also see the useEffectHook uses.