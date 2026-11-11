
function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p className="price">{product.price} DH</p>

      <button onClick={() => alert("Produit acheté !")}>
        Acheter
      </button>

    </div>
  );
}

export default ProductCard;
