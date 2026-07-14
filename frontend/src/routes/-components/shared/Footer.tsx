import { type ReactNode } from "react";

export default function Footer(): ReactNode {
    return (
        <footer className="py-24 sm:max-lg:px-24 lg:px-24 bg-surface-container-highest border-t border-outline-variant">
            <div className="max-w-360 mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-24">
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 text-primary mb-4">
                            <span className="material-symbols-outlined font-bold text-6">
                                diamond
                            </span>
                            <span className="font-h2 text-h2 font-semibold tracking-tight">
                                SHAQAL
                            </span>
                        </div>
                        <p className="font-body text-body text-sm text-on-surface-variant mb-4">
                            The Institutional OS for Global Mineral Trade.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-label-caps text-label-caps text-inverse-surface mb-4">
                            Platform
                        </h4>
                        <ul className="space-y-3 font-body text-body text-sm text-on-surface-variant">
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Terminal
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Pipeline
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Logistics
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    API Access
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-caps text-label-caps text-inverse-surface mb-4">
                            Network
                        </h4>
                        <ul className="space-y-3 font-body text-body text-sm text-on-surface-variant">
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Governance
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Consensus Specs
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Node Operators
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Network Health
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-caps text-label-caps text-inverse-surface mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-3 font-body text-body text-sm text-on-surface-variant">
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Support
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Security
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Compliance Hub
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-primary transition-colors"
                                    href="#"
                                >
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-4 font-body text-body text-sm text-on-surface-variant">
                    <p className="mt-10">© 2024 SHAQAL TradeOS. All rights reserved.</p>
                    <div className="flex gap-6 mt-10">
                        <a
                            className="hover:text-primary transition-colors"
                            href="#"
                        >
                            Privacy Policy
                        </a>
                        <a
                            className="hover:text-primary transition-colors"
                            href="#"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
