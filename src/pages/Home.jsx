import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Home.css';

function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=4')
      .then((res) => res.json())
      .then((data) => setFeatured(data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">New Collection 2025</p>
          <h1 className="hero__title">
            Discover <br />
            <span className="hero__title--accent">Premium</span> Products
          </h1>
          <p className="hero__sub">
            Curated selection of the finest electronics, fashion & jewellery —
            delivered to your door.
          </p>
          <div className="hero__actions">
            <Link to="/products" className="btn btn--primary">Shop Now</Link>
            <Link to="/products" className="btn btn--ghost">View All →</Link>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__shape-outer">
            <div className="hero__shape-inner" />
          </div>
        </div>
      </section>

      <section className="stats">
        {[
          { num: '10K+', label: 'Products' },
          { num: '50K+', label: 'Happy Customers' },
          { num: '4.9★', label: 'Average Rating' },
          { num: 'Free', label: 'Returns' },
        ].map((stat) => (
          <div key={stat.label} className="stats__item">
            <span className="stats__num">{stat.num}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="featured">
        <div className="section-header">
          <p className="section-eyebrow">Hand-picked for you</p>
          <h2 className="section-title">Featured Products</h2>
          <Link to="/products" className="section-link">View all →</Link>
        </div>
        <div className="featured__grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="categories">
        <div className="section-header">
          <p className="section-eyebrow">Browse by</p>
          <h2 className="section-title">Categories</h2>
        </div>
        <div className="categories__grid">
          {/* Map original categories to DummyJSON slugs */}
          {[
            { name: 'Electronics', icon: '⚡', slug: 'smartphones' },
            { name: "Men's Fashion", icon: '👔', slug: 'mens-shirts' },
            { name: "Women's Fashion", icon: '👗', slug: 'womens-dresses' },
            { name: 'Jewellery', icon: '💎', slug: 'womens-jewellery' },  // DummyJSON uses 'womens-jewellery'? Actually it has 'womens-jewellery' – check API
          ].map((cat) => (
            <Link
              key={cat.slug}
              to={`/products?category=${encodeURIComponent(cat.slug)}`}
              className="cat-card"
            >
              <span className="cat-card__icon">{cat.icon}</span>
              <span className="cat-card__name">{cat.name}</span>
              <span className="cat-card__arrow">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;