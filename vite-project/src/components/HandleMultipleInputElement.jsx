import { useState } from 'react';

const HandleMultipleInputElement = () => {

    //Multiple input elements
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState({});

    //If we have multiple input like above we could handle them in a better way using object 
    //If there are multiple properties we can add them all in a object, rather that creating two different states as shown above.

    //Having same state for multiple properties to handle the multiple event handing
    const [name, setName] = useState({firstName: '', lastName: ''});

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name)
    }

    return (
    <>
                {/* How to submit a form: */}
        <h1>Handle Multiple Input Elements by submitting a form</h1>

        <div>
            {/* trying to print the output values from the below line of code. */}
            <h1>{name.firstName} - {name.lastName}</h1>
            <form>
                {/* <input onChange={(e) => setName(e.target.value)} type="text" value={name.firstName}/>
                <input onChange={(e) => setName(e.target.value)} type="text" value={name.lastName}/> */}
                
                {/* using the spread operator which is taking the previous value and updating the firstName and lastName*/}
                <label>First Name: </label>
                <input onChange={(e) => setName({...name, firstName: e.target.value})} type="text" value={name.firstName}/>
                <label>Last Name: </label>
                <input onChange={(e) => setName({...name, lastName: e.target.value})} type="text" value={name.lastName}/>

                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    </>
    )
}

export default HandleMultipleInputElement
