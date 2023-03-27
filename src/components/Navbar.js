import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <div className="grid">
                <h3>Full Circle <i className="fa-brands fa-figma" /></h3>
                <nav ref={navRef}>
                    <a href="/#">Company</a>
                    <a href="/#">Products</a>
                    <a href="/#">Blogs</a>
                    <a href="/#">Contact</a>


                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>

                </nav>

                <div className="sign">
                    <a href="/#"> Sign in</a>
                </div>

            </div>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;