import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [activeFilters, setActiveFilters] = useState({});

  const allProducts = [
    {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },

      {
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      originalPrice: 400,
      currentPrice: 280,
      discount: 30,
      imageUrl: '/images/K-Swiss V8 - Masculino.png',
    },
  ];

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  const applyFiltersAndSort = useCallback((prods, currentSortOrder, filters) => {
    let newFiltered = [...prods];
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search');
    const categoryQuery = queryParams.get('category');
    const brandQuery = queryParams.get('brand');

    if (searchQuery) {
      const lowerCaseSearch = searchQuery.toLowerCase();
      newFiltered = newFiltered.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearch) ||
        product.brand.toLowerCase().includes(lowerCaseSearch) ||
        product.category?.toLowerCase().includes(lowerCaseSearch)
      );
    }
    if (categoryQuery) {
      const lowerCaseCategory = categoryQuery.toLowerCase();
      newFiltered = newFiltered.filter(product =>
        product.category?.toLowerCase() === lowerCaseCategory
      );
    }
    if (brandQuery) {
      const lowerCaseBrand = brandQuery.toLowerCase();
      newFiltered = newFiltered.filter(product =>
        product.brand.toLowerCase() === lowerCaseBrand
      );
    }

    Object.keys(filters).forEach(filterGroup => {
      const selectedValues = filters[filterGroup];
      if (selectedValues && selectedValues.length > 0) {
        newFiltered = newFiltered.filter(product => {
          if (filterGroup.toLowerCase() === 'marca') {
            return selectedValues.map(val => val.toLowerCase()).includes(product.brand.toLowerCase());
          }
          if (filterGroup.toLowerCase() === 'categoria') {
            return selectedValues.map(val => val.toLowerCase()).includes(product.category?.toLowerCase());
          }
          return true;
        });
      }
    });

    if (currentSortOrder === 'menor-preco') {
      newFiltered.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (currentSortOrder === 'maior-preco') {
      newFiltered.sort((a, b) => b.currentPrice - a.currentPrice);
    }

    return newFiltered;
  }, [location.search]);

  useEffect(() => {
    const updatedFilteredProducts = applyFiltersAndSort(products, sortOrder, activeFilters);
    setFilteredProducts(updatedFilteredProducts);
  }, [products, sortOrder, activeFilters, location.search, applyFiltersAndSort]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleFilterChange = (groupTitle, value) => {
    setActiveFilters(prevFilters => {
      const currentValues = prevFilters[groupTitle] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];

      return {
        ...prevFilters,
        [groupTitle]: newValues,
      };
    });
  };

  return (
    <div className="product-listing-page-container content-wrapper">
      <aside className="sidebar">
        <div className="sort-by-section">
          <label htmlFor="sort-order" className="sort-label">Ordenar por</label>
          <select id="sort-order" className="sort-select" onChange={handleSortChange} value={sortOrder}>
            <option value="">Selecione</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
          </select>
        </div>

        <div className="filter-section">
          <h3 className="filter-title">Filtrar por</h3>
          <hr className="filter-divider" />
          <FilterGroup
            title="Marca"
            inputType="checkbox"
            options={[
              { text: "Nike", value: "Nike" },
              { text: "Adidas", value: "Adidas" },
              { text: "Puma", value: "Puma" },
              { text: "K-Swiss", value: "K-Swiss" },
            ]}
            activeFilters={activeFilters.Marca || []}
            onFilterChange={handleFilterChange}
          />
          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={[
              { text: "Tênis", value: "Tênis" },
              { text: "Roupas", value: "Roupas" },
              { text: "Acessórios", value: "Acessórios" },
            ]}
            activeFilters={activeFilters.Categoria || []}
            onFilterChange={handleFilterChange}
          />
        </div>
      </aside>

      <main className="product-list-content">
        <Section title={`${filteredProducts.length} produtos encontrados`} titleAlign="left">
          <ProductListing products={filteredProducts} />
        </Section>
      </main>
    </div>
  );
};

export default ProductListingPage;
