import React from 'react'

const Button = (props) => {
    const {value}=props
    const {color}=props
    const onClick =()=>{
        console.log("clicked")
    }
    return (
       
            <button onClick={onClick}>
                {value}
            </button>
      
    )
}
Button.defaultProps={
    value:"add task"
}
export default Button