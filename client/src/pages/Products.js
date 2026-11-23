import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { productAPI } from '../services/api';
import ProductCard from '../components/ProductCard';
import UnifiedLoginModal from '../components/UnifiedLoginModal';
import LoadingSpinner from '../components/LoadingSpinner';
import './Products.css';

const Products = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [sort, setSort] = useState('');

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loginAction, setLoginAction] = useState(null);

  const categories = [
    { value: '', label: 'All Products' },
    { value: 'keychain', label: 'Keychains' },
    { value: 'fridge-magnet', label: 'Fridge Magnets' },
    { value: 'hair-clip', label: 'Hair Clips' },
    { value: 'flower-pot', label: 'Flower Pots' },
    { value: 'bouquet', label: 'Bouquets' },
    { value: 'bookmark', label: 'Bookmark' },
  ];

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let response;

      if (selectedCategory) {
        response = await productAPI.getProductsByCategory(selectedCategory);
      } else {
        response = await productAPI.getAllProducts();
      }

      const data = response?.data?.data || [];
      setProducts(data);
    } catch (error) {
      console.error('Fetch error:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category) setSearchParams({ category });
    else setSearchParams({});
  };

  // 🔥 SAFE SORT (no breaking API)
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'priceLow') return a.price - b.price;
    if (sort === 'priceHigh') return b.price - a.price;
    return 0;
  });

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setLoginAction('addToCart');
    setLoginModalOpen(true);
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setLoginAction('buyNow');
    setLoginModalOpen(true);
  };

  return (
    <div className="products-page">

      <UnifiedLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      <div className="container">

        <div className="products-header">
          <h1>Our Products</h1>
          <p>Explore our handmade collection</p>
        </div>

        <div className="products-container">

          {/* FILTER */}
          <aside className="products-sidebar">
            <div className="filter-card">
              <h3>Filter</h3>
              <div className="filter-options">
                {categories.map((category) => (
                  <label key={category.value} className="filter-option">
                    <input
                      type="radio"
                      checked={selectedCategory === category.value}
                      onChange={() => handleCategoryChange(category.value)}
                    />
                    <span>{category.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN */}
          <main className="products-main">

            {/* TOP BAR */}
            <div className="products-topbar">
              <span>{products.length} Products</span>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="sort-select"
              >
                <option value="">Default</option>
                <option value="priceLow">Price: Low → High</option>
                <option value="priceHigh">Price: High → Low</option>
              </select>
            </div>

            {loading ? (
              <LoadingSpinner message="Loading..." />
            ) : sortedProducts.length > 0 ? (
              <div className="grid grid-3">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onBuyNow={handleBuyNow}
                  />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <h3>No Products Found</h3>
                <p>Try another category</p>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;