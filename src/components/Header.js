import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const { title } = props
    const { toggleform } = props
    const { showAddform } = props
    
    
    return (
        <div className='container'>
            <h1 style={headerstyle}>
                {title}
            </h1>
          <Button toggleform={toggleform} color={showAddform ? "green":"red"} value={showAddform ? "close":"open"}  />
          
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