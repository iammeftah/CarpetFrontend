"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
    {
        id: 1,
        name: "Marie Dupont",
        designation: "Propriétaire",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
        id: 2,
        name: "Pierre Martin",
        designation: "Responsable des Ventes",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
        id: 3,
        name: "Sophie Leclerc",
        designation: "Experte en Tapis Persans",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
        id: 4,
        name: "Lucas Bonnet",
        designation: "Responsable du Service Client",
        image:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
        id: 5,
        name: "Emma Rousseau",
        designation: "Designer d'Intérieur",
        image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
        id: 6,
        name: "Thomas Petit",
        designation: "Spécialiste en Nettoyage de Tapis",
        image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
];

export function CarpetStoreTeam() {
    return (
        <div className="flex flex-col items-center justify-center mb-10 w-full">
            <h2 className="text-3xl font-bold mb-8">Notre Équipe</h2>
            <AnimatedTooltip items={people} />
        </div>
    );
}