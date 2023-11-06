import './Products.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import CardProducts from '../components/CardProducts';
import productData from '../components/ProductsData';
const Products = () => {
  // Filtrar los productos por tipo: 'unit' o 'kit'
  const unitProducts = productData.filter((product) => product.type === 'unit');
  const kitProducts = productData.filter((product) => product.type === 'kit');
  return (
    <div className='products-view'>
      <header className="header">
        <Nav />
      </header>
      <main>
        <div className='container-products'>
        <h1>Empaquetaduras por unidad</h1>
          <div className='container-products-by-type'>
            {unitProducts.map((product) => (
              <CardProducts key={product.id} product={product} />
            ))}
          </div>
          <h1>Empaquetaduras por kit</h1>
          <div className='container-products-by-type'>
            {kitProducts.map((product) => (
              <CardProducts key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;