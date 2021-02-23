import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {

        return (
            <nav className="navbar bg-dark">
                <h1>
                <i class={props.icon}></i> {props.title}
                </h1>
            </nav>
        );
}

Navbar.defaultProps = {
    title: 'Github Profile Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;
