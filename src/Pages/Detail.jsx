import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Products";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

function Detail() {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  useEffect(() => {
    const findDetail = products.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);
  const handleMinusQuantity = () =>{
    setQuantity(quantity -1 < 1 ? 1 : quantity - 1);
  }
  const handleAddQuantity = () =>{
    setQuantity(quantity + 1)
  }
  const handleAddToCart = () =>{
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }))
  }
  return (
    <div>
      <h2 className="text-3xl text-center">Product Detail</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={detail.image} className="w-full" alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
          <p className="font-bold text-3xl">${detail.price}</p>
          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center">
              <button className="bg-gray-100 text-black h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handleMinusQuantity}>
                -
              </button>
              <button className="bg-gray-200 text-black h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </button>
              <button className="bg-gray-100 text-black h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handleAddQuantity}>
                +
              </button>
            </div>
            <button className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl" onClick={handleAddToCart}>Add To Cart</button>
          </div>
          <p>{detail.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
