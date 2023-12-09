import "./Contact.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import SocialMediaIcons from "../components/SocialMediaIcons";

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

    return (
        <div className="contact-view" id="outer-container">
            <header className="header" id="page-wrap">
                <Nav />
            </header>

            <main>
                <section className="container-main-contact">
                    <div className="box-text-contact">
                        <h1 className="title-contact">Contáctanos</h1>
                        <div className="title-line-contact"></div>
                        <div className="box-subtitle">
                            <h3 className="subtitle-contact">
                                ¿Interesado en nuestros productos?
                            </h3>
                            <h5>
                                ¡Comunícate fácilmente a través de este
                                formulario!
                            </h5>
                        </div>
                    </div>

                    <div className="box-form-contact">
                        <form ref={refForm} onSubmit={handleSubmit(onSubmit)}>
                            <div className="box-input-label">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    required
                                    {...register("name")}
                                />
                            </div>
                            <div className="box-input-label">
                                <label>Correo electrónico</label>
                                <input
                                    type="email"
                                    placeholder="Tu@email.com"
                                    required
                                    {...register("email")}
                                />
                            </div>
                            <div className="box-input-label">
                                <label>Mensaje</label>
                                <textarea
                                    placeholder="Escribe tu mensaje aqui ..."
                                    required
                                    {...register("message")}
                                />
                            </div>
                            {errors.email && (
                                <span>This field is required</span>
                            )}
                            <button className="btn" type="submit">
                                Enviar
                            </button>
                        </form>
                    </div>
                    <SocialMediaIcons />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
