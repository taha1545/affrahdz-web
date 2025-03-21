import Navbar from "../Component/Navbar";
import Categories from "../Component/Categories";
import Footer from "../Component/Footer";
import { CheckCircle } from "lucide-react";

function Home() {
   return (
      <>
         <Navbar />

         <main className="bg-gray-50 flex items-center h-screen text-black px-6 md:px-10 pt-2">
            <div className="flex flex-col lg:w-1/2 space-y-4 ml-[5%] h-[65%] pt-[3%] relative">
               <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                  AFRAH DZ -
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B8257D] to-[#7a0f4d]">
                     Donnez Vie à Vos Événements !
                  </span>
               </h3>
               <p className="text-base md:text-lg text-gray-600">
                  Bienvenue chez <span className="font-semibold text-[#B8257D]">Afrahdz</span>, votre partenaire pour des moments inoubliables.
               </p>
               <p className="text-base md:text-lg text-gray-600">
                  <span className="font-semibold text-[#B8257D]">Mariages • Anniversaires • Événements d'entreprise</span> – Une organisation clé en main pour une expérience unique.
               </p>
               <p className="text-base md:text-lg text-gray-600">
                  Notre équipe passionnée crée des prestations sur mesure pour des souvenirs mémorables.
               </p>

               <div className="pt-7">
                  <button className="  px-6 py-3 text-white bg-gradient-to-r from-[#B8257D] to-[#9B1F69] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold w-3/4 md:w-1/2">
                     Découvrez Nos Services →
                  </button>
               </div>
            </div>
         </main>

         <Categories />

         <section className="bg-gray-50 h-screen text-gray-900 py-10 pb-16 pl-12 px-10 md:px-20 lg:flex lg:items-center lg:justify-between">

            <div className="lg:w-1/2 space-y-6">
               <h2 className="text-[#B8257D] text-xl font-semibold uppercase">À Propos</h2>
               <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Le <span className="text-[#B8257D]">1er site en Algérie</span> Spécialisé dans les Fêtes et Mariages.
               </h3>
               <p className="text-gray-700">
                  Bienvenue chez <span className="font-semibold text-[#B8257D]">Afrahdz</span> – Votre partenaire d'exception pour des moments inoubliables !
                  Nous donnons vie à vos rêves d'événements exceptionnels.
               </p>
               <p className="text-gray-700">
                  Que vous planifiez un mariage, une fête d'anniversaire ou une réception d'entreprise, notre équipe est là pour créer des instants magiques.
               </p>

               <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                     <CheckCircle className="text-[#B8257D] w-5 h-5 mr-2" /> Plein de rubriques nécessaires pour vos événements.
                  </li>
                  <li className="flex items-center text-gray-700">
                     <CheckCircle className="text-[#B8257D] w-5 h-5 mr-2" /> Les meilleures annonces et services dans tous les domaines.
                  </li>
                  <li className="flex items-center text-gray-700">
                     <CheckCircle className="text-[#B8257D] w-5 h-5 mr-2" /> Disponible partout en Algérie 24H/24.
                  </li>
                  <li className="flex items-center text-gray-700">
                     <CheckCircle className="text-[#B8257D] w-5 h-5 mr-2" /> Des animations pour toutes les occasions.
                  </li>
                  <li className="flex items-center text-gray-700">
                     <CheckCircle className="text-[#B8257D] w-5 h-5 mr-2" /> Disponible sur Google Play et App Store.
                  </li>
               </ul>
            </div>

            <div className=" hidden lg:w-[40%] bg-gray-300 xl:flex h-[80%] py-10 pb-16 pl-12 px-10 md:px-20 lg:flex lg:items-center text-gray-300">
               ""
            </div>

         </section>


         <Footer />
      </>
   );

}

export default Home;
