'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'

export default function Aboutpage() {
    useEffect(() => {
        const handleHashChange = () => {
            const id = window.location.hash.replace('#', '')
            if (id) {
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }

        handleHashChange()
        window.addEventListener('hashchange', handleHashChange)

        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    return (
        <div className="bg-white dark:bg-black text-black dark:text-white flex flex-col">
            {/*hadi ma page ma taqlwa*/}
            <Header/>
            <div className="flex-grow relative top-24">
                <header className="bg-white dark:bg-neutral-800 shadow-md">
                    <div className="container mx-auto px-4 py-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">À Propos
                            de Tapis Magique</h1>
                        <p className="mt-2 text-xl text-neutral-600 dark:text-neutral-400">Découvrez notre histoire,
                            notre équipe et nos valeurs</p>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-12 ">
                    <section id="history" className="mb-20">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">Notre
                                Histoire</h2>
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                                        Fondée en 1980, Tapis Magique a commencé comme une petite boutique familiale à
                                        Marrakech. Notre passion pour les motifs traditionnels et les techniques de
                                        tissage ancestrales nous a guidés tout au long de notre parcours.
                                    </p>
                                    <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                        Au fil des années, nous avons grandi pour devenir l'un des principaux
                                        fournisseurs de tapis artisanaux au Maroc, créant une collection unique qui mêle
                                        l'ancien et le moderne.
                                    </p>
                                </div>
                                <div className="relative w-full h-64 md:h-80">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Tapis Magique boutique in 1980"
                                        className="rounded-lg shadow-lg w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    <section id="team" className="mb-20">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">Notre
                                Équipe</h2>
                            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                                    Notre équipe est composée d'artisans talentueux, de designers créatifs et de
                                    passionnés de tapis. Chaque membre apporte son expertise unique, qu'il s'agisse de
                                    la sélection des matériaux, de la création de motifs ou du service client.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {['Artisan', 'Designer', 'Expert en Matériaux', 'Service Client'].map((role, index) => (
                                        <div key={index} className="text-center">
                                            <div
                                                className="w-20 h-20 mx-auto bg-neutral-200 dark:bg-neutral-700 rounded-full mb-3 flex items-center justify-center">
                                                <i className='bx bx-user text-xl text-neutral-500 dark:text-neutral-400'></i>
                                            </div>
                                            <p className="font-medium text-neutral-800 dark:text-neutral-200">{role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    <section id="values">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.4}}
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
                                    <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6">
                                        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{value.title}</h3>
                                        <p className="text-neutral-600 dark:text-neutral-300">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </section>
                </main>

                <footer className="bg-neutral-100 dark:bg-neutral-800 mt-12">
                    <div className="container mx-auto px-4 py-8">
                        <p className="text-center text-neutral-600 dark:text-neutral-400">© 2023 Tapis Magique. Tous
                            droits réservés.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}