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
            src='https://firebasestorage.googleapis.com/v0/b/jsmotos-e4995.appspot.com/o/webpage%2FyellowMotobike.png?alt=media&token=8e681834-36e5-470c-b74c-562906b97f33'
            alt='image motobike' />
        </figure>
      </main>
    </div>
  )
}

export default Home
