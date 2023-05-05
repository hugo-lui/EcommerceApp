import Link from "next/link";
import Image from "next/image";
import Phones from "../../public/assets/SixPhones.png"

export default function IPhone() {
  return (
    <div>
      <div className="text-center">
        <header className="p-2 bg-neutral-100 text-black space-x-16  text-sm">
          <Link className="hover:text-blue-600" href="/shop/iphone-14-pro">iPhone 14 Pro</Link>
          <Link className="hover:text-blue-600" href="/shop/iphone-14">iPhone 14</Link>
          <Link className="hover:text-blue-600" href="/shop/iphone-13">iPhone 13</Link>
          <Link className="hover:text-blue-600" href="/shop/iphone-se">iPhone SE</Link>
        </header>
        <p className="pt-24 text-gray-400 text-lg">New</p>
        <h2 className="pt-4 font-bold text-2xl">iPhone 14</h2>
        <h1 className="pt-4 font-bold text-5xl">Two great sizes.<br/>Now with a splash of yellow.</h1>
        <h2 className="pt-8 text-xl">From $1099 before trade-in<br/>or 24 interest-free payments of $45.79</h2>
        <div className="pt-8">
          <Link href="/shop/iphone-14-pro" className="text-white bg-blue-600 text-lg py-2 px-5 mr-4 rounded-3xl">Buy</Link>
          <Link href="/iphone" className="text-blue-600 text-lg">Learn more &gt;</Link>
        </div>
        <div className="block m-auto w-1/2 pt-16"><Image src={Phones}/></div>
      </div>
    </div>
  );
}