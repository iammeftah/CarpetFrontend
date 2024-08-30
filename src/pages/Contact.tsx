import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, Facebook, Instagram, Twitter, Search, X } from 'lucide-react'
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
        { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/luxecarpets' },
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/luxecarpets' },
        { name: 'Twitter', icon: Twitter, url: 'https://www.twitter.com/luxecarpets' }
    ].filter(link => link.name.toLowerCase().includes(searchQuery.toLowerCase()))

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
                                    <p className="flex items-center"><MapPin className="mr-2 flex-shrink-0"/> 123 Rue des Tapis, Ville Douillette, PC 12345</p>
                                    <p className="flex items-center"><Phone className="mr-2 flex-shrink-0"/> +1 (555) 123-4567</p>
                                    <p className="flex items-center"><Mail className="mr-2 flex-shrink-0"/> info@luxecarpets.com</p>
                                    <p className="flex items-center"><Clock className="mr-2 flex-shrink-0"/> Lun-Ven: 9h-20h, Sam: 10h-18h, Dim: Fermé</p>
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
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841902907894!2d-73.98651668459473!3d40.74881097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794000000!5m2!1sen!2sus"
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
            <AnimatePresence>
                {chatOpen && (
                    <motion.div
                        className="fixed bottom-24 left-4 right-4 md:right-4 md:left-auto md:w-100 bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
                        initial={{opacity: 0, y: 50, scale: 0.3}}
                        animate={{opacity: 1, y: 0, scale: 1}}
                        exit={{opacity: 0, y: 50, scale: 0.3}}
                        transition={{type: 'spring', damping: 25, stiffness: 500}}
                        style={{height: "60vh"}}
                    >
                        <div className="p-4 bg-neutral-100 dark:bg-neutral-700">
                            <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">Discutez avec nous</h3>
                        </div>
                        <div className="p-4 flex-grow overflow-y-auto">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                >
                                    <span
                                        className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-neutral-200 dark:bg-neutral-600 text-neutral-800 dark:text-neutral-100' : 'bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800'}`}>
                                        {msg.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        <form onSubmit={handleChatSubmit} className="p-4 bg-neutral-100 dark:bg-neutral-700 flex">
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="flex-grow bg-white dark:bg-neutral-800 outline-none rounded-l-xl border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm text-neutral-800 dark:text-neutral-200 transition-all duration-200"
                                placeholder="Tapez votre message"
                                type="text"
                            />
                            <motion.button
                                type="submit"
                                className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800 rounded-r-xl px-4 py-2 hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors duration-200"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                <Send size={18}/>
                            </motion.button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}