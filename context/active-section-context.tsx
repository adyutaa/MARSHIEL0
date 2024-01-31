"use client"

import type { SectionNama } from "@/lib/types"
import React, { useState, createContext, useContext } from "react"

type ActiveSectionContextProviderProps= {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    ActiveSection: SectionNama;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionNama>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children
}: ActiveSectionContextProviderProps) {
    const [ActiveSection, setActiveSection] = useState<SectionNama>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0); 
    return (
        <ActiveSectionContext.Provider
            value={{
                ActiveSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }
            }
        >
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context == null) {
        throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider");
    }
    return context;
}
