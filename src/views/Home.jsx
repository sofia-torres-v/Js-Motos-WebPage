import "./Home.css";
import Nav from "../components/Nav";
import Slider from "../components/slider";
import IconGroup from "../components/IconGroup";
import Footer from "../components/Footer";
import SocialMediaIcons from "../components/SocialMediaIcons";

import filtros from "../assets/discos1.jpg";
import accesorios from "../assets/coronaFlSinFondo.png";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const calculateScale = () => {
        const scaleFactor = 0.005;
        const maxScale = 1.5;

        return Math.min(1 + scrollY * scaleFactor, maxScale);
    };

    const navigate = useNavigate();

    return (
        <div className="home-view" id="outer-container">
            <header className="header" id="page-wrap">
                <Nav />
            </header>

            <main>
                <section>
                    <Slider />
                    <h2 className="home-title2">
                        Empaquetaduras, Repuestos y Accesorios
                    </h2>
                    <div className="home-text-box">
                        <p className="home-text">
                            Bienvenidos a JSmotos Import, fabricamos
                            Empaquetaduras, para motos modelo Bajaj, Tvs,
                            Piaggio y más. Próximamente también encontrarás
                            repuestos y accesorios.
                        </p>
                    </div>
                    <div className="contant-products-home">
                        <h2 className="subtitle-products-home">
                            Nuestros Productos
                        </h2>
                        <div className="title-line-products"></div>
                        <div className="container-images-products">
                            <div
                                className="box-img"
                                style={{
                                    transform: `scale(${calculateScale()})`,
                                }}
                            >
                                <img
                                    className="img-home"
                                    src={filtros}
                                    alt="Empaquetaduras"
                                />
                                <button
                                    className="btn-home"
                                    onClick={() => navigate("/products")}
                                >
                                    Ver más Productos
                                </button>
                            </div>
                            <div
                                className="box-img"
                                style={{
                                    transform: `scale(${calculateScale()})`,
                                }}
                            >
                                <img
                                    className="img-home-accesorios"
                                    src={accesorios}
                                    alt="Repuestos y Accesorios"
                                />
                                <button className="btn-home"
                                onClick={() => navigate("/products")}
                                >
                                    Ver más Productos
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="icons-info">
                        <h1 className="title-Icon">¿Porqué elegirnos?</h1>
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
