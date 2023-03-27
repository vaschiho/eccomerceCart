import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart_slice'
const CartItem = () => {


  const dispatch = useDispatch()
  const cartItem = useSelector(state => state.cart.item);


  const delatItem = (id) => {
    dispatch(cartActions.deleteItemFromCart(id))
  }

  // style={{ position: "absolute", top: 60,  right: 0, margin: "auto", ...(window.innerWidth > 640 ? { right: 60 } : {}) }}
  return (
    <div className="item rounded-lg" >



      <div className="flex flex-col w-full rounded-xl  bg-white p-3 shadow-lg round divide-x h-[200px] z-20">
        <div className="grid grid-cols-1 divide-y">
          <header className="my-3">
            <h3 className="text-sm font-semibold">Cart</h3>
          </header>

          {cartItem.length > 0 ? (
            <ul>
              {cartItem.map((item) => (

              
                <li key={item.id} className="flex items-center justify-between gap-2 py-4 ">
                  <img src={item.image} className="w-10 h-10 rounded-md" alt="" />
                  <div>
                    <h3 className="text-xs text-[#68707d] ">{item.title}</h3>
                    <div className="">
                      <span className="text-xs text-[#68707d]">${item.price.toFixed(2)} x</span>
                      <span className="text-xs text-[#68707d]"> {item.quantity}</span>
                      <span className="text-xs text-[#000] font-semibold"> ${item.totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <button onClick={() => delatItem(item.id)} className="text-base text-[#68707d] font-semibold hover:text-[#000]">
                    <RiDeleteBin6Line />
                  </button>
                </li>
              ))}
              <div className="text-center bg-[#ff7d1a] my-4 rounded-lg  cursor-pointer">
                <button className="text-white py-2">Checkout</button>
              </div>
            </ul>
          ) : (
            <div className="  ">
              <h1 className="my-4 justify-center text-center">Cart is empty</h1>
            </div>
          )}
        </div>
      </div>
    </div>


  )

}

export default CartItem