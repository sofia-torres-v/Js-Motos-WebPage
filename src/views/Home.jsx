import './Home.css'
import Nav from '../components/Nav'
//import { storage } from './firebase';
function Home() {

  return (
    <div className='home-view' id='outer-container'>
      <section className='container-nav-home' id='page-wrap'>
        <Nav />
      </section>
      <main className='container-main-home'>
        <span className='home-title'>
          ¡TODOS los accesorios para tu moto!
        </span>
        <figure className='container-img-motobike'>
          {/* <img src={logo} className='logo-home' alt='JS Motos logo' /> */}
          <img className='img-motobike'
            src='https://firebasestorage.googleapis.com/v0/b/jsmotos-e4995.appspot.com/o/webpage%2FhomeMotobikeMovil.png?alt=media&token=2e3dc1e3-b859-49ff-a639-ce126561b2ab'
            alt='image motobike' />
             <img className='img-gasket-home-movil'
            src='https://firebasestorage.googleapis.com/v0/b/jsmotos-e4995.appspot.com/o/webpage%2Fgasket-home-movil.png?alt=media&token=9dd320e8-6639-4c72-b5a6-43cfb8db9ab1'
            alt='image motobike' />
        </figure>
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
