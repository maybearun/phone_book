import React from 'react'
import './button.css'

const Button = ({type,event,content}) => {
    console.log({type},{event},{content})
    return (
        <div>
            <button className={type} onClick={()=>event()}> {content} </button>
        </div>
    )
}

export default Button