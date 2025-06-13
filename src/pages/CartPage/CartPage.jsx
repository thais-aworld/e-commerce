import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Tênis K-Swiss', price: 280, quantity: 1, image: '/images/K-Swiss V8 - Masculino.png' },
  ]);

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Meu Carrinho</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Seu carrinho está vazio.</p>
          <Link to="/">Voltar para a loja</Link>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(({ id, name, price, quantity, image }) => (
                <tr key={id}>
                  <td className="product-info">
                    <img src={image} alt={name} />
                    <span>{name}</span>
                  </td>
                  <td>R$ {price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => updateQuantity(id, Number(e.target.value))}
                    />
                  </td>
                  <td>R$ {(price * quantity).toFixed(2)}</td>
                  <td>
                    <button className="remove-btn" onClick={() => removeItem(id)}>
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-total">
            <h2>Total: R$ {total.toFixed(2)}</h2>
            <button className="checkout-btn" onClick={() => alert('Finalizar compra')}>
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
