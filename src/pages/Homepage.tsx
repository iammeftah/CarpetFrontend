"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import Header from "../components/Header";

export function Homepage() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <AuroraBackground>
                    <div className="w-full relative h-screen flex flex-col">
                        <Header/>
                        <motion.div
                            initial={{opacity: 0.0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="flex-grow flex flex-col gap-4 items-center justify-center px-4"
                        >
                            <h1 className="text-3xl md:text-7xl font-bold text-center dark:text-white text-black">
                                Découvrez les tapis de luxe
                            </h1>
                            <p className="font-light text-base md:text-2xl text-center dark:text-neutral-200 text-neutral-800 py-4">
                                Transformez votre espace avec notre collection exquise de tapis fabriqués à la main.
                            </p>
                            <button
                                className="bg-black dark:bg-white text-white dark:text-black rounded-full px-6 py-3 text-lg font-semibold hover:opacity-80 transition-opacity">
                                Consulter nouveauté
                            </button>
                        </motion.div>
                    </div>
                </AuroraBackground>
            </div>
            {/* Rest of the webpage content goes here */}
            <div className="bg-white dark:bg-gray-500 p-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Featured Collections</h2>
                {/* Add your featured carpet collections here */}

            </div>
        </div>
    );
}