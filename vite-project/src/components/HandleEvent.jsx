
const HandleEvent = () => {
    function sayHello() {   //sayHello function
        console.log('Hello')
    }
    return (
        <button onClick={sayHello}>Click me to say Hello</button>  //onClick property passing sayHello function
    )
}

export default HandleEvent
