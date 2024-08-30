'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import {CarpetStoreTimeline} from "../components/CarpetStoreTimeline";
import {CarpetStoreTeam} from '../components/Team'

const testimonials = [
    { name: "Sophie L.", text: "Tapis Magique a transformé mon intérieur avec leur magnifique tapis berbère. Un vrai coup de cœur !" },
    { name: "Karim M.", text: "Service exceptionnel et qualité incomparable. Je recommande vivement leurs tapis kilims." },
    { name: "Emma R.", text: "J'ai adoré leur atelier de personnalisation. Mon tapis sur mesure est une véritable œuvre d'art." }
]

const services = [
    { title: "Tapis Sur Mesure", description: "Créez votre tapis unique avec notre service de personnalisation.", icon: "✨" },
    { title: "Restauration", description: "Donnez une nouvelle vie à vos tapis anciens avec notre service expert de restauration.", icon: "🔧" },
    { title: "Conseil Déco", description: "Bénéficiez de l'expertise de nos décorateurs pour intégrer parfaitement votre tapis.", icon: "🏠" },
    { title: "Nettoyage Pro", description: "Un service de nettoyage professionnel pour maintenir la beauté de vos tapis.", icon: "🧼" }
]

export default function Aboutpage() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    useEffect(() => {
        const handleHashChange = () => {
            const id = window.location.hash.replace('#', '')
            if (id) {
                const element = document.getElementById(id)
                if (element) {
                    const header = document.querySelector('header')
                    const headerHeight = header ? header.offsetHeight : 0
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                    window.scrollTo({
                        top: elementPosition - headerHeight - 20,
                        behavior: 'smooth'
                    })
                }
            }
        }

        handleHashChange()
        window.addEventListener('hashchange', handleHashChange)

        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-black text-black dark:text-white flex flex-col min-h-screen">
            <div className="fixed top-0 left-0 right-0 z-50" >
                <Header/>
            </div>
            <main className="flex-grow pt-32">
                <div className="container mx-auto px-4 py-12">

                    <section id="about" className="mb-20">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">À
                                propos de Tapis Excellence</h2>
                            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                                    La marque Tapis Excellence a été créée par Tapis Bouzoubaa, une entreprise familiale
                                    marocaine spécialisée dans la fabrication de tapis faits main haut de gamme. Fondée
                                    en 1973, Tapis Bouzoubaa a innové dans tous les aspects de la fabrication des tapis,
                                    notamment en matière de densité des nœuds, de dessins, de modèles, de couleurs, de
                                    formes et de styles, en n'utilisant que les matières premières de grande qualité
                                    répondant aux normes, tout en garantissant une finition et une qualité
                                    irréprochables.
                                </p>
                                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                                    Depuis sa création, Tapis Bouzoubaa s'est toujours concentré sur le haut de gamme,
                                    la grande qualité et l'innovation, ce qui lui a valu de remporter de nombreux prix
                                    prestigieux nationaux et internationaux. Au fil des ans, l'entreprise a évolué en
                                    intégrant les nouvelles technologies dans la conception, les systèmes de gestion et
                                    la politique commerciale tout en sauvegardant le patrimoine national.
                                </p>
                                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    Aujourd'hui, Tapis Bouzoubaa, en collaboration avec ses partenaires, fabrique non
                                    seulement des tapis noués main de tout genre, mais également des tapis tuftés main
                                    en laine et soie répondant aux différentes exigences et tendances de sa clientèle
                                    nationale et internationale, des tapis tissés traditionnels et des tapis tissés
                                    modernes en laine de première qualité, qui sont considérés comme les dernières
                                    tendances et créations mondiales dans le domaine du Design du tapis.
                                </p>
                            </div>
                        </motion.div>
                    </section>

                    <section id="history" className="my-20">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">Notre
                                Histoire</h2>

                            <CarpetStoreTimeline/>
                        </motion.div>
                    </section>


                    <section id="team" className="mb-20">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.4}}
                        >
                            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">Notre
                                Équipe</h2>
                            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                                    Notre équipe est composée d'artisans talentueux, de designers créatifs et de
                                    passionnés de tapis. Chaque membre apporte son expertise unique, qu'il s'agisse de
                                    la sélection des matériaux, de la création de motifs ou du service client.
                                </p>

                                <CarpetStoreTeam/>
                            </div>
                        </motion.div>
                    </section>

                    <section id="values" className="mb-20">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.6}}
                        >
                            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">Nos
                                Valeurs</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: 'Artisanat Durable',
                                        description: "Nous nous engageons à utiliser des méthodes de production durables et respectueuses de l'environnement."
                                    },
                                    {
                                        title: 'Commerce Équitable',
                                        description: "Nous soutenons les communautés locales de tisserands en assurant des conditions de travail équitables et des rémunérations justes."
                                    },
                                    {
                                        title: 'Préservation des Traditions',
                                        description: "Nous œuvrons pour préserver les techniques de tissage ancestrales et l'héritage culturel du Maroc."
                                    }
                                ].map((value, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)"
                                        }}
                                    >
                                        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{value.title}</h3>
                                        <p className="text-neutral-600 dark:text-neutral-300">{value.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    <section id="testimonials" className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">Ce
                            que disent nos clients</h2>
                        <div className="relative bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{opacity: 0, x: 50}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -50}}
                                    transition={{duration: 0.5}}
                                    className="text-center"
                                >
                                    <p className="text-lg text-neutral-600 dark:text-neutral-300 italic mb-4">"{testimonials[currentTestimonial].text}"</p>
                                    <p className="font-semibold text-neutral-800 dark:text-neutral-200">{testimonials[currentTestimonial].name}</p>
                                    <div className="flex justify-center mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            <button onClick={prevTestimonial}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-neutral-700 rounded-full p-2 shadow-md">
                                <ChevronLeft className="w-6 h-6 text-neutral-600 dark:text-neutral-300"/>
                            </button>
                            <button onClick={nextTestimonial}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-neutral-700 rounded-full p-2 shadow-md">
                                <ChevronRight className="w-6 h-6 text-neutral-600 dark:text-neutral-300"/>
                            </button>
                        </div>
                    </section>

                    <section id="fun-fact" className="mb-20">
                        <motion.div
                            className="bg-gradient-to-r from-purple-400 to-pink-500 dark:from-purple-800 dark:to-pink-900 rounded-lg shadow-lg p-8 text-white cursor-pointer"
                            whileHover={{scale: 1.02}}
                            onClick={() => setIsFlipped(!isFlipped)}
                        >
                            <h3 className="text-2xl font-semibold mb-4">Le saviez-vous ?</h3>
                            <AnimatePresence mode="wait">
                                {!isFlipped ? (
                                    <motion.p
                                        key="front"
                                        initial={{rotateY: 180, opacity: 0}}
                                        animate={{rotateY: 0, opacity: 1}}
                                        exit={{rotateY: 180, opacity: 0}}
                                        transition={{duration: 0.5}}
                                    >
                                        Cliquez pour découvrir un fait fascinant sur les tapis marocains !
                                    </motion.p>
                                ) : (
                                    <motion.p
                                        key="back"
                                        initial={{rotateY: 180, opacity: 0}}
                                        animate={{rotateY: 0, opacity: 1}}
                                        exit={{rotateY: 180, opacity: 0}}
                                        transition={{duration: 0.5}}
                                    >
                                        Les tapis berbères traditionnels peuvent contenir jusqu'à 60 000 nœuds par mètre
                                        carré, ce qui peut prendre plusieurs mois à tisser à la main !
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </section>
                </div>
            </main>
        </div>
    );
}