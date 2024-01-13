"use client";

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
        <div className="card w-96 bg-base-100 shadow-xl rounded-lg p-6">
            <div className="card-body">
                <CardHeader label = {headerLabel}/>
                {children}
                <div className="card-actions flex justify-end mt-6">
                    <button className="btn btn-primary mr-2">{backButtonLabel}</button>
                    {showSocial && (
                        <Social/>
                    )}
                </div>
            </div>
        </div>
    );
};