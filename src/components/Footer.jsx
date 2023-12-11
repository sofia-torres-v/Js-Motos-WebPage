import "./Footer.css";
import jsFondoNegro from "../assets/jsFondoNegro.png";

const Footer = () => {
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
                    <i className="bx bxl-facebook icon-footer"></i>
                    <i className="bx bxl-tiktok icon-footer"></i>
                    <i className="bx bxl-instagram-alt icon-footer"></i>
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
