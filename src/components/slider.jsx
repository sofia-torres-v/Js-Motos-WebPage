import "./slider.css";
import { Carousel } from "react-bootstrap";
import { images } from "../firebaseConfig/imagesUrls";

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
                    <p className="banner-text">¡Los mejores </p>
                    <p className="banner-text">
                        <span className="banner-span">Repuestos</span> y
                    </p>
                    <p className="banner-text">
                        <span className="banner-span">Empaquetaduras</span> para
                        tu moto!
                    </p>
                </div>
            </Carousel.Item>

            <Carousel.Item className="Carousel-Item">
                <img
                    className="carousel-image"
                    src={images.bannerHome}
                    alt="First slide"
                />

                <div className="box-banner">
                    <p className="banner-text">¡Los mejores </p>
                    <p className="banner-text">
                        <span className="banner-span">Repuestos</span> y
                    </p>
                    <p className="banner-text">
                        <span className="banner-span">Empaquetaduras</span> para
                        tu moto!
                    </p>
                </div>
            </Carousel.Item>

            <Carousel.Item className="Carousel-Item">
                <img
                    className="carousel-image"
                    src={images.bannerHome}
                    alt="First slide"
                />

                <div className="box-banner">
                    <p className="banner-text">¡Los mejores </p>
                    <p className="banner-text">
                        <span className="banner-span">Repuestos</span> y
                    </p>
                    <p className="banner-text">
                        <span className="banner-span">Empaquetaduras</span> para
                        tu moto!
                    </p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
