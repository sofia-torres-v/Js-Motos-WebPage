import "./Home.css";
import Nav from "../components/Nav";
import Slider from "../components/slider";
import IconGroup from "../components/IconGroup";
import Footer from "../components/Footer";
import SocialMediaIcons from "../components/SocialMediaIcons";

import filtros from "../assets/discos1.jpg";
import accesorios from "../assets/accesorios.jpg";

const Home = () => {
    return (
        <div className="home-view" id="outer-container">
            <header className="header" id="page-wrap">
                <Nav />
            </header>

            <main>
                <section className="container-main-home">
                    <Slider />

                    <div className="box-main-text">
                        <h1 className="home-title">Innovamos</h1>
                        <h2 className="home-title">
                            Empaquetaduras, Repuestos y Accesorios
                        </h2>
                        <p className="home-text">
                            Bienvenidos a JSmotos Import, fabricamos las mejores
                            Empaquetaduras, para motos modelo bajaj, tvs
                            piaggio, entre otros. Proximamente encontaras
                            repuestos y accesorios para todo tipo de motos .
                        </p>
                    </div>

                    <div className="container-images-products">
                        <div className="box-img-filtros">
                            <img
                                className="img-filtros"
                                src={filtros}
                                alt="Google"
                            />
                        </div>
                        <div className="box-img-filtros">
                            <img
                                className="img-filtros"
                                src={accesorios}
                                alt="Google"
                            />
                        </div>
                    </div>

                    <div className="icons-info">
                        <IconGroup />
                    </div>

                    <SocialMediaIcons />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
