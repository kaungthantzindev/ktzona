import Link from "next/link"
import ProductItem from "./ProductItem";
import { BsArrowRightCircleFill } from 'react-icons/bs'

const ProductSample = () => {
    return (
        <div className="bg-gray-100 py-10">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center text-rose-500 mb-4">Sample Products</h1>
            <Link href='/products' passHref>
                <div className="flex items-center text-rose-500 lg:text-3xl md:text-2xl text-xl justify-center">
                    <h2 className="pr-2">See all our products </h2>
                    <BsArrowRightCircleFill />
                </div>
            </Link>
            <div className="grid min-h-[80vh] lg:mx-40 md:mx-32 md:gap-10 mx-1 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-items-center">
                <ProductItem id="1" price="109.95" img='/product.jpg' title="Fjallraven" desc="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday" />
                <ProductItem id="3" price="55.99" img='/cotten.jpg' title="Mens Cotton Jacket" desc="great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day." />
                <ProductItem id="7" price="9.99" img='/whitegold.jpg' title="White Gold Plated Princess" desc="Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel" />
                <ProductItem id="6" price="168" img='/solidgold.jpg' title="White Gold Plated Princess" desc="Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel" />
            </div>
        </div>
    )
}

export default ProductSample