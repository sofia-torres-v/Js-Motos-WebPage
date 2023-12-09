import "./CardProducts.css";
import { useState } from "react";
import PropTypes from "prop-types";

const CardProducts = ({ product }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    //  Dividir la descripción en líneas usando "\n"
    const descriptionLines = product.description.split("\n");

    return (
        <div
            className={`container-card-product ${isFlipped ? "flipped" : ""}`}
            onClick={handleCardClick}
        >
            <div className="card-front">
                <img
                    className="img-product"
                    src={product.image}
                    alt="product image"
                />
            </div>

            <div className="card-back">
                <div className="card-back-content">
                    <span className="title-card-product">{product.name}</span>

                    <p className="description-card-product">
                        {/* Renderizar cada línea de la descripción en un nuevo
                        párrafo */}
                        {descriptionLines.map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>

                    <span className="brand-card-product">{product.brand}</span>
                </div>
            </div>
        </div>
    );
};

CardProducts.propTypes = {
    product: PropTypes.object,
};

export default CardProducts;
