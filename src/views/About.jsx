import "./About.css";
import Nav from "../components/Nav";
// import { imagesDesktop } from "../firebaseConfig/imagesUrls";
import motoImage from "../assets/motorcicle.jpg"
import ValuesGroup from "../components/ValuesGroup";

const About = () => {
    return (
        <div className="about-view">
            <header className="header">
                <Nav />
            </header>
            <main>
                <section className="container-main-about">
                    <div className="box-image">
                        <img
                            className="img-motorcicle"
                            src={motoImage}
                            alt="image motorcicle"
                        />
                    </div>
                    <div className="container-text">
                        <h1 className="title-about">Conócenos</h1>
                        <div className="text-about">
                        <p >
                            Somos una empresa Peruana dedicada a la fabricación
                            y venta de empaquetaduras para motos.Tenemos
                            nuestros inicios en el año 2017, nace como un un
                            pequeño emprendimiento, el cual con mucho esfuerzo y
                            dedidación, se ha convertido en JS MOTOS import, el cual es nuestra pasión.
                            Atender a nuestros clientes con excelente servicio y productos fabricados con materiales
                            de alta calidad es nuestra misión.
                
                        </p>

                        </div>
                    
                    </div>
                    <div className="icons-info values">
                        <h1 className="title-values">NUESTROS VALORES</h1>
                        <ValuesGroup/>
                    </div>
                </section>
            </main>

            <footer className="footer-movil">
                <div className="black-rectangle-left"></div>
                <p className="footer-text">
                    Productos de materia prima 100% libre de asbestos y
                    solventes
                </p>
                <div className="black-rectangle-right"></div>
            </footer>
        </div>
    );
};

export default About;
