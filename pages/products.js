import Navbar from '../components/Navbar';
import ProductItem from '../components/Products/ProductItem';

const Products = ({ product }) => {

    return (
        <>
            <Navbar />
            <div className='py-24 bg-gray-100'>
                <h1 className='lg:text-5xl py-3 text-center md:text-4xl text-3xl text-rose-500'>
                    Our<span className='font-bold'>Products</span>
                </h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 m-1 gap-5'>
                    {product.map(data => {
                        return (
                            <ProductItem id={data.id} key={data.id} desc={data.description} price={data.price} title={data.title} img={data.image} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Products

export async function getStaticProps() {
    const product = await fetch("https://fakestoreapi.com/products?limit=16").then(res => res.json())

    return {
        props: {
            product,
        }
    }
}