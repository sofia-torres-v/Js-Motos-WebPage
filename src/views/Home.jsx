import './Home.css'
import Nav from '../components/Nav'
//import { storage } from './firebase';
function Home() {

  return (
    <div className='home-view' id='outer-container'>
      <section className='container-nav-home' id='page-wrap'>
        <Nav />
      </section>

      <p className="read-the-docs">
        ¡Buenas, buenas! Equipo dinamita 🧨
      </p>
    </div>
  )
}

export default Home
