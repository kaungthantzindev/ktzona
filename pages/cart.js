import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductCart from "../components/Products/ProductCart";
import { removeAll, selectTotal, seletedItems } from '../redux/slice/cartSlice'

const Cart = () => {
  const items = useSelector(seletedItems)
  const total = useSelector(selectTotal)
  const [message, setMessage] = useState("");
  const dispatch = useDispatch()

  const checkout = _ => {
    dispatch(removeAll())
    setMessage("checkout successful")
  }

  return (
    <>
      <Navbar />
      <div className="py-20">
        <h1 className="text-center p-2 lg:text-5xl md:text-4xl text-3xl text-rose-500 font-semibold">{items.length === 0 ? 'your cart is empty' : 'Your Cart'}</h1>
        <h1 className="text-center p-2 lg:text-5xl md:text-4xl text-3xl text-teal-600 font-bold">{message}</h1>
        {items.map(data => {
          return (
            <ProductCart key={data.id} id={data.id} image={data.image} price={data.price} description={data.description} title={data.title} />
          )
        })}
        {items.length != 0 &&
          (<>
            <h2 className="text-center lg:text-5xl md:text-4xl text-3xl">Total ({items.length} items) $ {total}</h2>
            <div className="text-center mt-10">
              <button onClick={checkout} className="bg-rose-500 rounded-lg text-gray-50 px-4 py-3">Checkout</button>
            </div>
          </>)
        }
      </div>
    </>
  )
}

export default Cart