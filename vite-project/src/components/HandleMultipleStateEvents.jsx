// //What we have learned ?
// //We have learnt in a component how we can handle multiple state 
// //using increment factor and decrement factor

// import { useState } from "react";

// const HandleMultipleStateEvents = () => {

//     const[count, setCount] = useState(0);
//     const[factor, setFactor] = useState(1);

//     //setting count state to zero for simplicity and performance
//     //count Increase function
//     function incrementCount() {
//         setCount(count + factor);
//     }
//     //count decrease function
//     function decrementCount() {
//         setCount(count - factor);
//     }

//     //setting factor state to zero for simplicity and performance
//     //count Increase function
//     function incrementFactor() {
//         setFactor(factor + 1);
//     }
//     //count decrease function
//     function decrementFactor() {
//         setFactor(factor - 1);
//     }

//     return (
//     <div>
//         <h1>Handling Multiple State Events: {count}</h1>    

//         <button onClick={incrementCount}>Increment</button>
//         <button onClick={decrementCount}>Decrement</button>

//         <h1>Handling Multiple State Events using Factor: {factor}</h1>
//         <button onClick={incrementFactor}>Increase Factor</button>
//         <button onClick={decrementFactor}>Decrease Factor</button>
//     </div>
//     )
// }

// export default HandleMultipleStateEvents
