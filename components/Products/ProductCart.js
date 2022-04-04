import Image from "next/image"
import { useDispatch } from "react-redux"
import { addCart, removeCart } from "../../redux/slice/cartSlice"

const ProductCart = ({ id, title, description, image, price }) => {

    const dispatch = useDispatch()

    const removeFromCart = () => {
        dispatch(removeCart({ id }));
    }

    const addToCart = () => {
        const item = {
            id,
            title,
            description,
            image,
            price,
        }
        dispatch(addCart(item))
    }

    return (
        <div className="lg:flex md:flex flex-col lg:flex-row my-10 items-center justify-between container mx-auto border-b border-t p-5">
            <div className="lg:max-w-none md:max-w-none max-w-xs mx-auto lg:mx-0 md:mx-1">
                <Image src={image} className="mx-auto" width={300} height={300} quality={60} placeholder='blur' blurDataURL={image} alt="product image" />
            </div>
            <div className="p-3 flex flex-col">
                <h1 className="font-bold lg:text-2xl md:text-xl text-lg">
                    {title.slice(0, 20)}
                </h1>
                <h2 className="font-semibold lg:text-xl md:text-lg text-md">
                    prices - ${price}
                </h2>
            </div>
            <div className="max-w-lg p-1 lg:text-2xl md:text-xl text-xs">
                {description.slice(0, 150)}
            </div>
            <div className="flex-col flex justify-between ">
                <button onClick={addToCart} className="px-3 py-3 m-1 bg-rose-500 text-gray-100 rounded-lg">
                    Add to cart
                </button>
                <button onClick={removeFromCart} className="px-3 py-3 m-1 bg-rose-500 text-gray-100 rounded-lg">
                    remove from cart
                </button>
            </div>
        </div>
    )
}

export default ProductCart