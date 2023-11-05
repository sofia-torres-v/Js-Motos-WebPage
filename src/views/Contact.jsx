import "./Contact.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import ContactList from "../components/ContactList";
// import Elipse from "../assets/elipse.png";
import { images } from "../firebaseConfig/imagesUrls";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const refForm = useRef();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = () => {
        if (refForm.current) {
            const serviceId = "service_vkjz25v";
            const templateId = "template_ady7jad";
            const apiKey = "w7Qn_NEvz_YwJ8FDt";

            emailjs
                .sendForm(serviceId, templateId, refForm.current, apiKey)
                .then((result) => {
                    console.log(result.text);
                    reset();
                })
                .catch((error) => console.error(error));
        }
    };

    const OpenWhatsApp = () => {
        console.log("Hola");
        const phoneNumber = "+51988987001";
        // window.location.href = `https://wa.me/${phoneNumber}`;
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };

    return (
        <div className="contact-view" id="outer-container">
            <header className="header" id="page-wrap">
                <Nav />
            </header>

            <main>
                <section className="container-main-contact">
                    <form ref={refForm} onSubmit={handleSubmit(onSubmit)}>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            required
                            {...register("name")}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            required
                            {...register("email")}
                        />
                        <label>Message</label>
                        <textarea
                            placeholder="Tu mensaje"
                            required
                            {...register("message")}
                        />
                        {errors.email && <span>This field is required</span>}
                        <button className="btn fill" type="submit">
                            Submit
                        </button>
                    </form>

                    <img
                        className="container-whatsapp-icon"
                        src={images.whatsApp}
                        alt="whatsapp-icon"
                        onClick={OpenWhatsApp}
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
