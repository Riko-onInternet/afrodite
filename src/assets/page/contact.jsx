import { useForm } from "react-hook-form"

import Header from "../../component/header";
import Footer from "../../component/footer";

function Site() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <>
      <Header />

      <>
        <div className="overflow-hidden">
          <div className="hero-bg2 h-[500px]">
            <div className="flex justify-center items-center h-full bg-blur">
              <p className="text-white text-5xl font-semibold uppercase">Contatti</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 mb-12 md:mb-40 max-w-[1200px] mx-auto">
          <div className="px-4">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 mb-8 gap-4">
                <div className="text-black dark:text-white">
                  <label htmlFor="contactName" className="block">Nome <span className="text-red-600">*</span></label>
                  <input id="contactName" className="input w-full bg-gray-200/50 dark:bg-gray-800" type="text" {...register("First name", { required: true, maxLength: 80 })} />
                </div>
                <div className="text-black dark:text-white">
                  <label htmlFor="contactCognome" className="block">Cognome <span className="text-red-600">*</span></label>
                  <input id="contactCognome" className="input w-full bg-gray-200/50 dark:bg-gray-800" type="text" {...register("Last name", { required: true, maxLength: 100 })} />
                </div>
              </div>
              <div className="grid grid-cols-2 mb-8 gap-4">
                <div className="text-black dark:text-white">
                  <label htmlFor="contactEmial" className="block">Email <span className="text-red-600">*</span></label>
                  <input id="contactEmail" className="input w-full bg-gray-200/50 dark:bg-gray-800" type="text" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                </div>
                <div className="text-black dark:text-white">
                  <label htmlFor="contactPhone" className="block">Telefono <span className="text-red-600">*</span></label>
                  <input id="contactPhone" className="input w-full bg-gray-200/50 dark:bg-gray-800" type="tel" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                </div>
              </div>
              <div className="text-black dark:text-white">
                <div className="grid grid-cols-1 mb-8">
                  <label htmlFor="contactMessage">Messaggio</label>
                  <textarea rows="4" id="contactMessage" className="bg-gray-200/50 dark:bg-gray-800 rounded-lg px-3 py-2" />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <input type="submit" className="btn bg-gray-300 dark:bg-gray-900 dark:border-gray-900 text-black dark:text-white" />
              </div>
            </form>

          </div>
          <div className="px-4">
            <iframe className="border-8  rounded-xl border-gray-600 dark:border-gray-800 bg-gray-600 dark:bg-gray-800 w-full h-[500px] mt-10 md:mt-0 md:h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.0581128404565!2d14.218477176481786!3d42.44777962955455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331a64770d0e621%3A0x2d3f8009c1e4dcf9!2sIstituto%20Infobasic%20-%20Corsi%20triennali%20di%20Grafica%2C%20Web%2C%20Cyber%20Security%2C%20Sviluppo%20Software%2C%20Sistemista%2C%20Interior%20Design!5e0!3m2!1sit!2sit!4v1709490709081!5m2!1sit!2sit" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </>

      <Footer />
    </>
  );
}

export default Site;