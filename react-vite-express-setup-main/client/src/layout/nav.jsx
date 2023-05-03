import { NavLink, Outlet } from "react-router-dom"
import './nav.css';

const Nav = () => {
    return (
        <>
            <div className="logo">
                <NavLink to="/home"><img id="logo" src=""alt="logo" /></NavLink>
            </div>
            <button id="button_close" onClick={() => {
                document.getElementById("navbar")
                    .classList.add("active");
                }}> = </button>
            <nav id="navbar">
                <button id="button_open" onClick={() => {
                    document.getElementById("navbar")
                        .classList.remove("active");
                }}> x </button>
                <ul>
                    <li><NavLink to="/women">Women</NavLink></li>
                    <li><NavLink to="/men">Men</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="/closet">Closet</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/account">Log In</NavLink></li>
                </ul>

            </nav>
            <Outlet />
        </>);
}

export default Nav;