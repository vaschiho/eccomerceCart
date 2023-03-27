import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart_slice'


const ProductItem = (props) => {
    const dispatch = useDispatch()
    const item = useSelector(state => state.cart.item)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    console.log(item)
    console.log(totalQuantity);

    const cartItem = item.find(item => item.id === props.id);
    
    const quantity = cartItem ? cartItem.quantity : 0;
    





    const { id, price, name, header, description, image, amountInStock } = props

    const addcart = () => {
        dispatch(cartActions.addItemToCart({
            id,
            price,
            header,
            image,
        }))
    }

    const handleAddToCart = () => {
        dispatch(cartActions.addQuantityToCart({
            id,
            price,
            header,
            image,
        }))
    }

    const handleRemovFromCart = () => {
        dispatch(cartActions.removeItemFromCart(id))
    }



    return (
        <div className=' px-5 sm:px-0 ' >
            <div >
                <span className='text-sm text-[#ff7d1a]   uppercase font-semibold'>{name}</span>
                <h1 className='font-extrabold text-3xl py-3'>{header}</h1>
                <p className='text-xs text-[#68707d] py-4'>{description}</p>
            </div>
            <div className=' flex flex-row sm:flex-col  justify-between items-center sm:items-start'>
                <div className='flex items-center gap-3'>
                    <span className='text-xl font-semibold'>${price}</span> <span className='text-xs p-1 text-[#ff7d1a] font-semibold bg-[#ffede0] rounded-sm'>50%</span>
                </div> 
                <span className='text-xs font-semibold line-through text-[#b6bcc8] py-1'>$250.00</span>
            </div>
            <div className='flex justify-between items-center flex-col sm:flex-row py-4 '>
                <div className='flex gap-6 bg-[#f7f8fd] w-full justify-between shadow-md rounded-md items-center px-1 py-3 my-4 sm:mr-3 flex-grow-2'>
                    <button className='text-[#ff7d1a] text-xl font-black' onClick={handleRemovFromCart} disabled={quantity <= 0}><AiOutlineMinus /></button>
                    <button>{quantity}</button>
                    <button className='text-[#ff7d1a] text-xl font-extrabold' onClick={handleAddToCart} disabled={quantity === amountInStock}><AiOutlinePlus /></button>

                </div>
                <button className='flex bg-[#ff7d1a] hover:bg-[#f99344] shadow-lg items-center w-full justify-center gap-2 p-1 py-3 rounded-md  transition-all '>
                    <span><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero" /></svg></span>
                    <span className='text-white font-semibold ' onClick={addcart} disabled={totalQuantity === 1}>Add to cart</span>
                </button>
            </div>

        </div>
    )
}

export default ProductItem