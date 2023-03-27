import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import Cart from './component/Cart/Cart'
import CartItem from './component/Cart/CartItem'
import Header from './component/Layout/Header'
import Product from './component/Shop/Product'
import { cartActions } from './store/cart_slice'

function App() {

  const cart = useSelector((state) => state.cart)
  const cartToggle =useSelector((state) => state.toggle.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("cart") || "{}");
    if (list && list.item && list.totalQuantity) {
      dispatch(cartActions.replaceCart({
        item: list.item,
        totalQuantity: list.totalQuantity,
      }));

    }
  }, [dispatch]);



  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);




  return (
    <div className="md:max-w-4xl relative w-full mx-auto ">
      <Header />
    { cartToggle && <CartItem />}
      <Product />
     
    </div>
  )
}

export default App
