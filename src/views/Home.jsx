import "./Home.css";
import Nav from "../components/Nav";
import ContactList from "../components/ContactList";
import  Elipse from '../assets/elipse.png'
import { images } from "../firebaseConfig/imagesUrls";

const Home = () => {
    const OpenWhatsApp = () => {
        console.log('Hola')
        const phoneNumber = '988987001';
        // window.location.href = `https://wa.me/${phoneNumber}`;
        window.open(`https://wa.me/${phoneNumber}`,'_blank')
      }
  
    return (
        <div className="home-view" id="outer-container">
            <header className="header" id="page-wrap">
                <Nav />
            </header>

            <main>
                <section className="container-main-home">
                    <h1 className="home-title">¡TODOS los accesorios para tu moto!</h1>

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

                            <img className="img-half-elipse" src={Elipse} alt="" />
                            
                            <div className="container-contact-list">
                                <ContactList></ContactList>
                            </div>

                            
                            <img className='container-whatsapp-icon' src={images.whatsApp} 
                            alt="whatsapp-icon" onClick={OpenWhatsApp} />
                            

                        </div>

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

export default Home;
