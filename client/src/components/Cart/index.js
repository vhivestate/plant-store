import React from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';

const Cart = () => {
  return (
    <div className="cart">
      <div className="close">[close]</div>
      <h2>Shopping Cart</h2>
      <div>
          <CartItem item={{name:'Golden Pothos', image:'potho.jpg', price:24.99, purchaseQuantity:3}} />
          <CartItem item={{name:'Fiddle Fig', image:'fig.jpg', price:29.99, purchaseQuantity:4}} />

          <div className="flex-row space-between">
            <strong>Total: $0</strong>
            {
              Auth.loggedIn() ?
                <button>
                  Checkout
                </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
    </div>
  );
};

export default Cart;