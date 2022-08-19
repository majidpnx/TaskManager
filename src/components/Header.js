import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const { title } = props
    return (
        <div className='container'>
            <h1 style={headerstyle}>
                {title}
            </h1>
          <Button value="Add Work"  />
          
        </div>

    )
}
Header.defaultProps = {
    title: "hello"
}
Header.protoTypes = {
    title: PropTypes.string
}
const headerstyle = { textAlign: 'Center', color: '#2196f3' }
export default Header