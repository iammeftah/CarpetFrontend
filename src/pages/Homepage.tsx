import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import Header from "../components/Header";
import carpetData from "../carpetData.json";

// Import the Product interface
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

export function Homepage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
    const [buttonWidths, setButtonWidths] = useState<number[]>([]);
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        // Load products from JSON data
        setProducts(carpetData.products);
        if (carpetData.products.length > 0) {
            setSelectedCategory(carpetData.products[0].category.id);
            setSelectedSubcategory(carpetData.products[0].subcategory.id);
        }
    }, []);

    useEffect(() => {
        const widths = buttonsRef.current.map(button => button?.offsetWidth || 0);
        setButtonWidths(widths);
    }, [products]);

    const getOffsetLeft = (index: number) => {
        return buttonWidths.slice(0, index).reduce((sum, width) => sum + width, 0);
    };

    const categories = Array.from(new Set(products.map(p => p.category.id)));
    const subcategories = Array.from(new Set(products.filter(p => p.category.id === selectedCategory).map(p => p.subcategory.id)));
    const filteredProducts = products.filter(p => p.category.id === selectedCategory && p.subcategory.id === selectedSubcategory);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <AuroraBackground>
                    <div className="w-full relative min-h-screen flex flex-col">
                        <Header />
                        <motion.div
                            initial={{ opacity: 0.0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="flex-grow flex flex-col gap-4 items-center justify-center px-4 pt-16 lg:pt-24"
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center dark:text-white text-black">
                                Découvrez les tapis de luxe
                            </h1>
                            <p className="font-light text-base md:text-xl lg:text-2xl text-center dark:text-neutral-200 text-neutral-800 py-4 max-w-3xl">
                                Transformez votre espace avec notre collection exquise de tapis fabriqués à la main.
                            </p>
                            <button className="bg-black dark:bg-white text-white dark:text-black rounded-full px-6 py-3 text-lg font-semibold hover:opacity-80 transition-opacity">
                                Consulter nouveauté
                            </button>
                        </motion.div>
                    </div>
                </AuroraBackground>
            </div>

            <main className="w-full px-4 md:px-32 py-16 text-black dark:text-white min-h-screen  bg-neutral-50 dark:bg-[#18181b] ">
                <h2 className="text-4xl font-bold text-center mb-12">Explorez Nos Collections</h2>

                {/* Categories - Updated for consistent wrapping */}
                <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                        {categories.map((category) => (
                            <div key={category} className="relative">
                                <motion.button
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setSelectedSubcategory(products.find(p => p.category.id === category)?.subcategory.id || '');
                                    }}
                                    className={`px-4 py-2 text-sm md:text-base font-medium transition-colors duration-200 relative z-10 rounded-full ${
                                        selectedCategory === category
                                            ? 'text-white dark:text-black'
                                            : 'text-gray-600 dark:text-gray-300'
                                    }`}
                                >
                                    {products.find(p => p.category.id === category)?.category.name}
                                </motion.button>
                                {selectedCategory === category && (
                                    <motion.div
                                        className="absolute inset-0 bg-neutral-500 dark:bg-neutral-200 shadow-lg z-0 rounded-full"
                                        layoutId="categoryBackground"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subcategories - Updated to match the category style */}
                <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                        {subcategories.map((subcategory) => (
                            <div key={subcategory} className="relative">
                                <motion.button
                                    onClick={() => setSelectedSubcategory(subcategory)}
                                    className={`px-4 py-2 text-sm md:text-base font-medium transition-colors duration-200 relative z-10 rounded-full ${
                                        selectedSubcategory === subcategory
                                            ? 'text-white dark:text-black'
                                            : 'text-gray-600 dark:text-gray-300'
                                    }`}
                                >
                                    {products.find(p => p.subcategory.id === subcategory)?.subcategory.name}
                                </motion.button>
                                {selectedSubcategory === subcategory && (
                                    <motion.div
                                        className="absolute inset-0 bg-neutral-400 dark:bg-neutral-300 shadow-lg z-0 rounded-full"
                                        layoutId="subcategoryBackground"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Products */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${selectedCategory}-${selectedSubcategory}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative h-64">
                                    <motion.img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <div className="p-4 flex flex-col justify-between h-48">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{product.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Mis à jour le {new Date(product.updatedAt).toLocaleDateString()}
                    </span>
                                        <button className="inline-flex w-32 h-10 items-center justify-center rounded-md border font-medium transition-colors bg-black text-white border-neutral-800 hover:bg-neutral-900 dark:bg-white dark:text-black dark:border-neutral-200 dark:hover:bg-neutral-100">
                                            Voir détails
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}