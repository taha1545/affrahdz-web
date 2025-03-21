import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope, faBell, faUserCircle, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";

function Navbar() {
    const location = useLocation();
    const [isLogin, setLogin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className="flex fixed top-0 w-full h-20 p-1 items-center bg-white shadow-sm z-50">

            <div className="h-16 md:w-18  flex items-center justify-center p-2 md:ml-[3%]">
                <img src="/logo_ic.png" alt="Logo" className="h-16 object-contain" />
            </div>

            <ul className="hidden md:flex items-center gap-3 font-medium text-base lg:ml-[7%] ml-[3%] h-full">
    {[
        { name: "Accueil", path: "/" },
        { name: "Catégories", path: "/categories" },
        { name: "Top Annonces", path: "/top-annonces" },
        { name: "Contact", path: "/contact" },
        { name: "À Propos", path: "/propos" },
    ].map((link) => (
        <li
            key={link.path}
            className={`relative flex items-center cursor-pointer pb-1 px-4 py-2 transition-all duration-300 ease-in-out h-full whitespace-nowrap
            ${location.pathname === link.path
                    ? "text-blue-800 bg-gray-50 after:scale-x-100 after:bg-[#5173c2]"
                    : "text-[#363535] hover:text-blue-500 hover:bg-gray-50 after:scale-x-0 hover:after:scale-x-100"
                }
            after:absolute after:top-0 after:left-0 after:w-full after:h-[4px] after:bg-[#B8257D] after:transition-transform after:duration-300 after:origin-left`}
        >
            <a href={link.path} className="text-base"> 
                {link.name}
            </a>
            {link.name === "Top Annonces" && (
                <span className="text-yellow-400 text-sm absolute top-4 right-0">⭐</span>
            )}
        </li>
    ))}
</ul>


            <div className="ml-auto flex items-center gap-4 mr-4">
                <button
                    aria-label="Change language"
                    className="p-2.5 rounded-full text-gray-600 hover:text-[#B8257D] hover:bg-gray-100 
                    transition-colors duration-300 w-12 h-12 flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faEarthEurope} className="text-xl" />
                </button>

                <div className="hidden md:flex items-center gap-4">
                    {isLogin ? (
                        <>
                            <button
                                aria-label="Notifications"
                                className="p-2.5 rounded-full text-gray-600 hover:text-[#B8257D] hover:bg-gray-100 
                                transition-colors duration-300 w-12 h-12 flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={faBell} className="text-xl" />
                            </button>
                            <button
                                aria-label="Profile menu"
                                className="p-2.5 rounded-full text-gray-600 hover:text-[#B8257D] hover:bg-gray-100 
                                transition-colors duration-300 w-12 h-12 flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={faUserCircle} className="text-xl" />
                            </button>
                        </>
                    ) : (
                        <div className=" hidden lg:flex items-center gap-2 ">
                            <button className="px-3 py-2.5 font-semibold text-[#B8257D] bg-white border-2 border-[#B8257D] rounded-md 
                                hover:bg-[#B8257D] hover:text-white transition-all duration-300 text-sm">
                                Inscription
                            </button>
                            <button className="px-4 py-2.5 font-semibold text-white bg-[#B8257D] rounded-md 
                                hover:bg-[#9B1F69] transition-all duration-300 text-sm">
                                Connexion
                            </button>
                        </div>
                    )}
                </div>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors duration-300"
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-2xl" />
                </button>
            </div>


            <div className={`md:hidden fixed top-20 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className="flex flex-col py-4">
                    {[
                        { name: "Accueil", path: "/" },
                        { name: "Catégories", path: "/categories" },
                        { name: "Top Annonces", path: "/top-annonces" },
                        { name: "Contact", path: "/contact" },
                        { name: "À Propos", path: "/propos" },
                    ].map((link) => (
                        <li
                            key={link.path}
                            className={`px-6 py-3 ${location.pathname === link.path ? 'bg-blue-50 text-blue-800' : 'text-gray-700'}`}
                        >
                            <a href={link.path} className="block w-full">{link.name}</a>
                        </li>
                    ))}
                </ul>

                {!isLogin && (
                    <div className="flex flex-col gap-4 p-6 border-t">
                        <button className="w-full px-4 py-3 font-semibold text-[#B8257D] bg-white border-2 border-[#B8257D] rounded-md 
                            hover:bg-[#B8257D] hover:text-white transition-all duration-300">
                            Inscription
                        </button>
                        <button className="w-full px-4 py-3 font-semibold text-white bg-[#B8257D] rounded-md 
                            hover:bg-[#9B1F69] transition-all duration-300">
                            Connexion
                        </button>
                    </div>
                )}
            </div>
            
        </nav>
    );
}

export default Navbar;