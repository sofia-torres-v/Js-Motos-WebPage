import "./Products.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CardProducts from "../components/CardProducts";
import productData from "../components/ProductsData";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Products = () => {
    // Filtrar los productos por tipo: 'unit' o 'kit'
    const unitProducts = productData.filter(
        (product) => product.type === "unit"
    );
    const kitProducts = productData.filter((product) => product.type === "kit");
    return (
        <div className="products-view">
            <header className="header">
                <Nav />
            </header>
            <main>
                <section className="container-products">
                    <h1 className="title-products">Empaquetaduras</h1>
                    <h2 className="subtitle-products">Presentación Unidad</h2>

                    <div className="container-products-by-type">
                        {unitProducts.map((product) => (
                            <CardProducts key={product.id} product={product} />
                        ))}
                    </div>
                    <h2 className="subtitle-products">
                        Presentación Kit Completo
                    </h2>
                    <div className="container-products-by-type">
                        {kitProducts.map((product) => (
                            <CardProducts key={product.id} product={product} />
                        ))}
                    </div>
                </section>
                <SocialMediaIcons />
            </main>
            <Footer />
        </div>
    );
};

export default Products;
