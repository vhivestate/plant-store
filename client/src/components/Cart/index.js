import React from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';

// import the global store and the toggle action
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART } from '../../utils/actions';

const Cart = () => {
    const [state, dispatch] = useStoreContext();

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
      }

      if (!state.cartOpen) {
        return (
          <div className="cart-closed" onClick={toggleCart}>
            <span
              role="img"
              aria-label="trash">🛒</span>
          </div>
        );
      }

  return (
    <div className="cart">
    <div className="close" onClick={toggleCart}>[close]</div>
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