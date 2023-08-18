import './Home.css'
import Nav from '../components/Nav'
//import { storage } from './firebase';
function Home() {

  return (
    <div className='home-view'>
      <section className='container-nav-home'>
        <Nav />
      </section>

      <figure className='container-logo'>
        {/* <img src={logo} className='logo-home' alt='JS Motos logo' /> */}
        <img className='logo-home' src=
        "https://firebasestorage.googleapis.com/v0/b/jsmotos-e4995.appspot.com/o/webpage%2FlogoJsMotos.png?alt=media&token=83956378-6ff7-47cf-9866-d92cde38e2e2"
         alt='logoJsMotos' />

      </figure>

      <p className="read-the-docs">
        Hola Andre!!!
      </p>
    </div>
  )
}

export default Home
