import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const location = useLocation();
    const isLinkActive = (path) => {
        return location.pathname === path;
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const openFacebook = () => {
        window.open(`https://www.facebook.com/jsmotosgasket?mibextid=9R9pXO`, "_blank"); 
    }

    const openTiktok = () => {
        window.open(`https://www.facebook.com/jsmotosgasket?mibextid=9R9pXO`, "_blank"); 
    }

    return (
        <>
            {/* Nueva sección para la franja superior */}
            {isMobile ? null : (
                <div className="top-bar">
                    <i className="bx bxl-facebook" onClick={openFacebook}></i>
                    <i className="bx bxl-tiktok" onClick={openTiktok}></i>
                    <div className="box-icon-message">
                    <a href='mailto:jsmotosdev@gmail.com' target='_blank' rel="noreferrer">
                    <i className="bx bx-envelope"></i>

                    </a>
                        <span>jsmotosdev@gmail.com</span>
                    </div>
                </div>
            )}
            <div
                className={isMobile ? "container-mobile" : "container-desktop"}
            >
                <figure className="container-logo">
                    <img
                        className="logo"
                        src="https://firebasestorage.googleapis.com/v0/b/jsmotos-e4995.appspot.com/o/webpage%2FlogoJsMotos.png?alt=media&token=83956378-6ff7-47cf-9866-d92cde38e2e2"
                        alt="logoJsMotos"
                    />
                </figure>

                {isMobile ? (
                    <Menu width={"100%"} isOpen={false}>
                        <Link
                            to="/"
                            className={`link ${
                                isLinkActive("/") ? "active-link" : ""
                            }`}
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/about"
                            className={`link ${
                                isLinkActive("/about") ? "active-link" : ""
                            }`}
                        >
                            Nosotros
                        </Link>
                        <Link
                            to="/products"
                            className={`link ${
                                isLinkActive("/products") ? "active-link" : ""
                            }`}
                        >
                            Productos
                        </Link>
                        <Link
                            to="/contact"
                            className={`link ${
                                isLinkActive("/contact") ? "active-link" : ""
                            }`}
                        >
                            Contacto
                        </Link>
                    </Menu>
                ) : (
                    <div className="desktop-menu">
                        <Link
                            to="/"
                            className={`link ${
                                isLinkActive("/") ? "active-link" : ""
                            }`}
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/about"
                            className={`link ${
                                isLinkActive("/about") ? "active-link" : ""
                            }`}
                        >
                            Nosotros
                        </Link>
                        <Link
                            to="/products"
                            className={`link ${
                                isLinkActive("/products") ? "active-link" : ""
                            }`}
                        >
                            Productos
                        </Link>
                        <Link
                            to="/contact"
                            className={`link ${
                                isLinkActive("/contact") ? "active-link" : ""
                            }`}
                        >
                            Contacto
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};
export default Nav;

// customBurgerIcon={<img src='' alt='menu' />}
