import { Loader2 } from 'lucide-react';
import React from 'react';

interface OrderFormData {
    full_name: string;
    telephone: string;
    adress: string;
    email: string;
}

interface OrderModalProps {
    showOrderModal: boolean;
    setShowOrderModal: (show: boolean) => void;
    orderFormData: OrderFormData;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOrderSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    isSubmitting: boolean;
}

export default function OrderModal({
                                       showOrderModal,
                                       setShowOrderModal,
                                       orderFormData,
                                       handleInputChange,
                                       handleOrderSubmit,
                                       isSubmitting
                                   }: OrderModalProps) {
    if (!showOrderModal) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 max-w-[600px] w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Finaliser la commande</h2>
                    <button onClick={() => setShowOrderModal(false)}
                            className="text-neutral-300 hover:text-neutral-500 text-xl">
                        &times;
                    </button>
                </div>

                <form onSubmit={handleOrderSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="full_name"
                                   className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Nom complet
                            </label>
                            <input
                                type="text"
                                id="full_name"
                                name="full_name"
                                value={orderFormData.full_name}
                                onChange={handleInputChange}
                                placeholder="Full name"
                                required
                                className="px-2 py-2 mt-1 text-sm text-black dark:text-white block w-full bg-white dark:bg-opacity-5 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-500 dark:hover:border-neutral-200 rounded-md shadow-sm placeholder:text-neutral-400 placeholder:text-opacity-100 dark:placeholder:text-neutral-500 duration-300"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="adress"
                                       className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    Adresse
                                </label>
                                <input
                                    type="text"
                                    id="adress"
                                    name="adress"
                                    value={orderFormData.adress}
                                    onChange={handleInputChange}
                                    placeholder="Adresse"
                                    required
                                    className="px-2 py-2 mt-1 text-sm text-black dark:text-white block w-full bg-white dark:bg-opacity-5 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-500 dark:hover:border-neutral-200 rounded-md shadow-sm placeholder:text-neutral-400 placeholder:text-opacity-100 dark:placeholder:text-neutral-500 duration-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="telephone"
                                       className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    id="telephone"
                                    name="telephone"
                                    value={orderFormData.telephone}
                                    onChange={handleInputChange}
                                    placeholder="Téléphone"
                                    required
                                    className="px-2 py-2 mt-1 text-sm text-black dark:text-white block w-full bg-white dark:bg-opacity-5 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-500 dark:hover:border-neutral-200 rounded-md shadow-sm placeholder:text-neutral-400 placeholder:text-opacity-100 dark:placeholder:text-neutral-500 duration-300"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={orderFormData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                required
                                className="px-2 py-2 mt-1 text-sm text-black dark:text-white block w-full bg-white dark:bg-opacity-5 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-500 dark:hover:border-neutral-200 rounded-md shadow-sm placeholder:text-neutral-400 placeholder:text-opacity-100 dark:placeholder:text-neutral-500 duration-300"
                            />
                        </div>
                    </div>

                    <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 mt-4">
                        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Informations
                            de livraison</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Livraison gratuite pour les
                            commandes de plus de 1000 MAD</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Paiement sécurisé par carte
                            bancaire ou à la livraison</p>
                    </div>

                    <div className="flex justify-end space-x-4 mt-6">
                        <button
                            type="button"
                            onClick={() => setShowOrderModal(false)}
                            className="px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-400 dark:hover:border-neutral-200 rounded-md text-neutral-700 dark:text-neutral-200 bg-white dark:bg-transparent hover:bg-neutral-50"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-4 py-2 text-sm font-medium text-white bg-neutral-800 rounded-md hover:bg-neutral-700  dark:bg-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"

                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin mr-2 h-2 w-2"/>
                                    Traitement...
                                </>
                            ) : (
                                'Confirmer'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}