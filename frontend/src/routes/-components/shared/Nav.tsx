import { type ReactNode, useState, useRef } from "react";

import gsap from "gsap";

import { useGSAP } from "@gsap/react";

import { Link } from "@tanstack/react-router";

gsap.registerPlugin(useGSAP);

export default function Nav(): ReactNode {
    const [showNav, setShowNav] = useState<boolean>(false);

    const menuNavRef = useRef(null);

   useGSAP(
       () => {
           if (showNav) {
               gsap.fromTo(
                   menuNavRef.current,
                   {
                       clipPath: "circle(0% at 100% 0%)",
                   },
                   {
                       clipPath: "circle(150% at 100% 0%)",
                       duration: 0.8,
                       ease: "power3.inOut",
                   },
               );
           }
       },
       { dependencies: [showNav] },
   );

   function closeMenu() {
    gsap.to(menuNavRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => setShowNav(false),
    });
   }

   

    return (
        <>
            <header className="fixed top-0 w-full border-b border-outline-variant bg-surface-container/80 backdrop-blur-md z-50">
                <nav className="fixed top-0 w-full border-b border-outline-variant bg-surface-container/80 backdrop-blur-md z-50">
                    <div className="max-w-360 mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="logo flex items-center gap-2 text-primary">
                            <link
                                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                                rel="stylesheet"
                            />
                            <span className="material-symbols-outlined">
                                diamond
                            </span>
                            <span className="font-semibold tracking-tight">
                                SHAQAL TradeOS
                            </span>
                        </div>
                        <div className="hidden lg:flex items-center gap-20 font-label-caps text-label-caps text-on-surface-variant">
                            <Link
                                className="hover:text-primary transition-colors"
                                to="#terminal"
                            >
                                Terminal
                            </Link>
                            <Link
                                className="hover:text-primary transition-colors"
                                to="#pipeline"
                            >
                                Pipeline
                            </Link>
                            <Link
                                className="hover:text-primary transition-colors"
                                to="#logistics"
                            >
                                Logistics
                            </Link>
                            <Link
                                className="hover:text-primary transition-colors"
                                to="#governance"
                            >
                                Governance
                            </Link>
                        </div>
                        <span
                            onClick={() => setShowNav(true)}
                            className="lg:hidden! material-symbols-outlined cursor-pointer text-4xl!"
                        >
                            menu
                        </span>

                        <div className="hidden lg:flex items-center gap-12">
                            <Link to="#login">
                                <button className="hidden sm:block text-primary border border-outline-variant hover:border-primary px-4 py-4 rounded transition-colors">
                                    Client Login
                                </button>
                            </Link>
                            <Link to="/auth/role_selection">
                                <button className="bg-primary text-on-primary  px-4 py-4 rounded hover:bg-primary-fixed transition-colors">
                                    Request Access
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            {showNav && (
                <div
                    ref={menuNavRef}
                    style={{
                        clipPath: "circle(0% at 100% 0%)",
                    }}
                    className="*:text-xl fixed inset-0 z-100 bg-background flex flex-col gap-y-5 w-screen h-screen items-center justify-center"
                >
                    <span
                        onClick={closeMenu}
                        className="material-symbols-outlined cursor-pointer text-5xl! absolute left-1/2 -translate-x-1/2 top-1/4"
                    >
                        close
                    </span>

                    <Link
                        className="hover:text-primary transition-colors"
                        to="#terminal"
                    >
                        Terminal
                    </Link>
                    <Link
                        className="hover:text-primary transition-colors"
                        to="#pipeline"
                    >
                        Pipeline
                    </Link>
                    <Link
                        className="hover:text-primary transition-colors"
                        to="#logistics"
                    >
                        Logistics
                    </Link>
                    <Link
                        className="hover:text-primary transition-colors"
                        to="#governance"
                    >
                        Governance
                    </Link>
 <Link
                        className="hover:text-primary transition-colors"
                        to="#governance"
                    >
                        Login
                    </Link>
 <Link
                        className="hover:text-primary transition-colors"
                        to="/auth/role_selection"
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </>
    );
}
