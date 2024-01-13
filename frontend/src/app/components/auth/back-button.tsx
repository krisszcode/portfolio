"use client"

import Link from "next/link";

interface BackButtonProps {
    href: string;
    label: string;
}

export const BackButton = ({href, label}: BackButtonProps) => {
    return (    
        <div className="flex justify-center mt-6">
            <button className="btn"><Link href={href}>{label}</Link></button>
        </div>
    );
}