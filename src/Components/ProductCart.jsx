import React from 'react'
import { Link } from 'react-router-dom';
import cartIcon from '../assets/images/cart.png'
import { useSelector, useDispatch } from 'react-redux';
import {addToCart} from '../stores/cart';

function ProductCart(props) {
    const carts = useSelector(store => store.cart.items)
    console.log(carts)
    const {id, name, price, image, slug} = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () =>{
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }))
    }
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
      <Link to={slug}>
        <img src={image} alt="" className='w-full h-80 object-cover object-top ' />
      </Link>
      <h3 className='text-2xl py-3 text-black text-center font-medium'>{name}</h3>
      <div className='flex justify-between items-center'>
        <p className='text-black text-2xl font-medium'>
            $<span className='text-black'>{price}</span>
        </p>
        <button className='bg-gray-600 rounded-md text-sm hover:bg-gray-700 flex gap-2 px-2 py-1' onClick={handleAddToCart}>
            <img src={cartIcon} alt="" className='w-5' />
            Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCart
