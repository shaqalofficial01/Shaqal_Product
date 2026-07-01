import { type ReactNode } from "react";


export default function Hero(): ReactNode {
    return (
        <section className="hero relative min-h-200 flex items-center pt-24 pb-32 overflow-hidden border-b border-outline-variant">
            <div
                style={{
                    backgroundSize: "40px 40px",
                    backgroundImage: `
                    linearGradient(
                        to right,
                        rgba(77, 70, 55, 0.1) 1px,
                        transparent 1px
                    ),
                    linearGradient(
                        to bottom,
                        rgba(77, 70, 55, 0.1) 1px,
                        transparent 1px
                    )`,
                }}
                className="absolute inset-0 grid-bg opacity-40"
            ></div>
            <div
                style={{
                    backgroundImage: `radial-gradient(
                        circle at 50% 0%,
                        rgba(201, 168, 76, 0.08) 0%,
                        transparent 60%
                    ),
                    linear-gradient(
                        to bottom,
                        rgba(15, 19, 28, 0) 0%,
                        #0f131c 100%
                    )`,
                }}
                className="absolute inset-0 hero-pattern pointer-events-none"
            ></div>
            <div className="relative z-10 max-w-360 mx-auto pt-15 lg:py-0 px-6 lg:px-24 w-full grid sm:max-lg:justify-center lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col gap-2">
                    <div className="inline-flex items-center gap-2 border border-outline-variant bg-surface-container/50 px-3 py-1 rounded-full w-max backdrop-blur-sm  sm:max-lg:mx-auto">
                        <span className="w-2 h-2 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-primary animate-pulse"></span>
                        </span>
                        <span className="pre-heading">
                            System Online • v2.4 Active
                        </span>
                    </div>
                    <h1 className="sm:max-lg:max-w-150 sm:max-lg:mx-auto sm:max-lg:text-center heading font-semibold tracking-tight leading-tight">
                        The Institutional OS for Global{" "}
                        <span className="text-primary">Mineral Trade</span>
                    </h1>
                    <p className="sm:max-lg:max-w-170 sm:max-lg:text-center sm:max-lg:mx-auto para font-body text-body text-on-surface-variant max-w-2xl lg:text-lg leading-relaxed">
                        A unified environment engineered for high-value
                        commerce. Ensuring cryptographic provenance, enforcing
                        atomic settlement, and maintaining strict KYC/AML
                        compliance from extraction to end-user.
                    </p>
                    <div className="flex flex-wrap sm:max-lg:justify-center items-center gap-4 mt-2">
                        <button className="lg:inline-flex lg:w-max max-[320px]:w-full bg-primary text-on-primary font-label-caps text-label-caps px-6 py-4 rounded hover:bg-primary-fixed transition-colors flex items-center gap-8">
                            Request Terminal Access
                            <span className="material-symbols-outlined text-16">
                                arrow_forward
                            </span>
                        </button>
                        <button className="max-[320px]:w-full lg:w-max lg:inline-flex border border-outline-variant text-on-surface hover:border-primary hover:text-primary bg-surface-container/30 backdrop-blur-sm font-label-caps text-label-caps px-6 py-4 rounded transition-colors flex items-center gap-8">
                            <span className="material-symbols-outlined text-16">
                                monitoring
                            </span>
                            View Network Health
                        </button>
                    </div>
                </div>
                <div className="sm:max-lg:max-w-180 lg:col-span-4 relative mt-8 md:mt-0">
                    <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl"></div>
                    <div className="relative bg-surface-container border border-outline-variant rounded-lg p-4 shadow-2xl">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-outline-variant">
                            <div className="text-xs text-on-surface-variant">
                                Live Market Index
                            </div>
                            <span className="material-symbols-outlined text-primary text-5">
                                show_chart
                            </span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-on-surface-variant font-body text-body text-sm mb-1">
                                        Cobalt (99.8%) LME
                                    </div>
                                    <div className="font-mono text-sm text-inverse-surface font-bold">
                                        $32,450.00{" "}
                                        <span className="text-sm text-secondary-fixed">
                                            /MT
                                        </span>
                                    </div>
                                </div>
                                <div className="font-mono text-primary flex items-center gap-1">
                                    <span className="material-symbols-outlined text-4">
                                        arrow_upward
                                    </span>
                                    +1.24%
                                </div>
                            </div>
                            <div className="h-px bg-outline-variant w-full"></div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-on-surface-variant font-body text-body text-sm mb-1">
                                        Lithium Carbonate EXW
                                    </div>
                                    <div className="font-mono text-sm text-inverse-surface font-bold">
                                        $14,200.00{" "}
                                        <span className="text-sm text-secondary-fixed">
                                            /MT
                                        </span>
                                    </div>
                                </div>
                                <div className="font-mono text-error flex items-center gap-1">
                                    <span className="material-symbols-outlined text-4">
                                        arrow_downward
                                    </span>
                                    -0.45%
                                </div>
                            </div>
                            <div className="h-px bg-outline-variant w-full"></div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-on-surface-variant font-body text-body text-sm mb-1">
                                        Tantalite (30% Ta2O5)
                                    </div>
                                    <div className="font-mono text-sm text-inverse-surface font-bold">
                                        $68.50{" "}
                                        <span className="text-sm text-secondary-fixed">
                                            /lb
                                        </span>
                                    </div>
                                </div>
                                <div className="font-mono text-primary flex items-center gap-1">
                                    <span className="material-symbols-outlined text-4">
                                        arrow_upward
                                    </span>
                                    +0.89%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
