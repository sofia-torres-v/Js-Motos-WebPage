import { images } from "../firebaseConfig/imagesUrls";
import "./SocialMediaIcons.css"

const SocialMediaIcons = () => {
    const openWhatsApp = () => {
        const phoneNumber = "+51910519759";
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };
    const openFacebook = () => {
        window.open(`https://www.facebook.com/jsmotosgasket?mibextid=9R9pXO`, "_blank"); 
    }
    return (
        <div>
            <img
                className="container-whatsapp-icon"
                src={images.whatsApp}
                alt="whatsapp-icon"
                onClick={openWhatsApp}
            />
            <i 
                className="bx bxl-messenger icon-messeger"
                onClick={openFacebook}
            >
            </i>
        </div>
    )
}

export default SocialMediaIcons;