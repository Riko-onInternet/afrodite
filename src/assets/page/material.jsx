import Header from "../../component/header";
import Footer from "../../component/footer";

function checkout() {
  return (
    <>
      <Header />
      <>
        {/* <p className="text-5xl font-bold my-20 text-center">Materiali utilizzati</p> */}
        <div className="BMIigm h-[500px]">
          <div className="flex justify-center items-center h-full bg-blur">
            <p className="text-white text-5xl font-semibold uppercase">Materiali utilizzati</p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 py-4">
          <div className="max-w-[1200px] mx-auto dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center p-0 sm:p-4 md:p-8">
              <div className="p-4">
                <img className="w-full rounded-3xl" src="https://bellafewdgfwsdg.sirv.com/3-copia-scaled.jpg" />
              </div>
              <div className="flex items-center justify-center flex-col w-full px-8 h-[300px] text-left">
                <p className="font-bold text-3xl mb-8 uppercase">Quali materiali utilizzate per le borse?</p>
                <p className="text-xl mb-2 w-full">Le nostre borse sono realizzate con materiali di alta qualità, come pelle, tessuto, metallo e altri accessori.</p>
                <p className="text-xl mb-2 w-full">Scegliamo i materiali in base alla loro resistenza, morbidezza, lucentezza e al loro impatto ambientale.</p>
                <p className="text-xl mb-2 w-full">Ogni borsa è unica e riflette la nostra passione per la moda e il design.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950">
          <div className="max-w-[1200px] mx-auto dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center p-0 sm:p-4 md:p-8">
              <div className="flex items-center justify-center flex-col w-full px-8 h-[300px] text-left order-2 md:order-none">
                <p className="font-bold text-3xl mb-8 uppercase">Le borse sono completamente artigianali?</p>
                <p className="text-xl mb-2 w-full">Sì, le nostre borse sono completamente artigianali.</p>
                <p className="text-xl mb-2 w-full">Ogni borsa è frutto di un lungo e accurato processo di lavorazione, che coinvolge diverse fasi: il taglio, la cucitura, l’assemblaggio, la rifinitura e il controllo qualità.</p>
                <p className="text-xl mb-2 w-full">Ogni borsa è firmata dal suo artigiano, che ne garantisce l’autenticità e l’eccellenza.</p>
              </div>
              <div className="p-4 order-1 md:order-none">
                <video autoPlay muted loop disablePictureInPicture className="rounded-3xl w-full" src="https://bellafewdgfwsdg.sirv.com/main.mp4"></video>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900">
          <div className="max-w-[1200px] mx-auto dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center p-0 sm:p-4 md:p-8">
              <div className="p-4">
                <img className="w-full rounded-3xl" src="https://bellafewdgfwsdg.sirv.com/1694860409-489b9f6dbc185251230077aeadf22471.avif" />
              </div>
              <div className="flex items-center justify-center flex-col w-full px-8 h-[300px] text-left">
                <p className="font-bold text-3xl mb-8 uppercase">Come scegliete i colori, i modelli e gli stili delle vostre borse?</p>
                <p className="text-xl mb-2 w-full">Scegliamo i colori, i modelli e gli stili delle nostre borse in base alle tendenze della moda, alla nostra creatività e al gusto dei nostri clienti.</p>
                <p className="text-xl mb-2 w-full">Ci ispiriamo alle stagioni, alle culture, alle emozioni e alle personalità.</p>
                <p className="text-xl mb-2 w-full">Ogni borsa è pensata per esprimere il carattere e lo stile di chi la indossa.</p>
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}
export default checkout;