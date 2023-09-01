import './ContactList.css'
import { icons } from "../firebaseConfig/imagesUrls"
const ContactList = () => {
    return (
        <ul className="contact-list-home-movil">
    
            <li className='list-element'>
                <div className='container-icon'>
                    <img className="icon-list"src={icons.phone} alt="locarion Icon"/>
                </div> 051 999999999
            </li>

            <li className='list-element'>
                <div className='container-icon'>
                    <img className="icon-list"src={icons.email} alt="email Icon"/>
                </div> jsmotosGasket@gmail.com 
            </li>

            <li className='list-element'>
                <div className='container-icon'>
                    <img className="icon-list"src={icons.location} alt="location Icon"/>
                </div> Puente Piedra, Lima-Perú 
            </li>

            <li className='list-element'>
                <div className='container-icon'>
                    <img className="icon-list"src={icons.truck} alt="Mobile Icon"/>
                </div> Despacho a Lima y Provincias
            </li>
                 
        </ul>
    
    )
}
export default ContactList