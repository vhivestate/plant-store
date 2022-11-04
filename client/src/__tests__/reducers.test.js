// import our actions
import { reducer } from '../utils/reducers';

import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
  } from '../utils/actions';
  
  // create a sample of what our global state will look like
  const initialState = {
    products: [],
    categories: [{ name: 'Ferns' }],
    currentCategory: '1',
    cart: [
      {
        _id: '1',
        name: 'Bosten Fern',
        purchaseQuantity: 1
      },
      {
        _id: '2',
        name: 'Fern',
        purchaseQuantity: 2
      }
    ],
    cartOpen: false
  };

  test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
      type: UPDATE_PRODUCTS,
      products: [{}, {}]
    });
  
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
  });

  test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CATEGORIES,
      categories: [{}, {}]
    });
  
    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
  });

  test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: '2'
    });
  
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
  });
  
  test('ADD_TO_CART', () => {
    let newState = reducer(initialState, {
      type: ADD_TO_CART,
      product: { purchaseQuantity: 1 }
    });
  
    expect(newState.cart.length).toBe(3);
    expect(initialState.cart.length).toBe(2);
  });