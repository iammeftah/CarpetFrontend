"use client";
import React from "react";
import {HeroParallax} from "../../components/ui/hero-parallax";
import Header from "../../components/Header";

export function TapisPage() {
    return (
        <>
            <div className="bg-white dark:bg-black">
                <Header/>
                <HeroParallax products={products} />
            </div>
        </>
    );
}
export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
            "https://plus.unsplash.com/premium_photo-1675738774551-cf86de1fd242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            "https://images.unsplash.com/photo-1680633480092-fe3d1c0a164a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
            "https://images.unsplash.com/photo-1675177649590-22a42a90cdd7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            "https://plus.unsplash.com/premium_photo-1675738774365-c542862be2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            "https://media.istockphoto.com/id/2154121852/photo/close-up-of-a-beautiful-green-carpet-texture.webp?b=1&s=612x612&w=0&k=20&c=iAyOC1gBKFQFterdBqBVJRFFNAKlNcoN_ZLdQW8wCZQ=",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "https://media.istockphoto.com/id/2164989138/photo/voyage-a-fes.webp?b=1&s=612x612&w=0&k=20&c=e2Sg_6xi2kLTZ0LniErKbFFXgZLtpJLxwFwHiGS2OGs=",
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "https://media.istockphoto.com/id/2154080695/photo/close-up-many-different-carpet-samples.jpg?s=612x612&w=0&k=20&c=ZbS2oN6VmxJUeqJkN5gqcj2bXKQi4bR3KEY8hjZc0cc=",
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            "https://media.istockphoto.com/id/486167735/photo/turkish-carpet.webp?b=1&s=612x612&w=0&k=20&c=w2_UxrZFpFcwdNLEx7yofSyREUqbD1EN4wCuBX2S8qA=",
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "https://media.istockphoto.com/id/177369817/photo/carpet.webp?b=1&s=612x612&w=0&k=20&c=6nuzc10W9fADLWAht4o7qP5cA2y13Q4LhPPIZGhcegs=",
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "https://media.istockphoto.com/id/182188253/photo/red-carpet.webp?b=1&s=612x612&w=0&k=20&c=o4oG2m7EOoJ8-w3ZIbTssP4ttNegtX9a1R9QWOduU6g=",
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "https://media.istockphoto.com/id/185300349/photo/soccer-field.webp?b=1&s=612x612&w=0&k=20&c=ndy2GiCua6xGT5RBMw1SPqwXTPgdncbZmBwf_PoKgDY=",
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            "https://media.istockphoto.com/id/172452491/photo/ice-blue-carpet.webp?b=1&s=612x612&w=0&k=20&c=HpKwly7e32j-OdIjYtpzq8mRQ89eU1zSwGU1RMz_tkw=",
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "https://media.istockphoto.com/id/172321133/photo/a-close-up-of-a-tan-carpet-swatch.webp?b=1&s=612x612&w=0&k=20&c=YKsOUw-FsagLB1Jftb9Gx78_dGj6S4gdzmxa7B3A2sg=",
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "https://plus.unsplash.com/premium_photo-1675802522643-24ad09d1cf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnBldCUyMHRleHR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "https://plus.unsplash.com/premium_photo-1675788271687-6a50324324e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
