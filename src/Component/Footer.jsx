import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaHome, FaList, FaFire, FaEnvelopeOpenText, FaInfoCircle, FaConciergeBell, FaStar, FaTshirt, FaUtensils, FaEllipsisH } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12 shadow-lg border-t border-gray-700 hover:cursor-pointer z-10">
            <div className="container mx-auto grid grid-cols-1  md:grid-cols-4 gap-8 px-3 md:px-6">

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center">
                        Adresse
                    </h3>
                    <div className="space-y-3 text-gray-300 text-sm">
                        <p className="flex items-center">
                            <FaMapMarkerAlt className="mr-3 flex-shrink-0" />
                            Sidi Bel Abbès, 22000, Algérie
                        </p>
                        <p className="flex items-center">
                            <FaPhoneAlt className="mr-3 flex-shrink-0" />
                            0660 03 08 42
                        </p>
                        <p className="flex items-center">
                            <FaEnvelope className="mr-3 flex-shrink-0" />
                            contact@afrahdz.com
                        </p>
                    </div>
                    <div className="flex space-x-4 mt-6 text-lg">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <FaTwitter className="hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <FaFacebook className="hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <FaYoutube className="hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <FaInstagram className="hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>


                <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center">
                        Menu
                    </h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        {[
                            [FaHome, 'Accueil'],
                            [FaList, 'Catégorie'],
                            [FaFire, 'Tendances'],
                            [FaEnvelopeOpenText, 'Contactez-nous'],
                            [FaInfoCircle, 'À propos']
                        ].map(([Icon, text], index) => (
                            <li key={index} className="hover:text-white transition-colors duration-300 flex items-center">
                                <Icon className="mr-3 flex-shrink-0 text-sm" />
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services Section */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center">
                        Nos Services
                    </h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        {[
                            [FaStar, 'Salle de mariage'],
                            [FaTshirt, 'Traditions'],
                            [FaTshirt, 'Robes et tenues'],
                            [FaUtensils, 'Cuisine'],
                            [FaEllipsisH, '... Plus']
                        ].map(([Icon, text], index) => (
                            <li key={index} className="hover:text-white transition-colors duration-300 flex items-center">
                                <Icon className="mr-3 flex-shrink-0 text-sm" />
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Popular Section */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center">
                        <FaFire className="mr-3 flex-shrink-0" />
                        Populaire
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            {
                                title: "Salle Des Fetes",
                                image: "https://www.afrahdz.com/imgs/salle-de-fete.jpg",
                            },
                            {
                                title: "Negafette",
                                image: "https://www.afrahdz.com/imgs/negaf5.webp",
                            },
                            {
                                title: "Location de Voiture",
                                image: "https://www.afrahdz.com/imgs/Audi.webp",
                            },
                            {
                                title: "DJ",
                                image: "https://www.afrahdz.com/imgs/dj.webp",
                            },
                            {
                                title: "Chedda & Robes",
                                image: "https://www.afrahdz.com/imgs/robe8.webp",
                            },
                            {
                                title: "Pâtisserie & Gâteaux",
                                image: "https://www.afrahdz.com/imgs/piece1.webp",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="aspect-square overflow-hidden rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>

            <div className="text-center text-gray-500 mt-12 pt-4 border-t border-gray-400 text-sm h-4">
                © 2025 Tous droits réservés
            </div>
        </footer>
    );
};

export default Footer;
