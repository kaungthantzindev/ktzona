import Image from "next/image"
import Link from "next/link"

const Layout = () => {
  return (
    <div className="min-h-[80vh] grid items-center justify-items-center lg:grid-cols-2 md:grid-cols-2 grid-cols-1 border-b-2">
      <div className="mt-10 max-w-xl mx-5 lg:order-1 md:order-1 order-2">
        <h1 className="lg:text-5xl md:text-4xl font-semibold text-3xl">Welcome to <span className="logo-text text-rose-500 font-bold">KTzona</span></h1>
        <h2 className="my-3 lg:text-3xl md:text-2xl text-xl">The World&apos;s Biggest Shopping Store</h2>
        <p className="my-2 lg:text-xl md:text-lg text-gray-800 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        <Link href="/products" passHref> 
          <button className="outline-none cursor-default lg:cursor-pointer md:cursor-pointer text-gray-100 my-3 px-3 py-3 bg-rose-500 rounded-xl text-lg">
            Order now
          </button>
        </Link>
      </div>
      <div className="mt-20 product-bg lg:order-2 md:order-2 order-1">
        <Image src="/nike.png" width={450} height={420} placeholder='blur' blurDataURL="/nike.png" quality={70} alt="nike" />
      </div>
    </div>
  )
}

export default Layout