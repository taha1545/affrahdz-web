export default function Categories() {
    const categories = [
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
        {
            title: "Karkabou & Groupes",
            image: "https://www.afrahdz.com/imgs/kark1.webp",
        },
        {
            title: "Groupes Motos",
            image: "https://www.afrahdz.com/imgs/moto4.webp",
        },
        {
            title: "Voyage de Noces",
            image: "https://www.afrahdz.com/imgs/voyage.webp",
        },
        {
            title: "Costume Homme",
            image: "https://www.afrahdz.com/imgs/costume-homme2.webp",
        },
        {
            title: "Camera & Photographe",
            image: "https://www.afrahdz.com/imgs/cameraman.webp",
        },
        {
            title: "Chef Cuisinier",
            image: "https://www.afrahdz.com/imgs/cuisiner.jpg",
        },
        {
            title: "Coiffure & Esthétique",
            image: "https://www.afrahdz.com/imgs/maquillage.webp",
        },
        {
            title: "Cheval & Bernous",
            image: "https://www.afrahdz.com/imgs/chev.webp",
        },
        {
            title: "Décorations & Fleurs",
            image: "https://www.afrahdz.com/imgs/fleur.webp",
        },
        {
            title: "Hotels & Nuit de Noces",
            image: "https://www.afrahdz.com/imgs/nuit.webp",
        },
        {
            title: "Bijoux & Accessoires",
            image: "https://www.afrahdz.com/imgs/parur.webp",
        },
        {
            title: "Groupes Photos Interdits",
            image: "https://www.afrahdz.com/imgs/photo2.webp",
        },
        {
            title: "Djhaz De La Mariée",
            image: "https://www.afrahdz.com/imgs/jhaz.webp",
        },
        {
            title: "Organisateurs",
            image: "https://www.afrahdz.com/imgs/af1.jpg",
        },
    ];

    return (
        <div className="bg-white flex flex-col items-center w-full h-fit px-10 py-10 pb-14 ">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-10 leading-[1.2]">
                Catégories :
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%]">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[200px] relative mb-2 
                    hover:shadow-lg transition-all duration-300 hover:scale-105 transform ">
                        <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-[100%] object-cover opacity-95"
                        />
                        <div className="absolute bottom-3 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                            <h3 className="text-lg font-semibold">{category.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
