import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import Header from "../components/Header";
import { UploadImage } from '../components/UploadImage';

interface CarpetState {
    length: number;
    width: number;
    description: string;
    color: string;
}

const PURPLE = '#6b21a8';
const DARK_CYAN = '#164e63';
const WARM_GRAY = '#a8a29e';
const LIGHT_BLUE = '#60a5fa';
const PINK = '#f472b6';
const EMERALD = '#10b981';

const colorOptions = [
    { value: PURPLE, label: 'Pourpre Royal' },
    { value: DARK_CYAN, label: 'Océan Profond' },
    { value: WARM_GRAY, label: 'Pierre Lavée' },
    { value: LIGHT_BLUE, label: 'Bleu Ciel' },
    { value: PINK, label: 'Rose Poudré' },
    { value: EMERALD, label: 'Vert Émeraude' },
];

const CarpetCustomizer: React.FC = () => {
    const [carpet, setCarpet] = useState<CarpetState>({
        length: 200,
        width: 150,
        description: '',
        color: WARM_GRAY
    })

    const [price, setPrice] = useState(299.99)
    const [carpetImage, setCarpetImage] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

    const canvasRef = useRef<HTMLCanvasElement>(null)

    const updateCarpet = useCallback((key: keyof CarpetState, value: string | number) => {
        setCarpet(prev => ({ ...prev, [key]: value }))
    }, [])

    const calculatePrice = useCallback(() => {
        let newPrice = 299.99; // prix de base
        newPrice += (carpet.length * carpet.width * 0.01);
        setPrice(newPrice);
    }, [carpet.length, carpet.width])

    useEffect(() => {
        calculatePrice()
    }, [calculatePrice])

    const handleImageUpload = (files: File[]) => {
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader()
            reader.onloadend = () => {
                setCarpetImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const previewCarpet = useCallback(() => {
        if (canvasRef.current && carpetImage) {
            const ctx = canvasRef.current.getContext('2d')
            if (ctx) {
                const img = new Image()
                img.onload = () => {
                    ctx.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height)
                    ctx.fillStyle = carpet.color
                    ctx.globalAlpha = 0.5
                    ctx.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height)
                }
                img.src = carpetImage
            }
        }
    }, [carpetImage, carpet.color])

    useEffect(() => {
        previewCarpet()
    }, [previewCarpet])

    const addToCart = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setShowToast(true)
            setToastMessage('Tapis ajouté au panier avec succès !')
            setTimeout(() => setShowToast(false), 3000)
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
            <Header />
            <main className="pt-8 md:pt-32 flex items-center justify-center w-full min-h-screen">
                <div className="container mx-auto px-8 md:px-64 py-8">
                    <h1 className="text-4xl font-bold mb-6">Concepteur de Tapis Personnalisé</h1>
                    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Personnalisez Votre Tapis</h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="length" className="block text-sm font-medium mb-1">Longueur (cm)</label>
                                    <input
                                        id="length"
                                        type="number"
                                        value={carpet.length}
                                        onChange={(e) => updateCarpet('length', parseInt(e.target.value))}
                                        className="w-full px-3 py-2 border rounded-md dark:bg-neutral-700 dark:border-neutral-600"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="width" className="block text-sm font-medium mb-1">Largeur (cm)</label>
                                    <input
                                        id="width"
                                        type="number"
                                        value={carpet.width}
                                        onChange={(e) => updateCarpet('width', parseInt(e.target.value))}
                                        className="w-full px-3 py-2 border rounded-md dark:bg-neutral-700 dark:border-neutral-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
                                <textarea
                                    id="description"
                                    value={carpet.description}
                                    onChange={(e) => updateCarpet('description', e.target.value)}
                                    className="resize-none w-full px-3 py-2 border rounded-md dark:bg-neutral-700 dark:border-neutral-600"
                                    rows={3}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Couleur</label>
                                <div className="flex flex-wrap gap-4">
                                    {colorOptions.map((option) => (
                                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                value={option.value}
                                                checked={carpet.color === option.value}
                                                onChange={(e) => updateCarpet('color', e.target.value)}
                                                className="hidden"
                                            />
                                            <div className={`w-8 h-8 rounded-full border-2 ${carpet.color === option.value ? 'border-neutral-500' : 'border-neutral-300'}`}>
                                                <div className="w-6 h-6 rounded-full m-0.5" style={{backgroundColor: option.value}}></div>
                                            </div>
                                            <span>{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Télécharger une Image de Tapis</label>
                                <UploadImage onChange={handleImageUpload} />
                            </div>
                            {carpetImage && (
                                <div className="relative w-full h-64">
                                    <canvas ref={canvasRef} className="w-full h-full"/>
                                </div>
                            )}
                            <div className="w-full flex justify-center">
                                <button
                                    onClick={addToCart}
                                    className="w-full md:w-1/3 mt-6 bg-neutral-800 text-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-700 transition-colors disabled:bg-neutral-400"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="inline-block mr-2 h-4 w-4 animate-spin"/>
                                            Ajout au Panier...
                                        </>
                                    ) : (
                                        `Demander Tapis`
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {showToast && (
                <div data-aos="fade-left" className="fixed bottom-4 right-4 bg-neutral-700 text-neutral-100 py-2 px-4 rounded-md shadow-md">
                    <p className="text-sm font-semibold">{toastMessage}</p>
                </div>
            )}
        </div>
    )
}

export default CarpetCustomizer