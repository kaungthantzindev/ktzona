import { BsFillCartFill, BsHouseFill, BsList, BsViewStacked, BsX } from 'react-icons/bs';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { seletedItems } from '../../redux/slice/cartSlice';

const Navbar = () => {

    const [navopen, setNavopen] = useState(false);

    const navHandler = () => {
        setNavopen(!navopen)
    }

    const items = useSelector(seletedItems);

    return (
        <>
            <div className="h-20 flex items-center justify-between px-5 fixed inset-0 border-b-2 z-50 bg-white">
                <Link href="/" passHref>
                    <h1 className="font-semibold text-3xl logo-text text-rose-500">
                        KTzona
                    </h1>
                </Link>
                <div className='lg:flex md:flex hidden items-center text-gray-100'>
                    <Link href="/" passHref>
                        <div className='p-3 mx-2 bg-rose-500 rounded-full'>
                            <BsHouseFill size={20} />
                        </div>
                    </Link>
                    <Link href="/products" passHref>
                        <div className='p-3 mx-2 bg-rose-500 rounded-full'>
                            <BsViewStacked size={20} />
                        </div>
                    </Link>
                    <Link href="/cart" passHref>
                        <div className='p-3 flex items-center ml-2 bg-rose-500 rounded-full'>
                            <BsFillCartFill size={20} />
                            <sup>{items.length}</sup>
                        </div>
                    </Link>
                </div>
                <div onClick={navHandler} className='lg:hidden md:hidden block bg-rose-500 p-3 rounded-full text-gray-100'>
                    {navopen ? <BsX size={25} /> : <BsList size={25} />}
                </div>
            </div>
            {navopen &&
                (
                    <>
                        <motion.div onClick={navHandler} className='flex flex-col bg-gray-50 h-72  py-24 lg:hidden md:hidden text-gray-100 z-40 fixed inset-0'
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link href="/" passHref>
                                <div className='p-3 flex items-center justify-center m-2 bg-rose-500 rounded-full'>
                                    <BsHouseFill size={20} />
                                    <h4 className='pl-3'>Home</h4>
                                </div>
                            </Link>
                            <Link href="/products" passHref>
                                <div className='p-3 m-2 flex items-center justify-center bg-rose-500 rounded-full'>
                                    <BsViewStacked size={20} />
                                    <h4 className='pl-3'>products</h4>
                                </div>
                            </Link>
                            <Link href="/cart" passHref>
                                <div className='p-3 m-2 flex items-center justify-center bg-rose-500 rounded-full'>
                                    <BsFillCartFill size={20} />
                                    <sup>{items.length}</sup>
                                    <h4 className='pl-3'>cart</h4>
                                </div>
                            </Link>
                        </motion.div>
                    </>
                )
            }
        </>
    )
}

export default Navbar