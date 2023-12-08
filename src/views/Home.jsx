import "./Home.css";
import Nav from "../components/Nav";
import Slider from "../components/slider";
import IconGroup from "../components/IconGroup";
import Footer from "../components/Footer";
import SocialMediaIcons from "../components/SocialMediaIcons";

import filtros from "../assets/discos1.jpg";
import accesorios from "../assets/accesorios.jpg";

import { useState, useEffect } from "react";

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

    return (
        <div className="home-view" id="outer-container">
            <header className="header" id="page-wrap">
                <Nav />
            </header>

            <main>
                <section>
                    <Slider />

                    <div className="home-text-box">
                        <h1 className="home-title1">Innovamos</h1>
                        <h2 className="home-title2">
                            Empaquetaduras, Repuestos y Accesorios{" "}
                        </h2>
                        <p className="home-text">
                            Bienvenidos a JSmotos Import, fabricamos
                            Empaquetaduras, para motos modelo Bajaj, Tvs,
                            Piaggio y más. Próximamente encontrarás repuestos y
                            accesorios para todo tipo de motos .
                        </p>
                    </div>
                    <div className="container-images-products">
                        <div
                            className="box-img"
                            style={{ transform: `scale(${calculateScale()})` }}
                        >
                            <img
                                className="img-home"
                                src={filtros}
                                alt="Empaquetaduras"
                            />
                            <h6 className="text-image">
                                Empaquetaduras. Medidas exactas
                            </h6>
                        </div>
                        <div
                            className="box-img"
                            style={{ transform: `scale(${calculateScale()})` }}
                        >
                            <img
                                className="img-home-accesorios"
                                src={accesorios}
                                alt="Repuestos y Accesorios"
                            />
                            <h6 className="text-image-accesorios">
                                Repuestos y Accesorios
                            </h6>{" "}
                        </div>
                    </div>
                    <div className="icons-info">
                        <h1 className="title-Icon">Nuestras Ventajas</h1>
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
