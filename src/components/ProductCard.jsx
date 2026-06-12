function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
  <div className="emoji">{product.image}</div>

  <h3>{product.name}</h3>

  <p>{product.description}</p>

  <strong>{product.category}</strong>

  <h4>₹{product.price}</h4>

  <button onClick={() => onAddToCart(product)}>
    Add To Cart
  </button>
</div>
  );
}

export default ProductCard;