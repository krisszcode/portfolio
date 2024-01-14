"use client";

import { BackButton } from "./back-button";
import CardHeader from "./header";
import Social from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial = true,
}: CardWrapperProps) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
            <div className="card-body">
                <CardHeader label = {headerLabel}/>
                {children}
                <div className="card-actions flex justify-end mt-4">
                    {showSocial && (
                        <Social/>
                    )}
                </div>
                <BackButton label ={backButtonLabel} href={backButtonHref}/>
            </div>
        </div>
    );
};
