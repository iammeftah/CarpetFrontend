import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

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

interface EnhancedProductModalProps {
    product: Product;
    onClose: () => void;
}

export default function ProductDetails({ product, onClose }: EnhancedProductModalProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 15 }}
                className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-xl max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative" data-aos="fade-right">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-64 md:h-full object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-neutral-800 text-white px-2 py-1 rounded text-sm">
              €{product.price}
            </span>
                        <span className={`absolute top-4 right-4 px-2 py-1 rounded text-sm ${product.availability ? 'bg-green-500' : 'bg-red-500'} text-white`}>
              {product.availability ? 'En stock' : 'Rupture de stock'}
            </span>
                    </div>
                    <div className="md:w-1/2 p-6 overflow-y-auto max-h-[80vh]" data-aos="fade-left">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">{product.title}</h2>
                            <button
                                onClick={onClose}
                                className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors duration-200"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{product.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm text-neutral-700 dark:text-neutral-300">
                            <div data-aos="fade-up" data-aos-delay="100">
                                <p className="font-semibold">Dimensions:</p>
                                <p>{product.length}cm x {product.width}cm</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="150">
                                <p className="font-semibold">Poids:</p>
                                <p>{product.weight}kg</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <p className="font-semibold">Couleur:</p>
                                <p>{product.color}</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="250">
                                <p className="font-semibold">Modèle:</p>
                                <p>{product.model}</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="300">
                                <p className="font-semibold">Référence:</p>
                                <p>{product.reference}</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="350">
                                <p className="font-semibold">Catégorie:</p>
                                <p>{product.category.name}</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400">
                                <p className="font-semibold">Sous-catégorie:</p>
                                <p>{product.subcategory.name}</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="450">
                                <p className="font-semibold">Type:</p>
                                <p>{product.type.name}</p>
                            </div>
                        </div>
                        <div className="mt-6" data-aos="fade-up" data-aos-delay="500">
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                Dernière mise à jour: {new Date(product.updatedAt).toLocaleDateString()}
                            </p>
                        </div>

                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}