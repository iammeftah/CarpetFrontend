import React, { useState, useEffect } from 'react';
import { HeroParallax } from "../components/ui/hero-parallax";
import Header from "../components/Header";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Search, ChevronDown, ShoppingCart, X, ChevronsDown } from 'lucide-react';
import carpetData from '../carpetData.json';
import ProductDetails from "../components/ProductDetails";

interface Product {
    id: number;
    length: number;
    width: number;
    color: string;
    price: string;
    availability: boolean;
    condition: string;
    description: string;
    weight: number;
    model: string;
    quality: string;
    material: string;
    title: string;
    reference: string;
    image: string;
    updatedAt: string;
    category: {
        id: string;
        name: string;
    };
    subcategory: {
        id: string;
        name: string;
    };
    type: {
        id: string;
        name: string;
        thumbnail: string;
    };
    promotions?: {
        id: number;
        discountPercentage: number;
        startDate: string;
        endDate: string;
    }[];
}

export const heroProducts = carpetData.products.map(product => ({
    title: product.title,
    link: '#gallery',
    thumbnail: product.image
}));


export function TapisPage() {
    const [products, setProducts] = useState<Product[]>(carpetData.products);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(carpetData.products);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 6000]);
    const [sortOption, setSortOption] = useState("");
    const [showDialog, setShowDialog] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [activeDropdown, setActiveDropdown] = useState("");

    useEffect(() => {
        filterProducts();
    }, [searchTerm, selectedCategory, priceRange, sortOption]);

    const filterProducts = () => {
        let filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === "" || product.category.name === selectedCategory) &&
            parseFloat(product.price) >= priceRange[0] && parseFloat(product.price) <= priceRange[1]
        );

        if (sortOption === "price-asc") {
            filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortOption === "price-desc") {
            filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }

        setFilteredProducts(filtered);
    };

    const categories = Array.from(new Set(products.map(product => product.category.name)));
    const maxPrice = 6000;

    const clearFilters = () => {
        setSelectedCategory("");
        setPriceRange([0, maxPrice]);
        setSortOption("");
        setActiveDropdown("");
    };

    const toggleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);
    };

    const { scrollY } = useScroll();
    const scrollIndicatorY = useTransform(scrollY, [0, 300], [0, 100]);
    const scrollIndicatorOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen">
            <Header/>
            <HeroParallax products={heroProducts}/>
            <motion.div
                className="absolute bottom-10 transform text-neutral-800 dark:text-neutral-200 flex flex-col items-center w-full"
                style={{
                    y: scrollIndicatorY,
                    opacity: scrollIndicatorOpacity,
                }}
            >
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    <span className="text-sm mb-2">Faites défiler vers le bas pour en savoir plus</span>
                    <ChevronsDown className="h-6 w-6 mx-auto"/>
                </motion.div>
            </motion.div>

            <main id="gallery" className="container mx-auto px-4 py-16">
                <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-200">
                    Notre Collection de Tapis
                </h2>

                <div className="mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
                        <div className="relative w-full md:w-1/4">
                            <input
                                className="w-full bg-white dark:bg-neutral-800 outline-none rounded-xl border border-neutral-300 dark:border-neutral-700 px-4 py-2 pr-10 text-sm text-neutral-800 dark:text-neutral-200 transition-all duration-200"
                                placeholder="Rechercher..."
                                type="search"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search
                                className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 dark:text-neutral-500"/>
                        </div>
                        <div className="flex gap-2 relative">
                            {[
                                {name: "Catégorie", options: categories},
                                {name: "Prix", options: ["€0 - €1000", "€1000 - €3000", "€3000 - €6000"]},
                                {name: "Trier par", options: ["Prix: Croissant", "Prix: Décroissant"]}
                            ].map((filter) => (
                                <div key={filter.name} className="relative">
                                    <button
                                        onClick={() => toggleDropdown(filter.name)}
                                        className="px-4 py-2 text-sm font-medium border border-neutral-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all duration-300 flex items-center"
                                    >
                                        {filter.name} <ChevronDown className="ml-2 h-4 w-4"/>
                                    </button>
                                    <AnimatePresence>
                                        {activeDropdown === filter.name && (
                                            <motion.div
                                                initial={{opacity: 0, y: -10}}
                                                animate={{opacity: 1, y: 0}}
                                                exit={{opacity: 0, y: -10}}
                                                transition={{duration: 0.2}}
                                                className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 overflow-hidden"
                                            >
                                                <div className="py-1 max-h-60 overflow-y-auto">
                                                    {filter.options.map((option) => (
                                                        <button
                                                            key={option}
                                                            onClick={() => {
                                                                if (filter.name === "Catégorie") {
                                                                    setSelectedCategory(option);
                                                                } else if (filter.name === "Prix") {
                                                                    const [min, max] = option.split(" - ").map(price => parseInt(price.replace("€", "")));
                                                                    setPriceRange([min, max]);
                                                                } else if (filter.name === "Trier par") {
                                                                    setSortOption(option === "Prix: Croissant" ? "price-asc" : "price-desc");
                                                                }
                                                                setActiveDropdown("");
                                                            }}
                                                            className="block w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                                        >
                                                            {option}
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {(selectedCategory || priceRange[1] < maxPrice || sortOption) && (
                        <motion.div
                            initial={{opacity: 0, y: -10}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -10}}
                            className="flex flex-wrap gap-2 mt-4"
                        >
                            {selectedCategory && (
                                <div
                                    className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full text-sm flex items-center">
                                    {selectedCategory}
                                    <button onClick={() => setSelectedCategory("")} className="ml-2 focus:outline-none">
                                        <X className="h-3 w-3"/>
                                    </button>
                                </div>
                            )}
                            {priceRange[1] < maxPrice && (
                                <div
                                    className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full text-sm flex items-center">
                                    €{priceRange[0]} - €{priceRange[1]}
                                    <button onClick={() => setPriceRange([0, maxPrice])}
                                            className="ml-2 focus:outline-none">
                                        <X className="h-3 w-3"/>
                                    </button>
                                </div>
                            )}
                            {sortOption && (
                                <div
                                    className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full text-sm flex items-center">
                                    {sortOption === "price-asc" ? "Prix: Croissant" : "Prix: Décroissant"}
                                    <button onClick={() => setSortOption("")} className="ml-2 focus:outline-none">
                                        <X className="h-3 w-3"/>
                                    </button>
                                </div>
                            )}
                            {(selectedCategory || priceRange[1] < maxPrice || sortOption) && (
                                <button
                                    onClick={clearFilters}
                                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300"
                                >
                                    Effacer les filtres
                                </button>
                            )}
                        </motion.div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.3}}
                            className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            <div className="relative h-64">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                                {product.promotions && product.promotions.length > 0 && (
                                    <span
                                        className="absolute top-2 right-2 bg-neutral-800 text-white px-2 py-1 rounded text-sm">
              {product.promotions[0].discountPercentage}% OFF
            </span>
                                )}
                                {!product.availability && (
                                    <span
                                        className="absolute top-2 left-2 bg-neutral-600 text-white px-2 py-1 rounded text-sm">
              Rupture de stock
            </span>
                                )}
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-200">{product.title}</h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{product.description}</p>
                                <div className="flex justify-between items-center mb-2">
                                    <span
                                        className="text-lg font-bold text-neutral-800 dark:text-neutral-200">€{product.price}</span>
                                    <span
                                        className={`text-sm ${product.availability ? 'text-neutral-600' : 'text-neutral-400'}`}>
              {product.availability ? 'En stock' : 'Rupture de stock'}
            </span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span
                                        className="text-sm text-neutral-600 dark:text-neutral-400">{product.material}</span>
                                    <span
                                        className="text-sm text-neutral-600 dark:text-neutral-400">Qualité: {product.quality}</span>
                                </div>
                                <div className="mt-auto flex justify-between">
                                    <button
                                        onClick={() => {
                                            setSelectedProduct(product);
                                            setShowDialog(true);
                                        }}
                                        className="px-4 py-2 text-sm rounded text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-300"
                                    >
                                        Voir les détails
                                    </button>
                                    <button
                                        disabled={!product.availability}
                                        className={`px-4 py-2 text-sm rounded ${product.availability ? 'bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black hover:bg-neutral-700' : 'bg-neutral-400 text-neutral-600 cursor-not-allowed'} transition-colors duration-300`}
                                    >
                                        <ShoppingCart className="inline-block mr-2 h-4 w-4"/>
                                        {product.availability ? 'Ajouter au panier' : 'Indisponible'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            {showDialog && selectedProduct && (
                <ProductDetails
                    product={selectedProduct}
                    onClose={() => setShowDialog(false)}
                />
            )}
        </div>
    );
}


{/*
export const heroProducts = [
    {
        title: "Clair de Lune",
        link: "https://gomoonbeam.com",
        thumbnail:
            "https://plus.unsplash.com/premium_photo-1675738774551-cf86de1fd242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Curseur",
        link: "https://cursor.so",
        thumbnail:
            "https://images.unsplash.com/photo-1680633480092-fe3d1c0a164a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Vagabond",
        link: "https://userogue.com",
        thumbnail:
            "https://images.unsplash.com/photo-1675177649590-22a42a90cdd7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Éditorial",
        link: "https://editorially.org",
        thumbnail:
            "https://plus.unsplash.com/premium_photo-1675738774365-c542862be2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Editrix IA",
        link: "https://editrix.ai",
        thumbnail:
            "https://media.istockphoto.com/id/2154121852/photo/close-up-of-a-beautiful-green-carpet-texture.webp?b=1&s=612x612&w=0&k=20&c=iAyOC1gBKFQFterdBqBVJRFFNAKlNcoN_ZLdQW8wCZQ=",
    },
    {
        title: "Pixel Parfait",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "https://media.istockphoto.com/id/2164989138/photo/voyage-a-fes.webp?b=1&s=612x612&w=0&k=20&c=e2Sg_6xi2kLTZ0LniErKbFFXgZLtpJLxwFwHiGS2OGs=",
    },
    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "https://media.istockphoto.com/id/2154080695/photo/close-up-many-different-carpet-samples.jpg?s=612x612&w=0&k=20&c=ZbS2oN6VmxJUeqJkN5gqcj2bXKQi4bR3KEY8hjZc0cc=",
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            "https://media.istockphoto.com/id/486167735/photo/turkish-carpet.webp?b=1&s=612x612&w=0&k=20&c=w2_UxrZFpFcwdNLEx7yofSyREUqbD1EN4wCuBX2S8qA=",
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "https://media.istockphoto.com/id/177369817/photo/carpet.webp?b=1&s=612x612&w=0&k=20&c=6nuzc10W9fADLWAht4o7qP5cA2y13Q4LhPPIZGhcegs=",
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "https://media.istockphoto.com/id/182188253/photo/red-carpet.webp?b=1&s=612x612&w=0&k=20&c=o4oG2m7EOoJ8-w3ZIbTssP4ttNegtX9a1R9QWOduU6g=",
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "https://media.istockphoto.com/id/185300349/photo/soccer-field.webp?b=1&s=612x612&w=0&k=20&c=ndy2GiCua6xGT5RBMw1SPqwXTPgdncbZmBwf_PoKgDY=",
    },
    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            "https://media.istockphoto.com/id/172452491/photo/ice-blue-carpet.webp?b=1&s=612x612&w=0&k=20&c=HpKwly7e32j-OdIjYtpzq8mRQ89eU1zSwGU1RMz_tkw=",
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "https://media.istockphoto.com/id/172321133/photo/a-close-up-of-a-tan-carpet-swatch.webp?b=1&s=612x612&w=0&k=20&c=YKsOUw-FsagLB1Jftb9Gx78_dGj6S4gdzmxa7B3A2sg=",
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "https://plus.unsplash.com/premium_photo-1675802522643-24ad09d1cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnBldCUyMHRleHR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "https://plus.unsplash.com/premium_photo-1675788271687-6a50324324e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

*/}