import { type ReactNode } from "react";

export default function Infrastructure(): ReactNode {
    return (
        <section className="py-24 lg:py-48 border-b border-outline-variant bg-surface">
            <div className="max-w-360 mx-auto px-4 lg:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h5 className="sm:max-lg:max-w-150 sm:max-lg:mx-auto text-[36px]! text-inverse-surface mb-4">
                        Institutional Grade Infrastructure
                    </h5>
                    <p className="sm:max-lg:max-w-170 sm:max-lg:mx-auto font-body text-body text-on-surface-variant">
                        Built for the demanding realities of global commodity
                        trading, SHAQAL provides unprecedented security, speed,
                        and transparency.
                    </p>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap justify-center max-lg:max-w-100 max-lg:mx-auto gap-4">
                    <div className="bg-surface-container border border-outline-variant p-8 rounded-lg hover:border-primary transition-colors group">
                        <div className="w-12 h-12 rounded bg-surface border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                            <span
                                className="material-symbols-outlined text-primary text-8"
                                data-weight="fill"
                            >
                                shield_locked
                            </span>
                        </div>
                        <h3 className="font-h2 text-5 text-inverse-surface mb-3">
                            Cryptographic Provenance
                        </h3>
                        <p className="font-body text-body text-on-surface-variant leading-relaxed mb-6">
                            End-to-end traceability utilizing immutable ledger
                            technology. Every mineral lot is digitally twinned,
                            tracking custody, composition, and compliance from
                            the mine gate to final delivery.
                        </p>
                        <div className="flex items-center gap-2 font-label-caps text-label-caps text-primary cursor-pointer">
                            Explore Architecture
                            <span className="material-symbols-outlined text-4">
                                chevron_right
                            </span>
                        </div>
                    </div>

                    <div className="bg-surface-container border border-outline-variant p-8 rounded-lg hover:border-primary transition-colors group">
                        <div className="w-12 h-12 rounded bg-surface border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                            <span
                                className="material-symbols-outlined text-primary text-8"
                                data-weight="fill"
                            >
                                account_balance
                            </span>
                        </div>
                        <h3 className="font-h2 text-5 text-inverse-surface mb-3">
                            Atomic Settlement
                        </h3>
                        <p className="font-body text-body text-on-surface-variant leading-relaxed mb-6">
                            Instantaneous, risk-free multi-party payouts. Smart
                            contracts automate complex distribution logic,
                            clearing funds exactly when verified delivery
                            conditions are met, eliminating counterparty risk.
                        </p>
                        <div className="flex items-center gap-2 font-label-caps text-label-caps text-primary cursor-pointer">
                            View Settlement Protocol
                            <span className="material-symbols-outlined text-4">
                                chevron_right
                            </span>
                        </div>
                    </div>

                    <div className="bg-surface-container border border-outline-variant p-8 rounded-lg hover:border-primary transition-colors group">
                        <div className="w-12 h-12 rounded bg-surface border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                            <span
                                className="material-symbols-outlined text-primary text-8"
                                data-weight="fill"
                            >
                                verified_user
                            </span>
                        </div>
                        <h3 className="font-h2 text-5 text-inverse-surface mb-3">
                            Institutional Trust
                        </h3>
                        <p className="font-body text-body text-on-surface-variant leading-relaxed mb-6">
                            Automated KYC/AML compliance enforcement. Built-in
                            regulatory reporting, automated document generation,
                            and continuous risk scoring of all network
                            participants and counterparties.
                        </p>
                        <div className="flex items-center gap-2 font-label-caps text-label-caps text-primary cursor-pointer">
                            Review Compliance Docs
                            <span className="material-symbols-outlined text-4">
                                chevron_right
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
