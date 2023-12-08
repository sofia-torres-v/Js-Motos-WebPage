import "./slider.css";
import { Carousel } from "react-bootstrap";
import { images } from "../firebaseConfig/imagesUrls";
import filtros from "../assets/20210206_165847.jpg";

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item className="Carousel-Item">
                <img
                    className="carousel-image"
                    src={images.bannerHome}
                    alt="First slide"
                />

                <div className="box-banner">
                    <p className="banner-text">¡Las mejores </p>
                    <p className="banner-text">
                        <span className="banner-span">Empaquetaduras</span> y
                    </p>
                    <p className="banner-text">
                        <span className="banner-span">Repuestos</span> para tu
                        moto!
                    </p>
                </div>
                {/* Indicador circular */}
                <Carousel.Caption>
                    <div className="carousel-indicator"></div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="Carousel-Item">
                {/* <img
                    className="carousel-image"
                    src={images.bannerHome}
                    alt="First slide"
                /> */}

                <img
                    className="carousel-image"
                    src={filtros}
                    alt="Empaquetaduras"
                />

                <div className="box-banner">
                    <p className="banner-text">¡Las mejores </p>
                    <p className="banner-text">
                        <span className="banner-span">Empaquetaduras</span> y
                    </p>
                    <p className="banner-text">
                        <span className="banner-span">Repuestos</span> para tu
                        moto!
                    </p>
                </div>
                {/* Indicador circular */}
                <Carousel.Caption>
                    <div className="carousel-indicator"></div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="Carousel-Item">
                <img
                    className="carousel-image"
                    src={images.bannerHome}
                    alt="First slide"
                />

                <div className="box-banner">
                    <p className="banner-text">¡Las mejores </p>
                    <p className="banner-text">
                        <span className="banner-span">Empaquetaduras</span> y
                    </p>
                    <p className="banner-text">
                        <span className="banner-span">Repuestos</span> para tu
                        moto!
                    </p>
                </div>

                {/* Indicador circular */}
                <Carousel.Caption>
                    <div className="carousel-indicator"></div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
