import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const location = useLocation();
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className={isMobile ? 'container-mobile' : 'container-desktop'}>
        
      <figure className='container-logo'>
          <img className='logo'
            src='https://firebasestorage.googleapis.com/v0/b/jsmotos-e4995.appspot.com/o/webpage%2FlogoJsMotos.png?alt=media&token=83956378-6ff7-47cf-9866-d92cde38e2e2'
            alt='logoJsMotos' />
        </figure>
        
        {isMobile ? (<Menu width={'70%'} isOpen={false}>
          <Link to='/' className={`link ${isLinkActive('/') ? 'active-link' : ''}`}>Inicio</Link>
          <Link to='/about' className={`link ${isLinkActive('/about') ? 'active-link' : ''}`}>Nosotros</Link>
          <Link to='/products' className={`link ${isLinkActive('/products') ? 'active-link' : ''}`}>Productos</Link>
          <Link to='/contact' className={`link ${isLinkActive('/contact') ? 'active-link' : ''}`}>Contacto</Link>
        </Menu>
        ) : (
          <div className='desktop-menu'>
            <Link to='/' className={`link ${isLinkActive('/') ? 'active-link' : ''}`}>Inicio</Link>
            <Link to='/about' className={`link ${isLinkActive('/about') ? 'active-link' : ''}`}>Nosotros</Link>
            <Link to='/products' className={`link ${isLinkActive('/products') ? 'active-link' : ''}`}>Productos</Link>
            <Link to='/contact' className={`link ${isLinkActive('/contact') ? 'active-link' : ''}`}>Contacto</Link>

          </div>
        )}

      </div>
    </>

  );
};
export default Nav

// customBurgerIcon={<img src='' alt='menu' />}