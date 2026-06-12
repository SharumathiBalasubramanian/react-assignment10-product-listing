import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { productData } from "./data/products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  // Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from Cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Reset Filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortOrder("default");
  };

  // Search
  let filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Category Filter
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  // Sorting
  if (sortOrder === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOrder === "nameAZ") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortOrder === "nameZA") {
    filteredProducts.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  return (
    <>
      <Navbar cartCount={cart.length} />

      <div className="container">

        {/* Search + Filter + Sort + Reset */}
        <div className="controls">

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <FilterSort
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          <button
            className="reset-btn"
            onClick={resetFilters}
          >
            Reset
          </button>

        </div>

        {/* Product List */}
        <ProductList
          products={filteredProducts}
          onAddToCart={addToCart}
        />

        {/* Cart */}
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
        />

      </div>
    </>
  );
}

export default App;