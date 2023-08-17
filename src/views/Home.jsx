import './Home.css'
import logo from '../assets/img/logo.png'
import Nav from '../components/Nav'
function Home() {

  return (
    <div className='home-view'>
      <section className='container-nav-home'>
        <Nav />
      </section>

      <figure className='container-logo'>
        <img src={logo} className='logo-home' alt='JS Motos logo' />
      </figure>

      <p className="read-the-docs">
        Hola Andre!!!
      </p>
    </div>
  )
}

export default Home
