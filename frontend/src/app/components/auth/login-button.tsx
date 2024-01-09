"use client"

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect"; 
    asChild?: boolean;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ children, mode="redirect", asChild }) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/login");
     }

     if(mode==="modal") {
            return <span>
                Modal
            </span>
        
     }

    return <span onClick={onClick} className="cursor-pointer">
        {children}
    </span>
}