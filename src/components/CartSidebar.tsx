import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    products: Product[];
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, products }) => {
    const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

    return (
        <div className={`fixed top-0 right-0 h-full w-full md:w-1/4 bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-70 backdrop-blur-md shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}>
            <div className="p-6">
                <button onClick={onClose} className="absolute top-4 right-4 text-black dark:text-white hover:text-opacity-70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Votre panier</h2>
                {products.length === 0 ? (
                    <p className="text-black dark:text-white">Votre panier est vide.</p>
                ) : (
                    <div>
                        {products.map((product) => (
                            <div key={product.id} className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="font-semibold text-black dark:text-white">{product.name}</h3>
                                    <p className="text-sm text-black dark:text-white opacity-70">Quantité: {product.quantity}</p>
                                </div>
                                <p className="text-black dark:text-white">{product.price * product.quantity}€</p>
                            </div>
                        ))}
                        <div className="mt-6 pt-6 border-t border-black dark:border-white border-opacity-20">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-black dark:text-white">Total</h3>
                                <p className="text-lg font-semibold text-black dark:text-white">{total}€</p>
                            </div>
                        </div>
                        <button className="mt-6 w-full bg-black dark:bg-white text-white dark:text-black py-2 px-4 rounded hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-colors duration-200">
                            Passer la commande
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;