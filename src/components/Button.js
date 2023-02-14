import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <div>
            <button
                style={{ backgroundColor: color }}
                onClick={onClick}
                className="btn">{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'red'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
