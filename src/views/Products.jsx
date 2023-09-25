import './Products.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import CardProducts from '../components/CardProducts';
import productData from '../components/ProductsData';
const Products = () => {
  return (
    <div className='products-view'>
      <header className="header">
        <Nav />
      </header>
      <main>
        <div className='container-products'>
          {productData.map((product) => (
            <CardProducts key={product.id} product={product} />
          ))}
        </div>
      </main>
        <Footer />
    </div>
  );
};

export default Products;