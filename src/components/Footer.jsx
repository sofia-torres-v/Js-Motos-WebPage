import "./Footer.css";
import jsFondoNegro from "../assets/jsFondoNegro.png";

const Footer = () => {
    const openFacebook = () => {
        window.open(`https://www.facebook.com/jsmotosgasket?mibextid=9R9pXO`, "_blank");
    }

    const openTiktok = () => {
        window.open(`https://www.facebook.com/jsmotosgasket?mibextid=9R9pXO`, "_blank");
    }

    return (
        <footer className="footer">
            <div className="box-icon-footer">
                <div>
                    <img
                        className="img-footer"
                        src={jsFondoNegro}
                        alt="Empaquetaduras"
                    />
                </div>
                <div className="content-icons">
                    <i className="bx bxl-facebook icon-footer" onClick={openFacebook}></i>
                    <i className="bx bxl-tiktok icon-footer" onClick={openTiktok}></i>
                    <a href='mailto:jsmotosdev@gmail.com' target='_blank' rel="noreferrer">
                        <i className="bx bx-envelope icon-footer"></i>
                    </a>
                </div>
            </div>
            <div className="footer-end">
                <p className="footer-text">
                    © 2023 JSMOTOS IMPORT | Todos los derechos Reservados.
                </p>
                <p>
                    Diseñado y Desarrollado por Andre Navas | Pauli Vega | Sofia
                    Torres{" "}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
