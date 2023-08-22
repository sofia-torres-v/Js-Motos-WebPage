import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'
import './Nav.css'
const Nav = () => {
  return (
    <>
      <div className='container-nav'>
        <Menu width={'80%'} isOpen={false}>
          <a id="home" className="menu-item" href="/">
            Inicio
          </a>
          <a id="about" className="menu-item" href="/about">
            Nosotros
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Productos
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contacto
          </a>
        </Menu>
        <figure className='container-logo'>
          <img className='logo-home'
            src="https://firebasestorage.googleapis.com/v0/b/jsmotos-e4995.appspot.com/o/webpage%2FlogoJsMotos.png?alt=media&token=83956378-6ff7-47cf-9866-d92cde38e2e2"
            alt='logoJsMotos' />
        </figure>
      </div>
    </>

  );
};
export default Nav

// customBurgerIcon={<img src="" alt="menu" />}