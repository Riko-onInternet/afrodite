/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import Header from "./component/header";
import Footer from "./component/footer";
import { Link } from "react-router-dom";



// const risultato = bags.filter((bag) => bag.prize > 10.00)

function Site() {
  return (
    <>
      <Header />
      <>
        {/* Banner */}
        <div className="w-full relative">
          <div className="h-[700px] overflow-hidden img-home">
            <div className="absolute bottom-0 w-full h-[500px] grade"></div>
          </div>
          <div className="absolute bottom-0 w-full text-white text-center mb-10">
            <p className="text-3xl">Gruarda la nuova linea <span className="NewRoman text font-bold">New Roman</span></p>
            <a className="w-[200px] btn bg-transparent border-2 bg-blur text-white rounded-full mt-5">Guarda la linea</a>
          </div>
        </div>

        {/* Focus Bags */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="relative">
            <div className="h-[675px] card1">
              <div className="absolute bottom-0 w-full h-[500px] grade"></div>
            </div>
            <div className="absolute bottom-0 mb-12 text-center w-full text-white">
              <p className="text-2xl">Esplora le borse <span className="Jackie text-4xl">Jackie</span></p>
              <a className="w-[200px] btn bg-transparent border-2 bg-blur text-white rounded-full mt-5">Guarda la linea</a>
              <a href="#" className="relative"></a>
            </div>
          </div>
          <div className="relative">
            <div className="h-[675px] card2">
              <div className="absolute bottom-0 w-full h-[500px] grade"></div>
            </div>
            <div className="absolute bottom-0 mb-12 text-center w-full text-white">
              <p className="text-2xl">Esplora le borse <span className="Oswald text-2xl">Oswald</span></p>
              <a className="w-[200px] btn bg-transparent border-2 bg-blur text-white rounded-full mt-5">Guarda la linea</a>
              <a href="#" className="relative"></a>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="grid grid-cols-1 w-full">
          <div className="relative">
            <div className="h-[900px] overflow-hidden relative">
              <video autoPlay muted loop disablePictureInPicture className="object-cover h-full w-full absolute top-0 left-0" src="https://bellafewdgfwsdg.sirv.com/DNL8xbapkN_HD.mp4"></video>
              <div className="absolute bottom-0 w-full h-[500px] grade"></div>
            </div>
            <div className="absolute bottom-0 mb-12 text-center w-full text-white">
              <p className="text-2xl">Esplora tutte le borse</p>
              <Link to={"/products"} className="w-[200px] btn bg-transparent border-2 bg-blur text-white rounded-full mt-5">Guarda le borse</Link>
              {/* <a href="#" className="relative"></a> */}
            </div>
          </div>
        </div>
        
      </>
      <Footer />
    </>
  );
}

export default Site;