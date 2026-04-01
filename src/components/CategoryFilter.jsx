import React from 'react';
import './CategoryFilter.css';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'smartphones', label: 'Smartphones' },
  { value: 'laptops', label: 'Laptops' },
  { value: 'fragrances', label: 'Fragrances' },
  { value: 'skincare', label: 'Skincare' },
  { value: 'groceries', label: 'Groceries' },
  { value: 'home-decoration', label: 'Home Decor' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'tops', label: 'Tops' },
  { value: 'womens-dresses', label: "Women's Dresses" },
  { value: 'mens-shirts', label: "Men's Shirts" },
  { value: 'mens-shoes', label: "Men's Shoes" },
  { value: 'womens-shoes', label: "Women's Shoes" },
];

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="cat-filter">
      {categories.map(cat => (
        <button
          key={cat.value}
          className={`cat-filter__btn ${category === cat.value ? 'cat-filter__btn--active' : ''}`}
          onClick={() => setCategory(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;