import Image from "next/image"
import { useDispatch } from "react-redux"
import { addCart } from '../../redux/slice/cartSlice';

const ProductItem = (props) => {

    const dispatch = useDispatch();

    const addToCart = () => {
        const item = {
            id: props.id,
            title: props.title,
            description: props.desc,
            image: props.img,
            price: props.price,
        }
        dispatch(addCart(item))
    }

    return (
        <div className="bg-white m-1 shadow-xl p-5 rounded-xl">
            <div className="p-1 max-w-xs mx-auto">
                <Image src={props.img} className="mx-auto" width={300} height={300} quality={60} placeholder='blur' blurDataURL={props.img} alt="product image" />
            </div>
            <div>
                <h2 className="text-center lg:text-2xl md:text-xl text-xl text-gray-800 mt-4">
                    {props.title}
                </h2>
                <h3 className="font-semibold p-1">
                    Price - ${props.price}
                </h3>
                <p className="p-1 max-w-xs">
                    {props.desc.slice(0, 100)}
                </p>
                <button onClick={addToCart} className="px-3 py-3 bg-rose-500 text-gray-100 rounded-lg">Add to cart</button>
            </div>
        </div>
    )
}

export default ProductItem