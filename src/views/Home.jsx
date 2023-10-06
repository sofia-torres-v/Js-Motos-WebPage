import './Home.css';
import Nav from "../components/Nav";
import ContactList from "../components/ContactList";
import Elipse from "../assets/elipse.png";
import { images } from "../firebaseConfig/imagesUrls";
import Footer from "../components/Footer";

const Home = () => {
  const OpenWhatsApp = () => {
    console.log("Hola");
    const phoneNumber = "+51988987001";
    // window.location.href = `https://wa.me/${phoneNumber}`;
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="home-view" id="outer-container">
      <header className="header" id="page-wrap">
        <Nav />
      </header>

      <main>
        <section className="container-main-home">
          <h1 className="home-title">
            ¡Todos los accesorios para tu moto!
          </h1>

          <div className="container-images-home-mobile">
            <div className="box-general">
              <div className="box-moto">
                <img
                  className="img-moto"
                  src={images.motobike}
                  alt="image motobike"
                />
              </div>
              <div className="box-gasket">
                <img
                  className="img-gasket"
                  src={images.gasket}
                  alt="image motobike"
                />
              </div>
            </div>

            <div className="container-HalfElipse-movil">
              <img
                className="container-whatsapp-icon"
                src={images.whatsApp}
                alt="whatsapp-icon"
                onClick={OpenWhatsApp}
              />

              <img
                className="img-half-elipse"
                src={Elipse}
                alt=""
              />

              <div className="container-contact-list">
                <ContactList />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
