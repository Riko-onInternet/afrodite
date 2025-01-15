/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa6";

import Logo from "./logo";

import ButtonCart from "./buttonCart";
import SwitchTheme from "./switchTeme";

// Chakra UI
import { useDisclosure } from '@chakra-ui/react'
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, } from '@chakra-ui/react'

import databs from "../assets/data/databs.json"

function Header() {
  const { isOpen: isOpenHeader, onOpen: onOpenHeader, onClose: onCloseHeader } = useDisclosure()

  return (
    <>
      <header className="bg-white dark:bg-gray-950 shadow-md px-4 z-10 relative">
        <div className="flex items-center justify-between">
          <div>
            <label className="btn shadow-none bg-transparent border-0 hover:bg-transparent text-black dark:text-white" onClick={onOpenHeader}>
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              <p className="hidden sm:inline">Menu</p>
            </label>
          </div>
          <div>
            <Link to={"/"} className="p-2 block text-white">
              <Logo />
            </Link>
          </div>
          <div className="hidden sm:flex items-center ">
            <div className="me-3 flex items-center text-xl">
              <ButtonCart />
            </div>

            <SwitchTheme />
          </div>
        </div>
      </header>



      <Drawer placement="left" isOpen={isOpenHeader} onClose={onCloseHeader} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton className="mt-2 dark:text-white/50 dark:hover:text-white/90 focus-visible:shadow-none" />
          <DrawerBody className="!pt-16 flex flex-col gap-3 dark:bg-gray-950">
            {databs.linkHeader.map((link) => (
              <Link to={"/" + link.href} className="flex items-center justify-between px-4 py-4 rounded-md transition-all bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800">{link.textContent} <FaAngleRight /></Link>
            ))}
            <div className="grid grid-cols-2 sm:hidden mt-8 gap-2">
              <ButtonCart />
              <div className="flex justify-center">
                <SwitchTheme />
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;