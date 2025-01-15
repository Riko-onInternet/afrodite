/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */

import { FaShoppingCart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

// Chakra UI
import { useDisclosure } from '@chakra-ui/react'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, } from '@chakra-ui/react'

import { useCart } from "./cartprovider";
import { Link } from "react-router-dom";

// import databs from "../assets/data/databs.json"

function buttonCart() {
  const { cart, setCart } = useCart();

  const { isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure()

  function removeCart(i) {
    setCart(prev => {
      const newcart = [...prev]
      newcart.splice(i, 1)
      return newcart;
    })
  }

  return (
    <>
      <button onClick={onOpenCart}>
        <div className="indicator">
          <span className="indicator-item badge bg-gray-200 text-xs h-max">
            {cart.length}
          </span>
          <FaShoppingCart className="me-2 dark:text-white" />
        </div>
      </button>

      <Drawer placement="right" isOpen={isOpenCart} onClose={onCloseCart} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton className="mt-2 dark:text-white/50 dark:hover:text-white/90 focus-visible:shadow-none" />
          <DrawerHeader className="dark:bg-gray-950 dark:text-white">Carrello</DrawerHeader>

          <DrawerBody className="dark:bg-gray-950 dark:text-white px-3 flex flex-col gap-4">
            {cart.map((item, i) => (
              <>
                {/* <p onClick={() => removeCart(i)}>{item.nome}</p> */}
                <div className="h-[100px] sm:h-[150px] bg-gray-100 dark:bg-gray-900 p-3 relative flex rounded-md">
                  <img className="h-full rounded-sm" src={item.img}></img>
                  <div className="flex flex-col justify-center w-full pl-3">
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
          </DrawerBody>

          <DrawerFooter className="bg-white dark:bg-gray-950 flex-col items-start">
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
            <div className="flex flex-col w-full gap-2">
              <Link to={"/checkout"} className="btn bg-gray-200 border-gray-200 shadow-none dark:bg-gray-800 dark:border-gray-800 dark:text-white">Procedi all'acquisto</Link>
              <Link to={"/cart"} className="btn bg-white border-white shadow-none dark:bg-gray-950 dark:border-gray-950 dark:text-white dark:hover:border-gray-950">Visualizza il carrello</Link>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default buttonCart;