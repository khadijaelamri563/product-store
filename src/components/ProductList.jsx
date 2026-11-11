
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <section id="products" className="product-list">

      <h2>Nos Produits</h2>

      <div className="products-container">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductList;
