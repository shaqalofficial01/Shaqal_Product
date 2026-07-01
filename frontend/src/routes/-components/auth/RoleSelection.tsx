import { type ReactNode } from 'react';

export default function RoleSelection () : ReactNode {

    return (
        <body className="bg-background text-on-background min-h-screen flex flex-col justify-center items-center p-16 md:p-32">
            <main className="w-full max-w-200 flex flex-col gap-8">
                <header className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 font-label-caps text-label-caps text-on-surface-variant uppercase">
                        <span>Step 1 of 4</span>
                        <div className="flex-1 h-0.5 bg-surface-container-high rounded-full overflow-hidden">
                            <div className="h-full w-1/4 bg-primary"></div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-h1 text-h1 text-on-surface">
                            Who are you?
                        </h1>
                        <p className="font-body text-body text-on-surface-variant mt-2">
                            Select your primary role in the Shaqal TradeOS
                            network to proceed.
                        </p>
                    </div>
                </header>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    id="role-grid"
                >
                    <button className="role-card relative text-left bg-surface-container-low border border-outline-variant p-6 rounded-lg flex flex-col gap-4 hover:bg-surface-container transition-colors duration-200">
                        <div className="active-indicator hidden absolute top-4 right-4 w-3 h-3 rounded-full bg-primary"></div>
                        <span
                            className="material-symbols-outlined text-[56px] text-primary"
                            data-weight="fill"
                            style={{
                                fontVariationSettings: "&quot;FILL&quot; 1",
                            }}
                        >
                            handshake
                        </span>
                        <div className="flex flex-col gap-2">
                            <h2 className="font-h2 text-h2 font-bold text-on-surface">
                                Broker
                            </h2>
                            <p className="font-body text-body text-on-surface-variant">
                                Facilitate trades and connect institutional
                                buyers with verified suppliers.
                            </p>
                        </div>
                        <div className="mt-auto font-label-caps text-label-caps text-primary hover:text-primary-fixed-dim inline-flex items-center gap-1">
                            Requirements
                            <span className="material-symbols-outlined text-p-size">
                                arrow_forward
                            </span>
                        </div>
                    </button>
                    <button className="role-card relative text-left bg-surface-container-low border border-outline-variant p-6 rounded-lg flex flex-col gap-4 hover:bg-surface-container transition-colors duration-200">
                        <div className="active-indicator hidden absolute top-4 right-4 w-3 h-3 rounded-full bg-primary"></div>
                        <span
                            className="material-symbols-outlined text-[56px] text-primary"
                            data-weight="fill"
                            style={{
                                fontVariationSettings: "&quot;FILL&quot; 1",
                            }}
                        >
                            account_balance
                        </span>
                        <div className="flex flex-col gap-2">
                            <h2 className="font-h2 text-h2 font-bold text-on-surface">
                                Buyer
                            </h2>
                            <p className="font-body text-body text-on-surface-variant">
                                Procure high-value minerals for institutional or
                                industrial applications.
                            </p>
                        </div>
                        <div className="mt-auto font-label-caps text-label-caps text-primary hover:text-primary-fixed-dim inline-flex items-center gap-1">
                            Requirements
                            <span className="material-symbols-outlined text-p-size">
                                arrow_forward
                            </span>
                        </div>
                    </button>
                    <button className="role-card relative text-left bg-surface-container-low border border-outline-variant p-6 rounded-lg flex flex-col gap-4 hover:bg-surface-container transition-colors duration-200">
                        <div className="active-indicator hidden absolute top-4 right-4 w-3 h-3 rounded-full bg-primary"></div>
                        <span
                            className="material-symbols-outlined text-[56px] text-primary"
                            data-weight="fill"
                            style={{
                                fontVariationSettings: "&quot;FILL&quot; 1",
                            }}
                        >
                            local_shipping
                        </span>
                        <div className="flex flex-col gap-2">
                            <h2 className="font-h2 text-h2 font-bold text-on-surface">
                                Supplier
                            </h2>
                            <p className="font-body text-body text-on-surface-variant">
                                Originate and list verified mineral assets for
                                institutional trade.
                            </p>
                        </div>
                        <div className="mt-auto font-label-caps text-label-caps text-primary hover:text-primary-fixed-dim inline-flex items-center gap-1">
                            Requirements
                            <span className="material-symbols-outlined text-p-size">
                                arrow_forward
                            </span>
                        </div>
                    </button>
                    <button className="role-card relative text-left bg-surface-container-low border border-outline-variant p-6 rounded-lg flex flex-col gap-4 hover:bg-surface-container transition-colors duration-200">
                        <div className="active-indicator hidden absolute top-4 right-16 w-3 h-3 rounded-full bg-primary"></div>
                        <span
                            className="material-symbols-outlined text-[56px] text-primary"
                            data-weight="fill"
                            style={{
                                fontVariationSettings: "&quot;FILL&quot; 1",
                            }}
                        >
                            payments
                        </span>
                        <div className="flex flex-col gap-2">
                            <h2 className="font-h2 text-h2 font-bold text-on-surface">
                                Financier
                            </h2>
                            <p className="font-body text-body text-on-surface-variant">
                                Provide liquidity and financial instruments to
                                back large-scale trades.
                            </p>
                        </div>
                        <div className="mt-auto font-label-caps text-label-caps text-primary hover:text-primary-fixed-dim inline-flex items-center gap-1">
                            Requirements
                            <span className="material-symbols-outlined text-p-size">
                                arrow_forward
                            </span>
                        </div>
                    </button>
                </div>
                <div className="flex justify-between items-center mt-4 pt-8 border-t border-outline-variant">
                    <button className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface inline-flex items-center gap-2 px-4 py-3 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">
                            arrow_back
                        </span>
                        Back
                    </button>
                    <button
                        className="font-label-caps text-label-caps bg-surface-container-high text-on-surface-variant px-8 py-3 rounded-DEFAULT inline-flex items-center gap-2 transition-colors pointer-events-none opacity-50"
                        disabled
                        id="continue-btn"
                    >
                        Continue
                        <span className="material-symbols-outlined text-[16px]">
                            arrow_forward
                        </span>
                    </button>
                </div>
                <div className="text-center mt-8">
                    <a
                        className="font-body text-body text-on-surface-variant hover:text-primary transition-colors"
                        href="#"
                    >
                        Already have an account? Sign In
                    </a>
                </div>
            </main>
        </body>
    );
}