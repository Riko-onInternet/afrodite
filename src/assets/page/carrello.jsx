/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import Header from "../../component/header";
import Footer from "../../component/footer";

import { useCart } from "../../component/cartprovider";

import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

function checkout() {
  const { cart, setCart } = useCart();

  function removeCart(i) {
    setCart(prev => {
      const newcart = [...prev]
      newcart.splice(i, 1)
      return newcart;
    })
  }

  return (
    <>
      <Header />
      <>
        <div className="flex md:flex-row flex-col w-full max-w-[1400px] mx-auto mt-8 px-4">
          <div className=" md:w-2/3 w-full h-full order-2 md:order-none px-4">
            {cart.map((item, i) => (
              <>
                <div className="flex h-[200px] p-4 gap-4 mb-4 rounded-xl bg-gray-100 dark:bg-gray-900">
                  <img src={item.img} className="h-full rounded-md"></img>
                  <div className="flex flex-col justify-center dark:text-white">
                    <p className="sm:text-lg text-xs font-medium">{item.nome}</p>
                    <p className="sm:text-base text-xs">{item.colorPrint}</p>
                    <p className="sm:text-base text-xs">€ {item.prize}</p>
                    <button className="flex items-center p-2 pl-0 gap-2 text-red-600 font-medium sm:text-base text-xs" onClick={() => removeCart(i)}>
                      <FaTrash />
                      Rimuovi
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="md:w-1/3 w-full md:h-full order-1 md:order-none p-3">
            <div className="mb-8 w-full flex flex-col gap-2 dark:text-white">
              <div className="flex justify-between text-sm">
                <p className="font-bold">Spedizione: </p>
                <p>GRATIS</p>
              </div>
              <div className="flex justify-between text-xl">
                <p className="font-bold">Totale: </p>
                <p>€ {cart.reduce((prev, item) => (prev + item.prize), 0)}</p>
              </div>
            </div>
            <Link to={"/checkout"} className="btn w-full dark:bg-gray-900 dark:border-gray-900 dark:text-white">Procedi all'acquisto</Link>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}
export default checkout;