import "./iconGroup.css";
const IconGroup = () => {
    return (
        <div className="conatiner-icons container">
            <div className="icons">
                <i className="bx bx-map"></i>
                <p className="text-icon-home">Conoce nuestra zona de despacho <span className="span-icon-home">Recógelo en tienda.</span></p>
            </div>

            <div className="icons">
                <i className="bx bx-world"></i>
                <p className="text-icon-home">Amigable con el medio Ambiente. <span className="span-icon-home">Libre de Asbesto</span></p>
            </div>
            <div className="icons">
                <i className="bx bxs-truck"></i>
                <p className="text-icon-home">Entrega a domicilio. Pedidos <span className="span-icon-home">Lima y Provincias</span>.</p>
            </div>
        </div>
    );
};

export default IconGroup;
