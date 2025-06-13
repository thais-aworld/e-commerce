import React from 'react';
import './MyOrdersPage.css';

const mockOrders = [
  {
    id: '123456',
    date: '10/06/2025',
    status: 'Entregue',
    total: 280.00,
    items: [
      { name: 'Tênis K-Swiss', quantity: 1, price: 280.00, image: '/images/K-Swiss V8 - Masculino.png' }
    ]
  },
];

const MyOrdersPage = () => {
  return (
    <div className="my-orders-page">
      <h1>Meus Pedidos</h1>
      {mockOrders.map(order => (
        <div key={order.id} className="order-card">
          <div className="order-header">
            <strong>Pedido #{order.id}</strong>
            <span>{order.date}</span>
            <span className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>{order.status}</span>
          </div>
          <div className="order-items">
            {order.items.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Qtd: {item.quantity}</p>
                  <p>Preço: R$ {item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-total">
            Total: <strong>R$ {order.total.toFixed(2)}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrdersPage;
