import React from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}><Link to="/profile">Profile</Link></div>
            <div className={styles.item}><Link to="/dialogs">Dialods</Link></div>
            <div className={styles.item}><Link to="/news">News</Link></div>
            <div className={styles.item}><Link to ='/music'>Music </Link></div>
            <div className={styles.item}><Link to='/settings'>Settings</Link></div>
        </nav>


    );
};

export default Navbar;