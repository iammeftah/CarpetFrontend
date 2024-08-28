"use client";
import React, {useEffect, useRef, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroParallax } from "../../components/ui/hero-parallax";
import Header from "../../components/Header";

// Define types for our data structure
type Product = {
    title: string;
    thumbnail: string;
};

type ProductCategory = 'Luxe' | 'Traditionnel' | 'Moderne';

type ProductsData = {
    [key in ProductCategory]: Product[];
};



export function TapisPage() {
    const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Luxe');
    const [buttonWidths, setButtonWidths] = useState<number[]>([]);
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const widths = buttonsRef.current.map(button => button?.offsetWidth || 0);
        setButtonWidths(widths);
    }, []);

    const getOffsetLeft = (index: number) => {
        return buttonWidths.slice(0, index).reduce((sum, width) => sum + width, 0);
    };
    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <Header />
            <HeroParallax products={heroProducts} />
            <main className="container mx-auto px-4 py-16 text-black dark:text-white">
                <h2 className="text-4xl font-bold text-center mb-12">Explorez Nos Collections</h2>
                <div className="flex justify-center mb-12 relative">
                    {categories.map((category, index) => (
                        <div key={category} className="relative">
                            <motion.button
                                ref={el => buttonsRef.current[index] = el}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 text-lg font-medium transition-colors duration-200 relative z-10 ${
                                    selectedCategory === category
                                        ? 'text-white dark:text-black'
                                        : 'text-gray-600 dark:text-gray-300'
                                }`}
                            >
                                {category}
                            </motion.button>
                            {selectedCategory === category && (
                                <motion.div
                                    className="absolute bg-neutral-500 dark:bg-neutral-200 shadow-lg z-0 rounded-full"
                                    layoutId="background"
                                    transition={{type: "spring", stiffness: 300, damping: 30}}
                                    style={{
                                        top: '15%',
                                        bottom: '15%',
                                        left: 0,
                                        right: 0,
                                    }}
                                />

                            )}
                        </div>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.3}}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {products[selectedCategory].map((product: Product, index: number) => (
                            <motion.div
                                key={product.title}
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.3, delay: index * 0.1}}
                                className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative h-64">
                                    <motion.img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{scale: 1.05}}
                                        transition={{duration: 0.3}}
                                    />
                                </div>
                                <div className="p-4 flex justify-end flex-col">
                                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                    <div className="w-full flex justify-end">
                                        <button
                                            className="inline-flex w-[10rem] h-10 items-center justify-center rounded-md border font-medium transition-colors
               bg-black text-white border-neutral-800 hover:bg-neutral-900
               dark:bg-white dark:text-black dark:border-neutral-200 dark:hover:bg-neutral-100
               ">
                                            Voir les détails
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

const categories: ProductCategory[] = ["Luxe", "Traditionnel", "Moderne"];

const products: ProductsData = {
    Luxe: [
        {
            title: "Tapis de Soie Persane",
            thumbnail: "https://plus.unsplash.com/premium_photo-1675738774551-cf86de1fd242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Moquette de Cachemire",
            thumbnail: "https://plus.unsplash.com/premium_photo-1675738774365-c542862be2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Tapis d'Or Tissé",
            thumbnail: "https://media.istockphoto.com/id/2154121852/photo/close-up-of-a-beautiful-green-carpet-texture.webp?b=1&s=612x612&w=0&k=20&c=iAyOC1gBKFQFterdBqBVJRFFNAKlNcoN_ZLdQW8wCZQ=",
        },
    ],
    Traditionnel: [
        {
            title: "Kilim Anatolien",
            thumbnail: "https://images.unsplash.com/photo-1675177649590-22a42a90cdd7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Tapis Berbère",
            thumbnail: "https://media.istockphoto.com/id/2164989138/photo/voyage-a-fes.webp?b=1&s=612x612&w=0&k=20&c=e2Sg_6xi2kLTZ0LniErKbFFXgZLtpJLxwFwHiGS2OGs=",
        },
        {
            title: "Tapis Oriental Classique",
            thumbnail: "https://media.istockphoto.com/id/486167735/photo/turkish-carpet.webp?b=1&s=612x612&w=0&k=20&c=w2_UxrZFpFcwdNLEx7yofSyREUqbD1EN4wCuBX2S8qA=",
        },

    ],
    Moderne: [
        {
            title: "Tapis Géométrique Contemporain",
            thumbnail: "https://images.unsplash.com/photo-1680633480092-fe3d1c0a164a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Tapis Abstrait Minimaliste",
            thumbnail: "https://media.istockphoto.com/id/172452491/photo/ice-blue-carpet.webp?b=1&s=612x612&w=0&k=20&c=HpKwly7e32j-OdIjYtpzq8mRQ89eU1zSwGU1RMz_tkw=",
        },
        {
            title: "Tapis Design Scandinave",
            thumbnail: "https://plus.unsplash.com/premium_photo-1675788271687-6a50324324e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ],
};

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