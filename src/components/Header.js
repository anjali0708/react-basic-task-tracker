import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';
import { useLocation } from'react-router-dom';

const Header = ({title, showAddTask, onAdd}) => {
    const location = useLocation();
    return (
        <header className="header">
            <h1>{title}</h1>
            { location.pathname === '/' && <Button text={showAddTask ? 'Close' : 'Add'} 
            color={showAddTask ? 'red' : 'green'}onClick={onAdd}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
