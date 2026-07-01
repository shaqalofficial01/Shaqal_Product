import { type ReactNode, useState } from "react";
import clsx from "clsx";

type Role = "broker" | "buyer" | "supplier" | "financier";

export default function RoleSelection(): ReactNode {
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);

    const roles = [
        {
            id: "broker",
            icon: "handshake",
            title: "Broker",
            description:
                "Facilitate trades and connect institutional buyers with verified suppliers.",
        },
        {
            id: "buyer",
            icon: "account_balance",
            title: "Buyer",
            description:
                "Procure high-value minerals for institutional or industrial applications.",
        },
        {
            id: "supplier",
            icon: "local_shipping",
            title: "Supplier",
            description:
                "Originate and list verified mineral assets for institutional trade.",
        },
        {
            id: "financier",
            icon: "payments",
            title: "Financier",
            description:
                "Provide liquidity and financial instruments to back large-scale trades.",
        },
    ] as const;

    return (
        <div className="bg-background text-on-background min-h-screen flex flex-col justify-center items-center py-32 px-4 md:px-8">
            <main className="w-full max-w-200 flex flex-col gap-8">
                <header className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 font-label-caps text-label-caps text-on-surface-variant uppercase">
                        <span>Step 1 of 4</span>

                        <div className="flex-1 h-0.5 bg-surface-container-high rounded-full overflow-hidden">
                            <div className="h-full w-1/4 bg-primary"></div>
                        </div>
                    </div>

                    <div>
                        <h1 className="font-h1 text-[24px] text-on-surface">
                            Who are you?
                        </h1>

                        <p className="font-body text-body text-on-surface-variant mt-2">
                            Select your primary role in the Shaqal TradeOS
                            network to proceed.
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {roles.map((role) => (
                        <button
                            key={role.id}
                            onClick={() => setSelectedRole(role.id)}
                            className={clsx(
                                "relative text-left bg-surface-container-low border border-outline-variant p-6 rounded-lg flex flex-col gap-4 transition-colors duration-200 hover:bg-surface-container",
                                selectedRole === role.id &&
                                    "border-primary bg-surface-container",
                            )}
                        >
                            <div
                                className={clsx(
                                    "absolute top-4 right-4 w-3 h-3 rounded-full bg-primary",
                                    selectedRole === role.id
                                        ? "block"
                                        : "hidden",
                                )}
                            />

                            <span
                                className="material-symbols-outlined text-[56px]! text-primary"
                                style={{
                                    fontVariationSettings: '"FILL" 1',
                                }}
                            >
                                {role.icon}
                            </span>

                            <div className="flex flex-col gap-2">
                                <h2 className="font-h2 text-h2 font-bold text-on-surface">
                                    {role.title}
                                </h2>

                                <p className="font-body text-body text-on-surface-variant">
                                    {role.description}
                                </p>
                            </div>

                            <div className="mt-auto font-label-caps text-label-caps text-primary hover:text-primary-fixed-dim inline-flex items-center gap-1">
                                Requirements
                                <span className="material-symbols-outlined text-p-size">
                                    arrow_forward
                                </span>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-4 pt-8 border-t border-outline-variant">
                    <button className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface inline-flex items-center gap-2 px-4 py-3 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">
                            arrow_back
                        </span>
                        Back
                    </button>

                    <button
                        disabled={!selectedRole}
                        className={clsx(
                            "font-label-caps text-label-caps px-8 py-3 rounded inline-flex items-center gap-2 transition-colors",
                            selectedRole
                                ? "bg-primary text-on-primary hover:bg-primary-fixed"
                                : "bg-surface-container-high text-on-surface-variant pointer-events-none opacity-50",
                        )}
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
        </div>
    );
}
