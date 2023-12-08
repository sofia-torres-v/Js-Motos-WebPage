import "./ValuesGroup.css";
const ValuesGroup = () => {
    return (
        <div className="container-values container">
            <div className="values">
                <i className="bx bx-medal"></i>
                <p className="text-icon-home">Cálidad <span className="span-icon-home">En todos nuestros productos</span></p>
            </div>

            <div className="values">
                <i className="bx bx-check-shield"></i>
                <p className="text-icon-home">Responsabilidad <span className="span-icon-home">Con nuestros clientes.</span></p>
            </div>

      
            <div className="values">
                <i className="bx bx-like"></i>
                <p className="text-icon-home">Eficiencia <span className="span-icon-home">En todos nuestros servicios</span>.</p>
            </div>
        </div>
    );
};

export default ValuesGroup;
