import './Home.css'
import Nav from '../components/Nav'
import HalfElipse from '../components/HalfElipse';
import ContactList from '../components/ContactList';

function Home() {


  return (
    <div className='home-view' id='outer-container'>
      <header className='container-nav-home' id='page-wrap'>
         <Nav />
      </header>
      <main className='container-main-home'>
        <section className='container-span-mobile'>
          <span className='home-title'>
            ¡TODOS los accesorios para tu moto!
          </span>
        </section>
        <section className='container-images-home-mobile'>
          {/* <figure className='container-img-motobike'> */}
          {/* <img src={logo} className='logo-home' alt='JS Motos logo' /> */}
          <img className='img-motobike'
            src='https://firebasestorage.googleapis.com/v0/b/jsmotos-e4995.appspot.com/o/webpage%2FhomeMotobikeMovil.png?alt=media&token=2e3dc1e3-b859-49ff-a639-ce126561b2ab'
            alt='image motobike' />
          <img className='img-gasket-home-movil'
            src='https://firebasestorage.googleapis.com/v0/b/jsmotos-e4995.appspot.com/o/webpage%2Fgasket-home-movil.png?alt=media&token=9dd320e8-6639-4c72-b5a6-43cfb8db9ab1'
            alt='image motobike' />
        </section>
        <section className='elipse-contact-information-home'>
          <figure className='container-HalfElipse-movil'>
            <HalfElipse/>
          </figure>
         <div className='container-contact-list'>
          <ContactList></ContactList>
         </div>
        </section>

      </main>
      <footer className='footer-movil'>
        <div className='black-rectangle-left'></div>
        <span className='footer-text'>PRODUCTOS De materia prima 100% libre de asbesto y solventes</span>
        <div className='black-rectangle-right'></div>
      </footer>
    </div>
  )
}

export default Home

{/* <div className='container-contact-list'>
              <ContactList />
              <figure className='container-whatsapp-icon'>
                <img src="https://firebasestorage.googleapis.com/v0/b/jsmotos-e4995.appspot.com/o/webpage%2FWhatsapp-icon-mobile.png?alt=media&token=79a5e521-f26b-4b6f-b64f-f3ff6943be24"
                  alt="whatsapp-icon" />
              </figure>
            </div> */}