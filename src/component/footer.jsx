/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FiAlertTriangle } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

import { useState } from "react";

import databs from "../assets/data/databs.json";

import Logo from "./logo";
import { Link } from "react-router-dom";

function Footer() {

  const [EmailValue, setEmailValue] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  // Check News Letters
  function EmailNewsLetter(event) {
    const patternEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const ToastError = document.querySelector("#ToastError");
    const ToastSuccess = document.querySelector("#ToastSuccess");
    if (EmailValue == '') {
      setErrorEmail('vuoto');
      ToastError.classList.remove("hidden");
      ToastError.classList.add("flex");
      setTimeout(() => {
        ToastError.classList.add("hidden");
        ToastError.classList.remove("flex");
      }, 3.0 * 1000);
    } else if (!patternEmail.test(EmailValue)) {
      setErrorEmail('noncorretto');
      ToastError.classList.remove("hidden");
      ToastError.classList.add("flex")
      setTimeout(() => {
        ToastError.classList.add("hidden");
        ToastError.classList.remove("flex");
      }, 3.0 * 1000);
    } else {
      setErrorEmail('');
      setEmailValue('');
      ToastSuccess.classList.remove("hidden");
      ToastSuccess.classList.add("flex");
      setTimeout(() => {
        ToastSuccess.classList.add("hidden");
        ToastSuccess.classList.remove("flex");
      }, 3.0 * 1000);
    }
    event.preventDefault();
  }
  return (
    <>
      <footer className="bg-white dark:bg-gray-950 pt-20">
        <div className="grid grid-cols-1 w-full">
          <div className="mx-auto my-6">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
        </div>

        <div className="w-full mx-auto text-black dark:text-white">
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 w-full text-center py-8">
              {databs.linkFooter.map((link) => (
                <div className="my-2 md:my-0">
                  <Link to={"/" + link.href} className={link.class}>{link.textContent}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border border-gray-500/20 dark:border-gray-800"></div>

        <div className="w-full text-black dark:text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full px-5 md:px-10 py-8">
            <div>
              <p className="font-bold text-lg">Iscriviti alla nostra Newsletter</p>
              <p>Le ultime notizie, articoli e risorse, inviati settimanalmente alla tua casella di posta.</p>
            </div>
            <div>
              <form action="#" onSubmit={EmailNewsLetter} className="flex items-center justify-sart md:justify-end gap-2 md:gap-5 mt-5 md:mt-0">
                <input
                  type="text"
                  placeholder="Email"
                  value={EmailValue}
                  onChange={(risultato) => setEmailValue(risultato.target.value)}
                  // className="input input-bordered w-full max-w-xs"
                  className={`
                    ${{
                      '': "input input-bordered w-full max-w-xs border-0 bg-gray-100 dark:bg-gray-900",
                      'vuoto': "input input-bordered w-full max-w-xs bg-red-500/40 border-2 border-red-500 outline-0",
                      'noncorretto': "input input-bordered w-full max-w-xs bg-red-500/40 border-2 border-red-500 outline-0"
                    }[errorEmail]}
                  `}
                />
                <button type="submit" className="btn bg-gray-200 dark:bg-gray-900 dark:border-gray-900 text-black dark:text-white">Iscriviti</button>
              </form>
            </div>
          </div>
        </div>

        <div className="border border-gray-500/20 dark:border-gray-800"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 items-center px-5 md:px-10 py-6 text-black dark:text-white">
          <div>
            <p>© 2024 Afrodite, Inc. All rights reserved.</p>
          </div>
          <div className="md:text-center">
            <a href="#">All privacy</a>
          </div>
          <div className="flex items-center justify-start md:justify-end mt-2 md:mt-0 gap-4">
            <Link to={"#"}><FaFacebook /></Link>
            <Link to={"#"}><FaInstagram /></Link>
            <Link to={"#"}><FaXTwitter /></Link>
            <Link to={"#"}><FaTiktok /></Link>
            <Link to={"#"}><FaYoutube /></Link>
          </div>
        </div>

      </footer>

      {/* Toast Email success */}
      <div className="toast toast-end">
        <div className="alert alert-error items-center gap-2 hidden" id="ToastError">
          <FiAlertTriangle className="text-xl" />
          <span>Inserire l'email correttamente.</span>
        </div>
        <div className="alert alert-success items-center gap-2 hidden" id="ToastSuccess">
          <FaCheckCircle className="text-xl" />
          <span>Iscrizione effetuata con successo!</span>
        </div>
      </div>
    </>
  );
}

export default Footer;