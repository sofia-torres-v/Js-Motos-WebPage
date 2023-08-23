import './Home.css'
import Nav from '../components/Nav'
import HalfElipse from '../components/HalfElipse';
import ContactList from '../components/ContactList';
import { images } from '../firebaseConfig/imagesUrls';

const Home = () => {
  const OpenWhatsApp = () => {
    console.log('Hola')
    const phoneNumber = '988987001';
    // window.location.href = `https://wa.me/${phoneNumber}`;
    window.open(`https://wa.me/${phoneNumber}`,'_blank')
  }

  return (
    <div className='home-view' id='outer-container'>
      <header className='container-nav-home' id='page-wrap'>
         <Nav />
      </header>
      <main className='container-main-home'>
        <section className='container-span-mobile' >
          <span className='home-title'>
            ¡TODOS los accesorios para tu moto!
          </span>
        </section>
        <section className='container-images-home-mobile'>
          <img className='img-motobike'
            src={images.motobike}
            alt='image motobike' />
          <img className='img-gasket-home-movil'src={images.gasket}
            alt='image motobike' />
        </section>
        <section className='elipse-contact-information-home'>
          <figure className='container-HalfElipse-movil'>
            <HalfElipse/>
          </figure>
         <div className='container-contact-list'>
          <ContactList></ContactList>
         </div>
         <figure className='container-whatsapp-icon'onClick={OpenWhatsApp} >
                <img className='whatsapp-logo-home' src={images.whatsApp}
                  alt="whatsapp-icon" />
              </figure>
        </section>

      </main>
      <footer className='footer-movil'>
        <div className='black-rectangle-left'></div>
        <span className='footer-text'>PRODUCTOS De materia prima 100% libre de asbestos y solventes</span>
        <div className='black-rectangle-right'></div>
      </footer>
    </div>
  )
}

export default Home