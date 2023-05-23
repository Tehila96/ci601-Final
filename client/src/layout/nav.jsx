import { NavLink } from "react-router-dom"
import './nav.css';
import { React, useState } from "react";
import { useEffect } from "react"

const Nav = (props) => {

    const [navState, setNavState] = useState(false);
    const [isMobileState, setIsMobile] = useState(false);
    const [doNotShowPath, setDoNotShowPath] = useState(false);

    const [navButtonSrc, setNavButtonSrc] = useState("/images/close.png");

    const handleClick = () => {
        setNavState(!navState)
        props.handleDataFromChild(!doNotShowPath);
        setDoNotShowPath(!doNotShowPath);
    };

    function resizedw(size) {
        // Haven't resized in 100ms!
        if (size > 768) {
            setIsMobile(false);
            props.setMobile(false);
        }
        else {
            setIsMobile(true);
            props.setMobile(true);
        }

    }

    var doit;
    window.onresize = function () {
        const size = window.innerWidth;
        clearTimeout(doit);
        doit = setTimeout(resizedw(size), 100);
    };

    useEffect(() => {
        resizedw(window.innerWidth);
        if (!navState)
            setNavButtonSrc("/images/close.png");
        else
            setNavButtonSrc("/images/open.png")
    }, [navState])




    return (
        <>
            <div className="logo">
                <NavLink to="/home"><img id="logo" src="/images/logo.png" alt="logo" /></NavLink>
            </div>
            <button id="button_open" onClick={handleClick}>
                <input type="image" src={navButtonSrc} alt="=" width={40} height={40} />
            </button>
            <>
            {/* {not mobile} */}
                {isMobileState == false &&
                    <nav id="navbar" className="active">
                        <ul>
                            <li onClick={() => handleClick(false)}><NavLink to="/women">Women</NavLink></li>
                            <li onClick={() => handleClick(false)}><NavLink to="/men">Men</NavLink></li>
                            <li onClick={() => handleClick(false)}><NavLink to="/blog">Blog</NavLink></li>
                        </ul>

                        <ul>
                            <li onClick={() => handleClick(false)}><NavLink to="/closet">Closet</NavLink></li>
                            <li onClick={() => handleClick(false)}><NavLink to="/about">About</NavLink></li>
                            <li onClick={() => handleClick(false)}><NavLink to="/account">Log In</NavLink></li>
                        </ul>
                    </nav>
                }
                            {/* {mobile+mobileNav} */}
                {isMobileState == true && navState == true &&
                    <nav id="navbar" className="active">
                        <ul>
                            <li onClick={() => handleClick(false)}><NavLink to="/women">Women</NavLink></li>
                            <li onClick={() => handleClick(false)}><NavLink to="/men">Men</NavLink></li>
                            <li onClick={() => handleClick(false)}><NavLink to="/blog">Blog</NavLink></li>
                        </ul>

                        <ul>
                            <li onClick={() => handleClick(false)}><NavLink to="/closet">Closet</NavLink></li>
                            <li onClick={() => handleClick(false)}><NavLink to="/about">About</NavLink></li>
                            <li onClick={() => handleClick(false)}><NavLink to="/account">Log In</NavLink></li>
                        </ul>
                    </nav>
                }
            </>

        </>
    );
}

export default Nav;