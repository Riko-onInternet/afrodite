/* eslint-disable react/no-unescaped-entities */
import Header from "../../component/header";
import Footer from "../../component/footer";

function Site() {
  return (
    <>
      <Header />
      <>
        <div className="overflow-hidden">
          <div className="hero-bg h-[500px]">
            <div className="flex justify-center items-center h-full bg-blur">
              <p className="text-white text-5xl font-semibold uppercase">Info</p>
            </div>
          </div>
        </div>
        <div className="text-justify w-full">
          <div className="w-[700px] mx-auto mt-16 mb-24 opacity-70 text-black dark:text-white">
            <p className="mb-7">Fondata a Pescara nel 1951, Afrodite è uno dei più importanti brand nel settore del lusso. Sulla scia del centenario della Maison, Afrodite è proiettata verso i prossimi cento anni, continuando a ridefinire il concetto di lusso all'insegna di valori fondamentali quali creatività, tradizione artigianale e innovazione.</p>
            <p>Afrodite fa parte del Gruppo Kering, che sostiene e promuove lo sviluppo di borse tra i più importanti brand nel settore moda.</p>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}

export default Site;