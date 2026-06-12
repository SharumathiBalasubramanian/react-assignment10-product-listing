function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1> Product Store</h1>
      <h3>🛒 Cart ({cartCount})</h3>
    </nav>
  );
}

export default Navbar;