//Handle Input Element in React
import { useState } from "react"


const HandleInputElement = () => {

    const[text, setText] = useState('')

    return (
    <>
        <form>
            <input onChange={(e)=>setText(e.target.value)} type="text" value={text} />
        </form>
        <h1>{text}</h1>
    </>
    )
}

export default HandleInputElement
