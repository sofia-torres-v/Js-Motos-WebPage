import "./About.css";
import Nav from "../components/Nav";
import { imagesDesktop } from "../firebaseConfig/imagesUrls";
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-view">
      <header className="header">
        <Nav />
      </header>
      <main>
        <section className="container-main-about">
          <div className="container-text">
            <p className="text-about">
              Somos una empresa Peruana dedicada a la fabricación
              y venta de empaquetaduras para motos.Tenemos
              nuestros inicios en el año 2017, nace como un un
              pequeño emprendimiento, el cual con mucho esfuerzo y
              dedidación, se ha convertido en JS MOTOS import.
            </p>
          </div>

          <div className="box-images-about">
            <div className="box-moto-about">
              <img
                className="img-moto"
                src={imagesDesktop.scooter}
                alt="image motobike"
              />
            </div>

            <div className="box-triangle">
              <img
                className="img-triangle"
                src={imagesDesktop.triangle}
                alt="image triangle"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
