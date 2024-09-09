import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, Facebook, Instagram, Twitter, Search, X, Linkedin } from 'lucide-react'
import Header from "../components/Header"

export default function Contact() {
    const [chatOpen, setChatOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([
        { id: 1, text: "Bonjour ! Comment pouvons-nous vous aider aujourd'hui ?", sender: 'bot' }
    ])
    const [showMap, setShowMap] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Formulaire soumis')
        // Add form submission logic here
    }

    const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (message.trim()) {
            setMessages([...messages, { id: Date.now(), text: message, sender: 'user' }])
            setMessage('')
            // Simulate bot response
            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, { id: Date.now(), text: "Merci pour votre message. Un de nos représentants vous répondra bientôt.", sender: 'bot' }])
            }, 1000)
        }
    }

    const filteredSocialLinks = [
        { name: 'Facebook', icon: Facebook, url: 'https://web.facebook.com/tapisexcellences/?locale=fr_FR&_rdc=1&_rdr' },
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/tapis_excellences/' },
        { name: 'Twitter', icon: Linkedin, url: 'https://www.linkedin.com/in/youssef-bouzouba-3ab9201a/?locale=en_US' }
    ].filter(link => link.name.toLowerCase().includes(searchQuery.toLowerCase()))

    // @ts-ignore
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
                    Contactez Excellence Tapis
                </motion.h1>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg"
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            <h2 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Envoyer nous un message</h2>

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
                                <div className="w-full flex justify-end">
                                    <motion.button
                                        type="submit"
                                        className="w-full md:w-1/3 bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800 py-2 px-4 rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors duration-200"
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                    >
                                        Envoyer le message
                                    </motion.button>
                                </div>
                            </form>
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
                                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Informations du magasin</h3>
                                <div className="space-y-2 text-neutral-600 dark:text-neutral-300">
                                    <p className="flex items-center"><MapPin className="mr-2 flex-shrink-0"/> 30 Av.
                                        Hamza Ben Abd Elmouttalib, Bourmanna, Fès 30050</p>
                                    <p className="flex items-center"><Phone className="mr-2 flex-shrink-0"/> 0664177758
                                    </p>
                                    <p className="flex items-center"><Mail
                                        className="mr-2 flex-shrink-0"/> info@tapisbouzoubaa.com
                                    </p>
                                    <p className="flex items-center"><Mail
                                        className="mr-2 flex-shrink-0"/> youssef@tapisbouzoubaa.com

                                    </p>
                                    <p className="flex items-center"><Mail
                                        className="mr-2 flex-shrink-0"/> najwa@tapisbouzoubaa.com

                                    </p>
                                    <p className="flex items-center"><Mail
                                        className="mr-2 flex-shrink-0"/> info@tapisexcellence.com

                                    </p> <p className="flex items-center"><Mail
                                        className="mr-2 flex-shrink-0"/> youssef@tapisexcellence.com

                                </p> <p className="flex items-center"><Mail
                                        className="mr-2 flex-shrink-0"/> najwa@tapisexcellence.com

                                </p>


                                </div>
                            </div>
                            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Suivez-nous</h3>
                                <AnimatePresence>
                                    {filteredSocialLinks.map((link) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            <link.icon className="h-5 w-5 mr-3 text-neutral-600 dark:text-neutral-300"/>
                                            <span className="text-neutral-700 dark:text-neutral-200">{link.name}</span>
                                        </motion.a>
                                    ))}
                                </AnimatePresence>
                            </div>
                            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Notre localisation</h3>

                                <motion.div
                                    initial={{opacity: 0, height: 0}}
                                    animate={{opacity: 1, height: 'auto'}}
                                    exit={{opacity: 0, height: 0}}
                                    className="mt-4 aspect-video rounded-lg overflow-hidden"
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12590.805390844042!2d-4.9915789!3d34.0175917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8bfc160d420b%3A0xf0b8395919df1273!2sTapis%20Excellence!5e1!3m2!1sfr!2sma!4v1725105665960!5m2!1sfr!2sma"
                                        width="100%"
                                        height="100%"
                                        style={{border: 0}}
                                        allowFullScreen={true}
                                        loading="lazy"
                                    ></iframe>
                                </motion.div>
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
                <motion.button
                    onClick={() => setChatOpen(!chatOpen)}
                    className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800 rounded-full w-16 h-16 flex items-center justify-center hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors duration-200"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    {chatOpen ? <X size={24}/> : <MessageCircle size={24}/>}
                </motion.button>
            </motion.div>
        </div>
    )
}