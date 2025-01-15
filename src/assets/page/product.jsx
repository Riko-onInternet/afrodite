/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */

import Header from "../../component/header";
import Footer from "../../component/footer";

// Chakra UI
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Icons
import { FaAngleRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

// Arreys
const sliderDBS = [
  {
    src: "https://bellafewdgfwsdg.sirv.com/banner-1.png",
  },
  {
    src: "https://bellafewdgfwsdg.sirv.com/banner-2.png",
  },
  {
    src: "https://bellafewdgfwsdg.sirv.com/banner-3.png",
  }
]

const colorDBS = [
  {
    bgColor: "bg-000",
    text: "Nero"
  },
  {
    bgColor: "bg-0f0",
    text: "Verde"
  },
  {
    bgColor: "bg-f00",
    text: "Rosso"
  },
]

const detailsList = [
  {
    text: "Pelle Taurillon"
  },
  {
    text: "Finiture in pelle Taurillon"
  },
  {
    text: "Fodera in vacchetta"
  },
  {
    text: "Parti metalliche dorate e madreperla"
  },
  {
    text: "Due diversi stili: la patta può essere ripiegata all'esterno o inserita all'interno"
  },
  {
    text: "Interno a scomparti e tasca interna con zip"
  },
  {
    text: "Gancetto interno"
  },
  {
    text: "Quattro piedini di appoggio sulla base"
  },
  {
    text: "Tracolla: Amovibile, regolabile"
  },
  {
    text: "Tracolla Altezza (Luce): 47.0 cm"
  },
  {
    text: "Tracolla Altezza (Luce) Max: 49.0 cm"
  },
  {
    text: "Manico: Semplice"
  },
]

function prodotto() {

  const { isOpen: colorIsOpen, onOpen: colorOnOpen, onClose: colorOnClose } = useDisclosure()
  const { isOpen: detailsIsOpen, onOpen: detailsOnOpen, onClose: detailsOnClose } = useDisclosure()

  const { isOpen: deliveryIsOpen, onOpen: deliveryOnOpen, onClose: deliveryOnClose } = useDisclosure()
  const { isOpen: paymantIsOpen, onOpen: paymantOnOpen, onClose: paymantOnClose } = useDisclosure()
  const { isOpen: infoConsegnaIsOpen, onOpen: infoConsegnaOnOpen, onClose: infoConsegnaOnClose } = useDisclosure()
  const { isOpen: resoIsOpen, onOpen: resoOnOpen, onClose: resoOnClose } = useDisclosure()
  const { isOpen: imballaggioIsOpen, onOpen: imballaggioOnOpen, onClose: imballaggioOnClose } = useDisclosure()

  return (
    <>
      <Header />
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <Swiper
              direction={'vertical'}
              slidesPerView={1}
              spaceBetween={0}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Mousewheel, Pagination, Autoplay]}
              className="h-[556px] color-correction-swiper"
            >
              {sliderDBS.map((img) => (
                <>
                  <SwiperSlide className="bg-gray-100 dark:bg-gray-800">
                    <img className="mx-auto h-[556px]" src={img.src}></img>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
          <div>
            <Container className="flex flex-col justify-center items-center px-4 h-full mt-14 lg:mt-0 max-w-[400px]">
              <div className="w-full">
                <div className="mb-4 dark:text-white">
                  <p className="text-lg font-semibold">Borsa Capucines BB</p>
                  <p>€ <span className="font-thin">6100</span></p>
                </div>

                <div className="mb-4">
                  <div className="divider m-0 dark:before:bg-[#ffffff1a] dark:after:bg-[#ffffff1a]"></div>
                  <button onClick={colorOnOpen} className="btn btn-none flex justify-between w-full dark:text-white">
                    <p>Colori</p>
                    <FaAngleRight />
                  </button>
                  <div className="divider m-0 dark:before:bg-[#ffffff1a] dark:after:bg-[#ffffff1a]"></div>
                </div>

                <button className="btn btn-none bg-gray-100 dark:bg-gray-800 dark:text-white/35 animate-none w-full text-opacity-50">I pre-ordini partono dal 04/04/2024</button>

                <div className="mt-12 flex flex-col items-start gap-1 dark:text-white">
                  <button onClick={detailsOnOpen} className="text-sm hover:underline">Dettagli prodotto</button>
                  <button onClick={deliveryOnOpen} className="text-sm hover:underline">Consegna e Resi</button>
                </div>

              </div>
            </Container>
          </div>
        </div>

        <div></div>
      </>
      <Footer />

      {/* Drawer Colori */}
      <Drawer
        isOpen={colorIsOpen}
        placement='right'
        onClose={colorOnClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent className="dark:bg-gray-950">
          <DrawerCloseButton />

          <DrawerBody>
            <div className="mt-16">
              {colorDBS.map((color) => (
                <>
                  <div className="border rounded-xl  dark:border-gray-800 p-1 mb-4">
                    <button onClick={colorOnClose} className="btn btn-none w-full justify-start px-2">
                      <div className={"size-4 rounded-full border dark:border-gray-800 " + color.bgColor}></div>
                      <p className="dark:text-white">{color.text}</p>
                    </button>
                  </div>
                </>
              ))}
            </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>

      {/* Drawer Dettagli prodotto */}
      <Drawer
        isOpen={detailsIsOpen}
        placement='right'
        onClose={detailsOnClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent className="dark:text-white dark:bg-gray-900">
          <DrawerCloseButton />
          <DrawerHeader>Dettagli prodotto</DrawerHeader>

          <DrawerBody>
            <div className="text-sm mb-4">
              <p>La borsa Capucines BB è realizzata in pelle Taurillon e impreziosita dagli iconici fiori Monogram in raffinata madreperla.</p>
              <p>Le emblematiche iniziali AF della Maison donano un ulteriore tocco effetto gioiello all'accessorio, dall'allure femminile.</p>
              <p>Il modello può essere portato in diversi modi, grazie alla pratica tracolla amovibile.</p>
            </div>

            <div>
              <p>27 x 18 x 9 cm</p>
              <p>( Lunghezza x Altezza x Larghezza )</p>
            </div>

            <div className="my-4 px-4">
              <ul className="text-sm">
                {detailsList.map((list) => (
                  <>
                    <li className="list-disc">{list.text}</li>
                  </>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Accordion allowToggle>

                <AccordionItem className="border-0">
                  {({ isExpanded }) => (
                    <>
                      <p>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='left'>
                            Sostenibilità
                          </Box>
                          {isExpanded ? (
                            <FaMinus fontSize='12px' />
                          ) : (
                            <FaPlus fontSize='12px' />
                          )}
                        </AccordionButton>
                      </p>
                      <AccordionPanel pb={4}>
                        <p className="text-sm">La pelle utilizzata per questo prodotto è stata lavorata in una conceria controllata e certificata da Leather Working Group (LWG), che garantisce i massimi standard ambientali in materia di concia delle pelli. Le normative a cui fa riferimento impongono alle concerie di ridurre il consumo di acqua ed energia, oltre che di non utilizzare sostanze che siano potenzialmente nocive. Le concerie con cui collaboriamo si trovano in Europa e sono nostre partner nell'ambito dell'approvvigionamento responsabile e del miglioramento continuo (implementazione dei sistemi di tracciabilità dei materiali, contrasto delle pratiche di deforestazione).</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>

                <AccordionItem className="border-0">
                  {({ isExpanded }) => (
                    <>
                      <p>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='left'>
                            Istruzioni per la cura
                          </Box>
                          {isExpanded ? (
                            <FaMinus fontSize='12px' />
                          ) : (
                            <FaPlus fontSize='12px' />
                          )}
                        </AccordionButton>
                      </p>
                      <AccordionPanel pb={4}>
                        <p className="text-sm mb-4">
                          Per preservare nel tempo la bellezza di questo prodotto in pelle Taurillon, consigliamo di rispettare le seguenti linee guida per la cura:
                        </p>
                        <div className="text-sm">
                          <p>Evitare di graffiare o strofinare il prodotto contro superfici abrasive.</p>
                          <p>In caso di segni superficiali sulla fodera, si consiglia di tamponare con un panno morbido, asciutto e di colore chiaro.</p>
                          <p>Le fodere in pelle non sono adatte ai trattamenti di pulizia a secco.</p>
                          <p>Tenere il prodotto lontano da ambienti umidi ed evitare un'esposizione prolungata alla luce diretta del sole.</p>
                          <p>Inoltre, evitare di esporlo a fonti di calore (termosifoni, abitacoli di automobili durante la stagione calda, ecc.).</p>
                          <p>Evitare il contatto con prodotti oleosi, cosmetici, profumi e soluzioni idroalcoliche, nonché con qualsiasi materiale (riviste, altre pelli, ecc.) che possa rilasciare colore sul prodotto.</p>
                          <p>Evitare il contatto con l'acqua.</p>
                          <p>Qualora il prodotto entri in contatto con dell'acqua o in caso di sporcizia superficiale, tamponarlo con un panno assorbente chiaro e privo di pelucchi.</p>
                          <p>Evitare l'uso di detergenti contenenti sapone o solventi.</p>
                          <p>Al fine di proteggere il prodotto quando non lo si utilizza, riporlo nell'apposita sacca di protezione in feltro fornita al momento dell'acquisto.</p>
                          <p>Prendersi cura del proprio prodotto Afrodite consente di godere a lungo della sua bellezza.</p>
                          <p>Per qualsiasi domanda relativa al prodotto, contattare una boutique Afrodite.</p>
                        </div>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>

      {/* Drawer Consegne e Resi */}
      <Drawer
        isOpen={deliveryIsOpen}
        placement='right'
        onClose={deliveryOnClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent className="dark:text-white dark:bg-gray-900">
          <DrawerCloseButton />
          <DrawerHeader>Consegna e Resi</DrawerHeader>

          <DrawerBody>
            <div className="felx flex-col gap-2 mb-4">
              <button onClick={paymantOnOpen} className="btn w-full h-full py-5 pr-0 dark:bg-gray-800 dark:text-white border-0">
                <div className="grid grid-cols-12 w-full items-center">
                  <div className="col-span-11 text-start font-light">
                    <p className="mb-2">Pagamento Sicuro</p>
                    <p>Carta di credito e di debito, Paypal e Applepay</p>
                  </div>
                  <div><FaAngleRight /></div>
                </div>
              </button>
            </div>
            <div className="felx flex-col gap-2 mb-4">
              <button onClick={infoConsegnaOnOpen} className="btn w-full h-full py-5 pr-0 dark:bg-gray-800 dark:text-white border-0">
                <div className="grid grid-cols-12 w-full items-center">
                  <div className="col-span-11 text-start font-light">
                    <p className="mb-2">Informazioni sulla consegna</p>
                    <p>Spedizione gratuita e Click&Collect nei negozi disponibili</p>
                  </div>
                  <div><FaAngleRight /></div>
                </div>
              </button>
            </div>
            <div className="felx flex-col gap-2 mb-4">
              <button onClick={resoOnOpen} className="btn w-full h-full py-5 pr-0 dark:bg-gray-800 dark:text-white border-0">
                <div className="grid grid-cols-12 w-full items-center"> 
                  <div className="col-span-11 text-start font-light">
                    <p>Informazioni sui cambi & resi</p>
                  </div>
                  <div><FaAngleRight /></div>
                </div>
              </button>
            </div>
            <div className="felx flex-col gap-2 mb-4">
              <button onClick={imballaggioOnOpen} className="btn w-full h-full py-5 pr-0 dark:bg-gray-800 dark:text-white border-0">
                <div className="grid grid-cols-12 w-full items-center">
                  <div className="col-span-11 text-start font-light">
                    <p className="mb-2">Imballaggio</p>
                    <p>L'imballaggio contemporaneo ed ecologico ispirato al nostro Heritage</p>
                  </div>
                  <div><FaAngleRight /></div>
                </div>
              </button>
            </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>

      {/* Drawer Pagamento sicuro */}
      <Drawer
        isOpen={paymantIsOpen}
        placement='right'
        onClose={paymantOnClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent className="dark:text-white dark:bg-gray-900">
          <DrawerCloseButton />
          <DrawerHeader>Pagamento Sicuro</DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col items-start gap-4 text-sm">
              <p className="font-medium text-lg">Pagamento sicuro</p>
              <div>
                <p>I pagamenti sono accettati tramite carta di credito, carta di debito, PayPal, Apple Pay.</p>
                <p>Le carte di credito accettate sono Visa, American Express e Mastercard.</p>
                <p>
                  Sono accettati anche i bonifici bancari; per pagare tramite bonifico bancario, si prega di contattare il nostro Servizio Clienti al numero <a href="tel:+390000000000" className="underline">+39 000 000 0000.</a>
                </p>
              </div>
              <p>
                Quando si effettua un ordine, l'indirizzo di fatturazione deve corrispondere all'indirizzo della carta di credito.
                In caso contrario, l'ordine potrebbe non essere evaso.
                Afrodite accetta carte di credito provenienti dai paesi europei e internazionali elencati <a href="#" className="underline">qui</a>.
              </p>
              <p>Se la carta di credito è approvata per la procedura 3D-Secure (MasterCard SecureCode o Verified by Visa), durante il processo di pagamento verrà stabilita una connessione con la società emittente della carta di credito per confermare la propria identità.</p>
            </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>

      {/* Drawer Informazioni sulla consegna */}
      <Drawer
        isOpen={infoConsegnaIsOpen}
        placement='right'
        onClose={infoConsegnaOnClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent className="dark:text-white dark:bg-gray-900">
          <DrawerCloseButton />
          <DrawerHeader>Informazioni sulla consegna</DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col items-start gap-4 text-sm">
              <div>
                <p className="text-lg font-medium">Costi e tempi di consegna</p>
                <div>
                  <p className="mb-2">Disponibile in tutta Italia:</p>
                  <ul className="px-6">
                    <li className="list-disc">SPEDIZIONE STANDARD - GRATUITA: 3 - 6 giorni lavorativi (5-7 giorni lavorativi Sud e Isole)</li>
                    <li className="list-disc">SPEDIZIONE EXPRESS - GRATUITA: 2 - 3 giorni lavorativi (3-6 giorni lavorativi Sud e Isole)</li>
                    <li className="list-disc">CLICK & COLLECT: 2 - 3 giorni lavorativi (3-6 giorni lavorativi Sud e Isole)</li>
                  </ul>
                </div>
                <div className="mt-2">
                  <p>Disponibile solo in selezionate località:</p>
                  <p>CONSEGNA PERSONALIZZATA - GRATUITA: a partire da 1 giorno lavorativo</p>
                  <p>I tempi di consegna devono considerarsi puramente indicativi e possono variare.</p>
                  <p>Alcune località potrebbero richiedere 1-2 giorni aggiuntivi. Per ulteriori informazioni consulta le <a href="#" className="underline">FAQ</a></p>
                </div>
              </div>

              <div>
                <p className="text-lg font-medium mb-2">Eccezioni alle condizioni standard di spedizione</p>
                <div>
                  <ul className="px-6">
                    <li className="list-disc">Fragranze: non è possibile usufruire dei servizi Click&Collect o spedizione a casa nelle regioni di Sicilia e Sardegna.</li>
                    <li className="list-disc">Gli articoli di valore superiore a 5.000 Euro verranno consegnati con corriere dedicato. Il nostro Servizio Clienti ti contatterà per programmare la consegna e raccogliere le informazioni aggiuntive ai fini della corretta esecuzione del servizio.</li>
                    <li className="list-disc">La consegna degli ordini My LV Heritage, scarpe e abbigliamento personalizzato può richiedere fino a 8-12 settimane.</li>
                    <li className="list-disc">Una convalida aggiuntiva può essere richiesta per tutti gli ordini e può ritardare la consegna</li>
                  </ul>
                </div>
                <div className="mt-2">
                  <p>Per qualsiasi informazione riguardante la consegna puoi telefonare al nostro Servizio Clienti <a href="#" className="underline">+39 000 000 0000</a> o contattarci attraverso la Live Chat.</p>
                </div>
              </div>
            </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>

      {/* Drawer Informazioni sui cambi & resi */}
      <Drawer
        isOpen={resoIsOpen}
        placement='right'
        onClose={resoOnClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent className="dark:text-white dark:bg-gray-900">
          <DrawerCloseButton />
          <DrawerHeader>Informazioni sui cambi & resi</DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col items-start gap-4 text-sm">
              <div>
                <p className="text-lg font-medium mb-2">Informazioni sui cambi & resi</p>
                <div>
                  <ul className="px-6">
                    <li className="list-disc">I prodotti acquistati online possono essere cambiati entro 30 giorni dalla ricezione degli stessi.</li>
                    <li className="list-disc">Per tutte le informazioni su cambi e resi <a href="#" className="underline">clicca qui</a></li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="text-lg font-medium">Eccezioni sui cambi & resi</p>
                <div>
                  <p className="mb-2">Non possono essere cambiati o restituiti:</p>
                  <ul className="px-6">
                    <li className="list-disc">Scarpe e abbigliamento personalizzati</li>
                    <li className="list-disc">Prodotti su ordinazione</li>
                    <li className="list-disc">Profumi e Candele devono essere perfettamente sigillati per il cambio o il reso.</li>
                    <li className="list-disc">Profumi: l'adesivo o la pellicola trasparente posti a protezione della scatola del profumo non devono essere rimossi o aperti.</li>
                    <li className="list-disc">Candele: la pellicola trasparente posta a protezione della fragranza non deve essere aperta o rimossa.</li>
                    <li className="list-disc">Pellami Esotici: devono essere accompagnati dal certificato CITIES</li>
                    <li className="list-disc">Orologi e Gioielli: possono essere restituiti solamente nei punti vendita Louis Vuitton che recano l'offerta di prodotti di tale categoria o tramite Servizio Clienti. I prodotti devono essere restituiti nella loro confezione originale accompagnati dall'originale della garanzia e di ogni altro relativo certificato che li accompagnava al momento dell'acquisto.</li>
                  </ul>
                </div>
              </div>
            </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>

      {/* Drawer Informazioni sui cambi & resi */}
      <Drawer
        isOpen={imballaggioIsOpen}
        placement='right'
        onClose={imballaggioOnClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent className="dark:text-white dark:bg-gray-900">
          <DrawerCloseButton />
          <DrawerHeader>Informazioni sui cambi & resi</DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col items-start gap-4 text-sm">
              <img src="https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--box_gift_cards_DI3.jpg?wid=490"></img>
              <div>
                <p>Gli ordini Afrodite sono consegnati in un'iconica confezione regalo nell'inconfondibile tonalità "Safran Impérial".</p>
                <p>Giocando con i contrasti, le custodie sono accentuate da tocchi di blu, il colore utilizzato per le personalizzazioni fin dal 1854, che ricordano i nastri della Maison. L'armonia cromatica crea un'allure senza tempo dal tocco contemporaneo, espressione dello spirito del viaggio.</p>
              </div>
            </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default prodotto;