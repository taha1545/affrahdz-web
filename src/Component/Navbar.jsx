import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function Navbar() {
    const location = useLocation();
    const [IsLogin, SetLogin] = useState(false);

    return (
        <nav className="flex fixed top-0 w-full h-20 p-1 items-center bg-white shadow-sm z-10">
            <div className="w-[10%] flex items-center justify-center p-2">
                <img src="/logo_ic.png" alt="Logo" className="h-16 object-contain" />
            </div>

            <ul className="w-1/2 flex items-center gap-6 font-medium text-base ml-[7%] h-full">
                {[
                    { name: "Accueil", path: "/" },
                    { name: "Catégories", path: "/categories" },
                    { name: "Top Annonces", path: "/top-annonces" },
                    { name: "Contact", path: "/contact" },
                    { name: "À Propos", path: "/propos" },
                ].map((link) => (
                    <li
                        key={link.path}
                        className={`relative flex items-center cursor-pointer pb-1 px-4 py-2 transition-all duration-300 ease-in-out  h-full
                        ${location.pathname === link.path
                                ? "text-blue-800  bg-gray-50 after:scale-x-100 after:bg-[#5173c2]"
                                : "text-[#363535] hover:text-blue-500 hover:bg-gray-50 after:scale-x-0 hover:after:scale-x-100"
                            }
                        after:absolute after:top-0 after:left-0 after:w-full after:h-[4px] after:bg-[#B8257D] after:transition-transform after:duration-300 after:origin-left`}
                    >
                        <a href={link.path}>{link.name}</a>
                        {link.name === "Top Annonces" && (
                            <span className="text-yellow-400 text-sm absolute top-4 right-0">⭐</span>
                        )}
                    </li>
                ))}
            </ul>

            <div className={`ml-auto flex items-center gap-4 mr-2 w-1/4 ${IsLogin ? 'justify-end' : 'justify-between'}`}>
                <button
                    aria-label="Change language"
                    className="p-2.5 rounded-full text-gray-600 hover:text-[#B8257D] hover:bg-gray-100 
                transition-colors duration-300 w-16 h-16 flex items-center justify-center "
                >
                    <FontAwesomeIcon icon={faEarthEurope} className="text-2xl" />
                </button>

                {IsLogin ? (
                    <div className="flex items-center gap-4 mr-4">
                        <button
                            aria-label="Notifications"
                            className="p-2.5 rounded-full text-gray-600 hover:text-[#B8257D] hover:bg-gray-100 
                transition-colors duration-300 w-16 h-16 flex items-center justify-center "
                        >
                            <FontAwesomeIcon icon={faBell} className="text-2xl" />
                        </button>
                        <button
                            aria-label="Profile menu"
                            className="p-2.5 rounded-full text-gray-600 hover:text-[#B8257D] hover:bg-gray-100 
                transition-colors duration-300 w-16 h-16 flex items-center justify-center mr-2"
                        >
                            <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 w-[80%] justify-center ">
                        <button className="px-3 py-2.5 font-semibold text-[#B8257D] bg-white border-2 border-[#B8257D] rounded-md 
                         hover:bg-[#B8257D] hover:text-white transition-all duration-300
                         active:scale-95 shadow-sm hover:shadow-md text-sm">
                            Inscription
                        </button>
                        <button className="px-4 py-2.5 font-semibold text-white bg-[#B8257D] rounded-md 
                            hover:bg-[#9B1F69] transition-all duration-300
                              active:scale-95 shadow-sm hover:shadow-md flex items-center gap-2
                              relative group text-sm">
                            <span>Connexion</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25h6.75a2.25 2.25 0 002.25-2.25V15M21 12h-9m0 0l3-3m-3 3l3 3"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

        </nav>
    );
}

export default Navbar;