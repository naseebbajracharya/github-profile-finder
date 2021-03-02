import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({icon, title}) => {

        return (
            <nav className="navbar bg-dark">
                <h1>
                <i class={icon}></i> {title}
                </h1>

                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                    <Link to='/about'>About App</Link>
                    </li>
                </ul>
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
