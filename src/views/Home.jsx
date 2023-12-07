import "./Home.css";
import Nav from "../components/Nav";
import Slider from "../components/slider";
import IconGroup from "../components/IconGroup";
import Footer from "../components/Footer";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Home = () => {

    return (
        <div className="home-view" id="outer-container">
            <header className="header" id="page-wrap">
                <Nav />
            </header>

            <main>
                <section className="container-main-home">
                    <Slider />

                    <div className="main-text">
                        <h1>INNOVAMOS</h1>
                        <p className="">
                            JSMOTOS IMPORT fabricamos empaquetaduras con láminas
                            de alto rendimiento asegurando la resistencia en el
                            sellado. Productos de materia prima 100% libre de
                            asbestos y solventes Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Corporis, repudiandae.
                        </p>
                    </div>

                    <div className="icons-info">
                        <IconGroup />
                    </div>

                    <SocialMediaIcons />

                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
