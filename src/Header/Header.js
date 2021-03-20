import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import './header.css'
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <h1>Rent-Ride</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/">Contact </Link>
                <Link to="/login"> Log In</Link>
                <Link className='bg-info'>{loggedInUser.name}</Link>

            </nav>
        </div>
    );
};

export default Header;