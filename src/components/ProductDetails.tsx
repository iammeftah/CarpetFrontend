
import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface Product {
    id: number;
    Longueur: number;
    Largeur: number;
    couleur: string;
    prix: string;
    Disponabilite: boolean;
    Etat: string;
    Description: string;
    Poids: number;
    Model: string;
    Qualite: string;
    Matiere: string;
    Titre: string;
    reference: string;
    Image: string;
    updatedAt: string;
    Category?: { id: number; Nom: string };
    SousCategories?: { id: number; Titre: string };
    Types?: { id: number; Titre: string };
    commandes: any[];
    promos: any[];
}

interface EnhancedProductModalProps {
    product: Product | null;
    onClose: () => void;
}

export default function ProductDetails({ product, onClose }: EnhancedProductModalProps) {
    console.log("ProductDetails received product:", product);

    if (!product) {
        return null;
    }

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
                            src={product.Image}
                            alt={product.Titre}
                            className="w-full h-64 md:h-full object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-neutral-800 text-white px-2 py-1 rounded text-sm">
                            {product.prix} MAD
                        </span>
                        <span className={`absolute top-4 right-4 px-2 py-1 rounded text-sm ${product.Disponabilite ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                            {product.Disponabilite ? 'En stock' : 'Rupture de stock'}
                        </span>
                    </div>
                    <div className="md:w-1/2 p-6 overflow-y-auto max-h-[80vh]" data-aos="fade-left">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">{product.Titre}</h2>
                            <button
                                onClick={onClose}
                                className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors duration-200"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{product.Description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm text-neutral-700 dark:text-neutral-300">
                            <div>
                                <p className="font-semibold">Dimensions:</p>
                                <p>{product.Longueur}cm x {product.Largeur}cm</p>
                            </div>
                            <div>
                                <p className="font-semibold">Poids:</p>
                                <p>{product.Poids}kg</p>
                            </div>
                            <div>
                                <p className="font-semibold">Couleur:</p>
                                <p>{product.couleur}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Modèle:</p>
                                <p>{product.Model}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Référence:</p>
                                <p>{product.reference}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Catégorie:</p>
                                <p>{product.Category?.Nom || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Sous-catégorie:</p>
                                <p>{product.SousCategories?.Titre || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Type:</p>
                                <p>{product.Types?.Titre || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Qualité:</p>
                                <p>{product.Qualite}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Matière:</p>
                                <p>{product.Matiere}</p>
                            </div>
                            <div>
                                <p className="font-semibold">État:</p>
                                <p>{product.Etat}</p>
                            </div>
                        </div>
                        <div className="mt-6">
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