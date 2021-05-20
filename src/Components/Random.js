import React, { useState } from 'react'
import './Sign.css'

const SignUp = () => {
    const [color, setColor] = useState()


    const randomColor = () =>{
        const randomColors ="#" + Math.floor(Math.random()*16777215).toString(16);

        setColor(randomColors)
    }
    return (
        <div className="sign" style={{backgroundColor:`${color}`}}>
            <h1>{color}</h1>
            <button onClick={randomColor} className="btn1">Randomize</button>
            <button className="btn1" onClick={()=>navigator.clipboard.writeText(color)}>copy color</button>
        </div>
    )
}
export default SignUp;  