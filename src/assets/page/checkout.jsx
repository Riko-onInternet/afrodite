
import { Link } from "react-router-dom";

import { Button, Checkbox, Input, Select } from "@chakra-ui/react";

import Logo from "../../component/logo";
import SwitchTheme from "../../component/switchTeme";

import CreditCardInput from "../../component/input/ceditCardinput";
import PhoneNumberInput from "../../component/input/numbPhone";

import { MdKeyboardArrowLeft } from "react-icons/md";

import { useState } from "react";

const provincia = [
  {
    value: "AG",
    text: "Agrigento",
  },
  {
    value: "AL",
    text: "Alessandria",
  },
  {
    value: "AN",
    text: "Ancona",
  },
  {
    value: "AO",
    text: "Aosta",
  },
  {
    value: "AR",
    text: "Arezzo",
  },
  {
    value: "AP",
    text: "Ascoli Piceno",
  },
  {
    value: "AT",
    text: "Asti",
  },
  {
    value: "AV",
    text: "Avellino",
  },
  {
    value: "BA",
    text: "Bari",
  },
  {
    value: "BT",
    text: "Barletta-Andria-Trani",
  },
  {
    value: "BL",
    text: "Belluno",
  },
  {
    value: "BN",
    text: "Benevento",
  },
  {
    value: "BG",
    text: "Bergamo",
  },
  {
    value: "BI",
    text: "Biella",
  },
  {
    value: "BO",
    text: "Bologna",
  },
  {
    value: "BZ",
    text: "Bolzano",
  },
  {
    value: "BS",
    text: "Brescia",
  },
  {
    value: "BR",
    text: "Brindisi",
  },
  {
    value: "CA",
    text: "Cagliari",
  },
  {
    value: "CL",
    text: "Caltanissetta",
  },
  {
    value: "CB",
    text: "Campobasso",
  },
  {
    value: "CE",
    text: "Caserta",
  },
  {
    value: "CT",
    text: "Catania",
  },
  {
    value: "CZ",
    text: "Catanzaro",
  },
  {
    value: "CH",
    text: "Chieti",
  },
  {
    value: "CO",
    text: "Como",
  },
  {
    value: "CS",
    text: "Cosenza",
  },
  {
    value: "CR",
    text: "Cremona",
  },
  {
    value: "KR",
    text: "Crotone",
  },
  {
    value: "CN",
    text: "Cuneo",
  },
  {
    value: "EN",
    text: "Enna",
  },
  {
    value: "FM",
    text: "Fermo",
  },
  {
    value: "FE",
    text: "Ferrara",
  },
  {
    value: "FI",
    text: "Firenze",
  },
  {
    value: "FG",
    text: "Foggia",
  },
  {
    value: "FC",
    text: "Forlì-Cesena",
  },
  {
    value: "FR",
    text: "Frosinone",
  },
  {
    value: "GE",
    text: "Genova",
  },
  {
    value: "GO",
    text: "Gorizia",
  },
  {
    value: "GR",
    text: "Grosseto",
  },
  {
    value: "IM",
    text: "Imperia",
  },
  {
    value: "IS",
    text: "Isernia",
  },
  {
    value: "AQ",
    text: "L’aquila",
  },
  {
    value: "SP",
    text: "La spezia",
  },
  {
    value: "LT",
    text: "Latina",
  },
  {
    value: "LE",
    text: "Lecce",
  },
  {
    value: "LC",
    text: "Lecco",
  },
  {
    value: "LI",
    text: "Livorno",
  },
  {
    value: "LO",
    text: "Lodi",
  },
  {
    value: "LU",
    text: "Lucca",
  },
  {
    value: "MC",
    text: "Macerata",
  },
  {
    value: "MN",
    text: "Mantova",
  },
  {
    value: "MS",
    text: "Massa-Carrara",
  },
  {
    value: "MT",
    text: "Matera",
  },
  {
    value: "ME",
    text: "Messina",
  },
  {
    value: "MI",
    text: "Milano",
  },
  {
    value: "MO",
    text: "Modena",
  },
  {
    value: "MB",
    text: "Monza e Brianza",
  },
  {
    value: "NA",
    text: "Napoli",
  },
  {
    value: "NO",
    text: "Novara",
  },
  {
    value: "NU",
    text: "Nuoro",
  },
  {
    value: "OR",
    text: "Oristano",
  },
  {
    value: "PD",
    text: "Padova",
  },
  {
    value: "PA",
    text: "Palermo",
  },
  {
    value: "PR",
    text: "Parma",
  },
  {
    value: "PV",
    text: "Pavia",
  },
  {
    value: "PG",
    text: "Perugia",
  },
  {
    value: "PU",
    text: "Pesaro e Urbino",
  },
  {
    value: "PE",
    text: "Pescara",
  },
  {
    value: "PC",
    text: "Piacenza",
  },
  {
    value: "PI",
    text: "Pisa",
  },
  {
    value: "PT",
    text: "Pistoia",
  },
  {
    value: "PN",
    text: "Pordenone",
  },
  {
    value: "PZ",
    text: "Potenza",
  },
  {
    value: "PO",
    text: "Prato",
  },
  {
    value: "RG",
    text: "Ragusa",
  },
  {
    value: "RA",
    text: "Ravenna",
  },
  {
    value: "RC",
    text: "Reggio Calabria",
  },
  {
    value: "RE",
    text: "Reggio Emilia",
  },
  {
    value: "RI",
    text: "Rieti",
  },
  {
    value: "RN",
    text: "Rimini",
  },
  {
    value: "RM",
    text: "Roma",
  },
  {
    value: "RO",
    text: "Rovigo",
  },
  {
    value: "SA",
    text: "Salerno",
  },
  {
    value: "SS",
    text: "Sassari",
  },
  {
    value: "SV",
    text: "Savona",
  },
  {
    value: "SI",
    text: "Siena",
  },
  {
    value: "SR",
    text: "Siracusa",
  },
  {
    value: "SO",
    text: "Sondrio",
  },
  {
    value: "SU",
    text: "Sud Sardegna",
  },
  {
    value: "TA",
    text: "Taranto",
  },
  {
    value: "TE",
    text: "Teramo",
  },
  {
    value: "TR",
    text: "Terni",
  },
  {
    value: "TO",
    text: "Torino",
  },
  {
    value: "TP",
    text: "Trapani",
  },
  {
    value: "TN",
    text: "Trento",
  },
  {
    value: "TV",
    text: "Treviso",
  },
  {
    value: "TS",
    text: "Trieste",
  },
  {
    value: "UD",
    text: "Udine",
  },
  {
    value: "VA",
    text: "Varese",
  },
  {
    value: "VE",
    text: "Venezia",
  },
  {
    value: "VB",
    text: "Verbano-Cusio-Ossola",
  },
  {
    value: "VC",
    text: "Vercelli",
  },
  {
    value: "VR",
    text: "Verona",
  },
  {
    value: "VV",
    text: "Vibo valentia",
  },
  {
    value: "VI",
    text: "Vicenza",
  },
  {
    value: "VT",
    text: "Viterbo",
  },
];

const yearCard = [
  { text: "----", value: 0 },
  { text: "2024", value: 1 },
  { text: "2025", value: 2 },
  { text: "2026", value: 3 },
  { text: "2027", value: 4 },
  { text: "2028", value: 5 },
  { text: "2029", value: 6 },
];

const monthCard = [
  { text: "--", value: 0 },
  { text: "01", value: 1 },
  { text: "02", value: 2 },
  { text: "03", value: 3 },
  { text: "04", value: 4 },
  { text: "05", value: 5 },
  { text: "06", value: 6 },
  { text: "07", value: 7 },
  { text: "08", value: 8 },
  { text: "09", value: 9 },
  { text: "10", value: 10 },
  { text: "11", value: 11 },
  { text: "12", value: 12 },
];

import { useCart } from "../../component/cartprovider";

const Checkout = () => {
  const [EmailValue, setEmailValue] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  let flagCardYear = false;
  let flagCardMonth = false;
  let flagCardCVV = false;
  let flagCardNumber = false;
  let flagPhoneNumb = false;
  let flagEmail = false;

  const cardYear = document.querySelector("#cardYear");
  const cardMonth = document.querySelector("#cardMonth");
  const CVV = document.querySelector("#cvv");
  const cardNumber = document.querySelector("#numberCard");
  const phoneNumb = document.querySelector("#phoneNumb");

  setTimeout(() => {
    console.log("anno è:", cardYear.value)
    console.log("mese è:", cardMonth.value)
    console.log("cvv è:", CVV.value)
    console.log("numero carta è:", cardNumber.value)
    console.log("il telefono è:", phoneNumb.value)
  }, 1000);

  function checkpayment(event) {
    if (cardYear.value == 0) {
      cardYear.classList.add("bg-red-600/20");
    } else {
      cardYear.classList.remove("bg-red-600/20");
      flagCardYear = true;
    }

    if (cardMonth.value == 0) {
      cardMonth.classList.add("bg-red-600/20");
    } else {
      cardMonth.classList.remove("bg-red-600/20");
      flagCardMonth = true;
    }

    if (CVV.value == "") {
      CVV.classList.add("bg-red-600/20");
    } else {
      CVV.classList.remove("bg-red-600/20");
      flagCardCVV = true;
    }

    if (cardNumber.value == "") {
      cardNumber.classList.add("bg-red-600/20");
    } else {
      cardNumber.classList.remove("bg-red-600/20");
      flagCardNumber = true;
    }

    if (phoneNumb.value == "") {
      phoneNumb.classList.add("bg-red-600/20");
    } else {
      phoneNumb.classList.remove("bg-red-600/20");
      flagPhoneNumb = true;
    }

    const patternEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (EmailValue == '') {
      setErrorEmail('vuoto');
    } else if (!patternEmail.test(EmailValue)) {
      setErrorEmail('noncorretto');
    } else {
      setErrorEmail('');
      // setEmailValue('');
      flagEmail = true;
    }
    event.preventDefault();

    if (flagCardYear && flagCardMonth && flagCardCVV && flagCardNumber && flagPhoneNumb && flagEmail == true) {
      window.location.href = "/finale"
    }
  }

  const { cart, setCart } = useCart();

  return (
    <>
      <div className="max-w-[1400px] mx-auto pt-5 pb-10">
        <div className="mx-8">
          <div className="flex items-center justify-between">
            <div>
              <Link to={"/"}>
                <Logo />
              </Link>
              <div className="text-sm breadcrumbs mt-3 text-black dark:text-white">
                <ul>
                  <li className="font-bold">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/cart"}>Carrtello</Link>
                  </li>
                  <li className="opacity-50">Spedizione</li>
                </ul>
              </div>
            </div>
            <div>
              <SwitchTheme />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-8 p-4 text-black dark:text-white">
          <div className="p-4 mt-4 lg:mt-0  order-2 lg:order-none">
            <form action="#" onSubmit={checkpayment}>
              <div className="mb-6">
                <p className="text-xl font-bold mb-2">Contatti</p>
                <div>
                  <label className="block">Email <span className="text-red-500 font-bold">*</span></label>
                  <Input
                    type="text"
                    placeholder="Email"
                    value={EmailValue}
                    onChange={(risultato) => setEmailValue(risultato.target.value)}
                    className={`
                    ${{
                        '': "bg-white dark:bg-gray-900 dark:border-gray-800 mb-2",
                        'vuoto': "bg-white dark:bg-gray-900 dark:border-gray-800 mb-2 !bg-red-600/20",
                        'noncorretto': "bg-white dark:bg-gray-900 dark:border-gray-800 mb-2 !bg-red-600/20"
                      }[errorEmail]}
                  `}
                  ></Input>
                  <Checkbox isChecked>Inviami le notizie e le offerte</Checkbox>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xl font-bold mb-2">
                  Indirizzo di spedizione
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-2 xs:col-span-1">
                    <label className="block">
                      Nome <span className="text-red-500 font-bold">*</span>
                    </label>
                    <Input
                      placeholder="Mario"
                      className="bg-white dark:bg-gray-900 dark:border-gray-800"
                    ></Input>
                  </div>
                  <div className="col-span-2 xs:col-span-1">
                    <label className="block">Cognome <span className="text-red-500 font-bold">*</span>
                    </label>
                    <Input placeholder="Rossi" className="bg-white dark:bg-gray-900 dark:border-gray-800"></Input>
                  </div>
                  <div className="col-span-2">
                    <label className="block">Azienda</label>
                    <Input className="bg-white dark:bg-gray-900 dark:border-gray-800"></Input>
                  </div>
                  <div className="col-span-2">
                    <label className="block"> Indirizzo <span className="text-red-500 font-bold">*</span></label>
                    <Input className="bg-white dark:bg-gray-900 dark:border-gray-800"></Input>
                  </div>
                  <div className="col-span-2">
                    <label className="block">Appartamento, suite, ecc.</label>
                    <Input className="bg-white dark:bg-gray-900 dark:border-gray-800"></Input>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-3 xs:col-span-1">
                        <label className="block">
                          Codice postale <span className="text-red-500 font-bold">*</span>
                        </label>
                        <Input className="bg-white dark:bg-gray-900 dark:border-gray-800"></Input>
                      </div>
                      <div className="col-span-3 xs:col-span-1">
                        <label className="block">
                          Città <span className="text-red-500 font-bold">*</span>
                        </label>
                        <Input className="bg-white dark:bg-gray-900 dark:border-gray-800"></Input>
                      </div>
                      <div className="col-span-3 xs:col-span-1">
                        <label className="block">
                          Provincia <span className="text-red-500 font-bold">*</span>
                        </label>
                        <Select
                          name="provincia"
                          defaultValue="RM"
                          className="bg-white dark:text-white dark:bg-gray-900 dark:border-gray-800"
                        >
                          {provincia.map((location) => (
                            <>
                              <option
                                className="dark:bg-gray-900"
                                value={location.value}
                              >
                                {location.text}
                              </option>
                            </>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <PhoneNumberInput />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xl font-bold mb-2">Pagamento</p>
                <div className="flex flex-col gap-4 max-w-[300px]">
                  <div>
                    <label className="block">Nome proprietario <span className="text-red-500 font-bold">*</span></label>
                    <Input placeholder="Giovanni Muciaccia" className="bg-white dark:bg-gray-900 dark:border-gray-800"></Input>
                  </div>
                  <div>
                    <CreditCardInput />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block">Mese <span className="text-red-500 font-bold">*</span></label>
                      <Select id="cardMonth" className="bg-white dark:bg-gray-900 dark:border-gray-800">
                        {monthCard.map((month) => (
                          <>
                            <option className="dark:bg-gray-900" value={month.value}>{month.text}</option>
                          </>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <label className="block">Anno <span className="text-red-500 font-bold">*</span></label>
                      <Select id="cardYear" className="bg-white dark:bg-gray-900 dark:border-gray-800">
                        {yearCard.map((year) => (
                          <>
                            <option className="dark:bg-gray-900" value={year.value}>{year.text}</option>
                          </>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <label className="block">CVV <span className="text-red-500 font-bold">*</span></label>
                      <Input placeholder="857" className="bg-white dark:bg-gray-900 dark:border-gray-800" maxLength={3} id="cvv"></Input>
                    </div>
                  </div>
                </div>
              </div>

              <p className="opacity-50 mb-4">I campi con <span className="font-bold">*</span> sono obbligatori</p>

              <div className="flex justify-between items-center">
                <Link to={"/cart"}><span className="flex items-center gap-2 underline"><MdKeyboardArrowLeft className="size-5" /> Torna nel carrello</span></Link>
                <Button className="btn min-w-[200px] bg-gray-300 border-0 lg:hidden" onClick={checkpayment}>Ordina ora</Button>
              </div>
            </form>
          </div>

          <div className="relative h-[400px] lg:h-auto order-1 lg:order-none">
            <div className="bg-gray-100 dark:bg-gray-900 h-[280px] relative overflow-y-scroll lg:h-[816px] ">
              <div className="p-4 lg:sticky top-0">
                {cart.map((item) => (
                  <>
                    <div className="flex items-center h-[100px] gap-2 p-4">
                      <img src={item.img} className="h-full"></img>
                      <div>
                        <p className="font-bold">{item.nome}</p>
                        <p>€ {item.prize}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="px-10 w-full bg-gray-100 dark:bg-gray-900 pb-4">
              <div className="pb-8 pt-8 w-full flex flex-col gap-2 dark:text-white">
                <div className="flex justify-between text-sm">
                  <p className="font-bold">Spedizione: </p>
                  <p>GRATIS</p>
                </div>
                <div className="flex justify-between text-xl">
                  <p className="font-bold">Totale: </p>
                  <p>€ {cart.reduce((prev, item) => (prev + item.prize), 0)}</p>
                </div>
              </div>
              <Button className="btn mb-5 w-full hidden lg:flex bg-gray-300 dark:bg-gray-700 dark:text-white border-0" onClick={checkpayment}>Ordina ora</Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default Checkout;
