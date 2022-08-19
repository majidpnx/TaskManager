import React from 'react'

const Button = (props) => {
    const {value}=props
    const {toggleform}=props
    const {color}=props
    
    return (
       
            <button onClick={toggleform} style={{backgroundColor: color }}>
                {value}
            </button>
      
    )
}
Button.defaultProps={
    value:"add task"
}
export default Button