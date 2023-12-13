import "./Footer.css";
import jsFondoNegro from "../assets/jsFooter.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const openFacebook = () => {
        window.open(
            `https://www.facebook.com/jsmotosgasket?mibextid=9R9pXO`,
            "_blank"
        );
    };

    const openTiktok = () => {
        window.open(
            `https://www.facebook.com/jsmotosgasket?mibextid=9R9pXO`,
            "_blank"
        );
    };

    const navigate = useNavigate();

    return (
        <footer className="footer">
            <div className="box-footer">
                <div className="content1-footer">
                    <div>
                        <img
                            className="img-footer"
                            src={jsFondoNegro}
                            alt="Empaquetaduras"
                        />
                        <p>Fabricantes y Distribuidores de empaquetaduras.</p>
                    </div>
                    <div className="box2-icons-footer">
                        <h3>Contáctanos</h3>
                        <div>
                            <p>Lima-Perú, Lomas de Zapallal, Mz Ñ1 - Lte 11</p>

                            <div className="icons1">
                                <a
                                    href="mailto:jsmotosdev@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bx bx-envelope icon-message-footer "></i>
                                </a>
                                <span className="span-footer">
                                    jsmotosdev@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content2-footer">
                    <div>
                        <h2>¿Necesitas ayuda?</h2>

                        <h6>Siempre buscamos mejorar, Cuéntanos tu opinión.</h6>
                        <button
                            className="btn-footer fill"
                            onClick={() => navigate("/Contact")}
                        >
                            Contáctanos
                        </button>
                    </div>

                    <div>
                        <h5 className="title-text-icons">Síguenos en redes</h5>
                        <i
                            className="bx bxl-facebook icon-footer"
                            onClick={openFacebook}
                        ></i>
                        <i
                            className="bx bxl-tiktok icon-footer-tik"
                            onClick={openTiktok}
                        ></i>
                    </div>
                </div>
            </div>

            <div className="footer-end">
                <p className="footer-text">
                    © 2023 JSMOTOS IMPORT | Todos los derechos Reservados.
                </p>
                <div className="credits">
                    <p className="text-credits">Diseñada y Desarrollada por:</p>
                    <div className="links-footer">
                        <div className="box-links-git">
                            <i className="bx bxl-github">
                                <a
                                    className="link-git"
                                    href="https://github.com/andrenavas"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Andre Navas{" "}
                                </a>
                            </i>
                        </div>
                        <div className="box-links-git">
                            <i className="bx bxl-github">
                                <a
                                    className="link-git"
                                    href="https://github.com/paulivega"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Pauli Vega{" "}
                                </a>
                            </i>
                        </div>
                        <div className="box-links-git">
                            <i className="bx bxl-github">
                                <a
                                    className="link-git"
                                    href="https://github.com/sofia-torres-v"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Sofia Torres
                                </a>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
