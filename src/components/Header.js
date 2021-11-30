import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    // is active nav link
    const isActive = navInfo => {
        return navInfo.isActive ? 'menu__item active' : 'menu__item';
    };

    return (
        <>
            <header className="header">
                <div className="header__section header__section--media">
                    <img
                        src={window.location.origin + '/images/jahid_hasan.jpg'}
                        alt="Jahid Hasan"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="header__section header__section--menu">
                    <Link className="logo" to="/">
                        Jahid Hasan
                    </Link>
                    <nav className="menu">
                        <NavLink
                            className={navInfo => isActive(navInfo)}
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={navInfo => isActive(navInfo)}
                            to="/projects"
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            className={navInfo => isActive(navInfo)}
                            to="/articles"
                        >
                            Articles
                        </NavLink>
                        <NavLink
                            className={navInfo => isActive(navInfo)}
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
