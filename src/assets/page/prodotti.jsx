
import Header from "../../component/header";
import Footer from "../../component/footer";

import { Container } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

import { IoFilterOutline } from "react-icons/io5";

import dataBS from "../data/databs.json";

import { useState } from "react";

import { useCart } from "../../component/cartprovider";
import { Link } from "react-router-dom";

const filtri = [
  {
    colorSet: "",
    text: "Tutti i colori"
  },
  {
    colorSet: "nero",
    text: "Nero"
  },
  {
    colorSet: "beige",
    text: "Beige"
  },
  {
    colorSet: "verde",
    text: "Verde"
  },
  {
    colorSet: "rosso",
    text: "Rosso"
  },
  {
    colorSet: "arancione",
    text: "Arancione"
  },
  {
    colorSet: "cuoio",
    text: "Cuoio"
  },
  {
    colorSet: "marrone",
    text: "Marrone"
  },
  {
    colorSet: "giallo",
    text: "Giallo"
  }
]

function Prodotti() {
  const { cart, setCart } = useCart()

  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  const newItems = [...cart];
  const [subtotal, setSubtotal] = useState(0);
  function updateCart(operation, bagnum, removeindex) {
    switch (operation) {
      case "add":
        newItems.push(dataBS.prods[bagnum]);
        setCart(newItems);
        setSubtotal(subtotal + dataBS.prods[bagnum].prize);
        setCartItemsQuantity(cartItemsQuantity + 1);
        break;
      case "remove":
        newItems.splice(removeindex, 1);
        setCart(newItems);
        setSubtotal(subtotal - dataBS.prods[bagnum].prize);
        setCartItemsQuantity(cartItemsQuantity - 1);
        break;
    }
  }

  const [colore, setColore] = useState("");
  const [range, setRange] = useState("");
  const [search, setSearch] = useState("");

  var filteredProd = [];
  filteredProd = dataBS.prods;

  return (
    <>
      <Header />
      <>
        <div className="mt-5 w-full sticky top-2 z-40">
          <div className="bg-white dark:bg-gray-900 flex justify-center items-center flex-row gap-2 w-max mx-auto p-3 rounded-xl shadow-lg border-1 border-gray-100">
            <div>
              <Input onChange={(e) => setSearch(e.target.value)} placeholder="Cerca qui" className="bg-white border-gray-200 text-black dark:text-white dark:bg-gray-800 dark:border-gray-500 focus-visible:shadow-white" />
            </div>
            <div className="flex items-center gap-2">
              <details className="dropdown dropdown-start" id="filter">
                <summary className="btn bg-white rounded-full min-h-[40px] h-[40px]">Filtri <IoFilterOutline /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 mt-1">
                  <p className="ps-4 mt-2 mb-1 font-bold">Colore</p>
                  <>
                    {filtri.map((item) => (
                      <>
                        <div className="form-control">
                          <label className="label cursor-pointer justify-normal">
                            <input
                              type="radio"
                              name="radio-1"
                              className="radio mx-2 h-5 w-5"
                              onChange={() => setColore(item.colorSet)}
                            />
                            <span className="label-text">{item.text}</span>
                          </label>
                        </div>
                      </>
                    ))}
                  </>
                  <p className="ps-4 mt-2 mb-1 font-bold">Prezzo</p>
                  <>
                    <input type="range" min="690" max="2700" defaultValue={2700} onChange={(e) => setRange(e.target.value)} className="range" />
                    <div className="w-full flex justify-between text-xs">
                      <span>690</span>
                      <span>2700</span>
                    </div>
                  </>
                </ul>
              </details>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lgXl:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 mb-44 mt-4 gap-3">
          {filteredProd
            .filter((art) => search ? art.nome.toLowerCase().includes(search.toLowerCase()) : true)
            .filter((art) => colore ? art.color == colore : true)
            .filter((art) => range ? art.prize <= range : true)
            .map((art) => (
              <>
                <Container maxW="md">
                  <div className="card card-compact w-full bg-base-100 shadow-xl mt-4 mx-auto md:mx-0 dark:bg-gray-900 min-h-[552px]">
                    <a href="bag">
                      <figure>
                        <img src={art.img} className="rounded-xl mt-6" />
                      </figure>
                    </a>
                    <div className="card-body">
                      <div className="card-title dark:text-white">
                        <p>{art.nome} <span className="opacity-50">({art.year})</span></p>
                      </div>
                      <p className="mb-1 dark:text-white">{art.colorPrint}</p>
                      <p className="mb-1 dark:text-white">€ {art.prize}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <button onClick={() => updateCart("add", art.id - 1)} className="btn bg-gray-100 border-0 dark:bg-gray-800 dark:text-white">Aggiungi al carrello</button>
                        <Link to={"bag"} className="btn bg-white border-0 shadow-none dark:bg-gray-900 dark:text-white">Vedi dettagli</Link>
                      </div>
                    </div>
                  </div>
                </Container>
              </>
            ))}
        </div>
      </>
      <Footer />
    </>
  );
}
export default Prodotti;