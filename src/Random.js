import { useState } from "react"
import "./style.css"
const Random=()=>{
    const [random,setrandom]=useState(0)
    const handlerandom=()=>{
        setrandom(Math.floor(Math.random()*10)+1)
    }
    return(
        <>
        <div className="container">
        <div className="inner-container">
            <h1 className="num">{random}</h1>
            <button className="btn" onClick={handlerandom}>Random number</button>
        </div>
        </div>
        </>
    )

}
export default Random