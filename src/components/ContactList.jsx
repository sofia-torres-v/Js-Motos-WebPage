import "./ContactList.css";
import { icons } from "../firebaseConfig/imagesUrls";
const ContactList = () => {
    return (
        <ul className="contact-list-home-movil">
            <li className="list-element">
                <img
                    className="icon-list"src={icons.phone}alt="location Icon"
                />
                051 999999999
            </li>

            <li className="list-element">
                <img className="icon-list" src={icons.email} alt="email Icon" />
                jsmotosGasket@gmail.com
            </li>

            <li className="list-element">
                    <img
                        className="icon-list-map"src={icons.location}alt="location Icon"
                    />
                Puente Piedra, Lima-Perú
            </li>

            <li className="list-element">
                <img
                    className="icon-list"src={icons.truck}alt="Mobile Icon"
                />
                Despacho a Lima provincia
            </li>
        </ul>
    );
};
export default ContactList;
