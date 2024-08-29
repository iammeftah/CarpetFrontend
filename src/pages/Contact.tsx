import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {MapPin, Phone, Mail, MessageCircle, Send, Clock, Facebook, Instagram, Twitter, Search} from 'lucide-react'
import Header from "../components/Header"

export default function Contact() {
    const [chatOpen, setChatOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [activeTab, setActiveTab] = useState('message')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Formulaire soumis')
    }

    const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Message du chat:', message)
        setMessage('')
    }

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
            <Header />
            <div className="container mx-auto px-4 py-24">
                <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-100 pt-2 md:pt-16"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Contactez Luxe Carpets
                </motion.h1>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg"
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            <div className="w-full ">
                                <div className="relative mb-6">
                                    <div className="flex">
                                        <button
                                            onClick={() => setActiveTab('message')}
                                            className={`flex-1 py-2 px-4 text-sm font-medium transition-colors duration-200 ${activeTab === 'message' ? 'text-neutral-800 dark:text-neutral-100' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100'}`}
                                        >
                                            Envoyer un message
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('appointment')}
                                            className={`flex-1 py-2 px-4 text-sm font-medium transition-colors duration-200 ${activeTab === 'appointment' ? 'text-neutral-800 dark:text-neutral-100' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100'}`}
                                        >
                                            Prendre rendez-vous
                                        </button>
                                    </div>
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-0.5 bg-neutral-800 dark:bg-neutral-100"
                                        initial={false}
                                        animate={{
                                            x: activeTab === 'message' ? '0%' : '100%',
                                            width: '50%'
                                        }}
                                        transition={{type: 'spring', stiffness: 300, damping: 30}}
                                    />
                                </div>
                                <div data-aos="fade-in">
                                    {activeTab === 'message' && (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="flex flex-row gap-4">
                                                <input type="text" placeholder="Votre nom" required
                                                       className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"/>
                                                <input type="email" placeholder="Votre email" required
                                                       className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"/>
                                            </div>
                                            <input type="tel" placeholder="Votre téléphone (optionnel)"
                                                   className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"/>
                                            <textarea placeholder="Votre message" required
                                                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 h-24 resize-none"></textarea>
                                            <button type="submit"
                                                    className="w-full bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800 py-2 px-4 rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors duration-200">Envoyer
                                                le message
                                            </button>
                                        </form>
                                    )}
                                    {activeTab === 'appointment' && (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="flex flex-row gap-4">
                                                <input type="text" placeholder="Votre nom" required
                                                       className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"/>
                                                <input type="email" placeholder="Votre email" required
                                                       className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"/>
                                            </div>
                                            <input type="tel" placeholder="Votre téléphone" required
                                                   className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"/>
                                            <div className="flex flex-row gap-4">
                                                <input type="date" required
                                                       className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"/>
                                                <input type="time" required
                                                       className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"/>
                                            </div>
                                            <button type="submit"
                                                    className="w-full bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800 py-2 px-4 rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors duration-200">Réserver
                                                un rendez-vous
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 gap-8">
                        <motion.div
                            className="space-y-6"
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.4}}
                        >
                            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Informations
                                    du magasin</h3>
                                <div className="space-y-2 text-neutral-600 dark:text-neutral-300">
                                    <p className="flex items-center"><MapPin className="mr-2 flex-shrink-0"/> 123 Rue
                                        des
                                        Tapis, Ville Douillette, PC 12345</p>
                                    <p className="flex items-center"><Phone className="mr-2 flex-shrink-0"/> +1 (555)
                                        123-4567</p>
                                    <p className="flex items-center"><Mail
                                        className="mr-2 flex-shrink-0"/> info@luxecarpets.com</p>
                                    <p className="flex items-center"><Clock className="mr-2 flex-shrink-0"/> Lun-Ven:
                                        9h-20h, Sam: 10h-18h, Dim: Fermé</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Suivez-nous</h3>
                                <div className="space-y-2">
                                    <a href="https://www.facebook.com/luxecarpets" target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200">
                                        <Facebook className="h-5 w-5 mr-3 text-neutral-600 dark:text-neutral-300"/>
                                        <span
                                            className="text-neutral-700 dark:text-neutral-200">facebook.com/luxecarpets</span>
                                    </a>
                                    <a href="https://www.instagram.com/luxecarpets" target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200">
                                        <Instagram className="h-5 w-5 mr-3 text-neutral-600 dark:text-neutral-300"/>
                                        <span
                                            className="text-neutral-700 dark:text-neutral-200">instagram.com/luxecarpets</span>
                                    </a>
                                    <a href="https://www.twitter.com/luxecarpets" target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200">
                                        <Twitter className="h-5 w-5 mr-3 text-neutral-600 dark:text-neutral-300"/>
                                        <span
                                            className="text-neutral-700 dark:text-neutral-200">twitter.com/luxecarpets</span>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Notre
                                    localisation</h3>
                                <div className="aspect-video rounded-lg overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841902907894!2d-73.98651668459473!3d40.74881097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794000000!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{border: 0}}
                                        allowFullScreen={true}
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                className="fixed bottom-4 right-4"
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5, delay: 0.6}}
            >
                <button
                    onClick={() => setChatOpen(!chatOpen)}
                    className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800 rounded-full w-16 h-16 flex items-center justify-center hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors duration-200"
                >
                    <MessageCircle size={24}/>
                </button>
            </motion.div>
            {chatOpen && (
                <motion.div
                    className="fixed bottom-24 left-4 md:left-auto right-4 w-120 bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 50}}
                    style={{maxHeight: "60vh"}}
                >
                    <div className="p-4 bg-neutral-100 dark:bg-neutral-700">
                        <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">Discutez avec nous</h3>
                    </div>
                    <div className="p-4 flex-grow overflow-y-auto">
                        <p className="text-neutral-600 dark:text-neutral-300">Bonjour ! Comment pouvons-nous vous aider
                            aujourd'hui ?</p>
                    </div>
                    <form onSubmit={handleChatSubmit} className="p-4 bg-neutral-100 dark:bg-neutral-700 flex">
                        <div className="relative w-full">
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full bg-white dark:bg-neutral-800 outline-none rounded-xl border border-neutral-300 dark:border-neutral-700 px-4 py-2 pr-10 text-sm text-neutral-800 dark:text-neutral-200 transition-all duration-200"
                                placeholder="Tapez votre message"
                                type="text"
                            />
                            <Send
                                className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 dark:text-neutral-500"
                            />
                        </div>
                    </form>
                </motion.div>
            )}
        </div>
    )
}