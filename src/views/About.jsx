import "./About.css";
import Nav from "../components/Nav";
import motoImage from "../assets/motorcicle.jpg";
import ValuesGroup from "../components/ValuesGroup";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="about-view">
            <header className="header">
                <Nav />
            </header>
            <main>
                <section className="container-main-about">
                    <div className="container-banner-about">
                        <div className="image-banner-container">
                            <img
                                className="img-motorcicle"
                                src={motoImage}
                                alt="image motorcicle"
                            />
                        </div>

                        <div className="text-banner-about">
                            <h1 className="title-about">Conócenos</h1>
                            <div className="title-line"></div>
                            <p className="text-about">
                                Somos una empresa Peruana dedicada a la
                                fabricación y venta de empaquetaduras para
                                motos. Iniciamos en el 2017 como un pequeño
                                emprendimiento, el cual ha crecido con mucho
                                esfuerzo y dedicación. En la actualidad,
                                ampliamos nuestro horizonte más allá de las
                                empaquetaduras, para ofrecer a nuestros clientes
                                una variedad de repuestos y accesorios para
                                motos y carros de la más alta calidad.
                            </p>
                        </div>
                    </div>

                    <div className="icons-info-values">
                        <h1 className="title-values">Nuestros Valores</h1>
                        <ValuesGroup />
                    </div>

                    <SocialMediaIcons />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
