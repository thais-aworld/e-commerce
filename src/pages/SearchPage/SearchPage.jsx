import React, { useState, useEffect, useRef } from 'react';
import ProductListing from '../../components/ProductListing/ProductListing';
import { useSearchParams, Link } from 'react-router-dom';
import notFoundGif from '/images/404.gif';
import SearchSuggestions from '../../components/SearchSuggestions/SearchSuggestions';
import './SearchPage.css';

const mockProducts = [
  {
     id: '1', 
     name: 'Tênis K-Swiss', 
     image: '/K-Swiss V8 - Masculino.png',
     price: 400, brand: 'K-Swiss', 
     category: 'Tênis', 
     brand: 'K-Swiss',
    category: 'Tênis',
    },
];

const normalizeText = (text) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('filter') || '';
  const [inputValue, setInputValue] = useState(query);
  const [filtered, setFiltered] = useState(mockProducts);
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const suggestionsRef = useRef();
  
  useEffect(() => {
    const q = normalizeText(query.trim());
    if (q.length >= 1) {
      const results = mockProducts.filter(p =>
        normalizeText(p.name).includes(q)
      );
      setFiltered(results);
      setSuggestions(results.slice(0,5));
    } else {
      setFiltered(mockProducts);
      setSuggestions([]);
    }
  }, [query]);

  const handleChange = (e) => {
    const v = e.target.value;
    setInputValue(v);
    if (v.trim().length >= 1) {
      const q = normalizeText(v);
      const match = mockProducts.filter(p => normalizeText(p.name).includes(q));
      setSuggestions(match.slice(0,5));
      setActiveIndex(0);
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (name) => {
    setInputValue(name);
    setSearchParams({ filter: name });
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') {
      setActiveIndex(ai => (ai + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      setActiveIndex(ai => (ai - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      selectSuggestion(suggestions[activeIndex].name);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    selectSuggestion(inputValue.trim());
  };

  return (
    <div className="search-page">
      <form className="search-bar" onSubmit={handleSearch} style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <button type="submit">🔍</button>
        <SearchSuggestions
          suggestions={suggestions}
          activeIndex={activeIndex}
          onClick={selectSuggestion}
          onMouseOver={setActiveIndex}
        />
      </form>

      {filtered.length > 0 ? (
        <>
          <div className="results-info">
            Resultados para "{query}": {filtered.length}
          </div>
          <ProductListing products={filtered} />
        </>
      ) : (
        <div className="empty-state">
          <img src={notFoundGif} alt="Nenhum produto encontrado" className="empty-gif" />
          <h2>Nenhum produto encontrado</h2>
          <p>Tente outra busca ou <Link to="/">volte à página inicial</Link>.</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
