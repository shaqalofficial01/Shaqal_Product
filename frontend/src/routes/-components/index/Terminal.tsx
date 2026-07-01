import { type ReactNode } from "react";

export default function Terminal(): ReactNode {
    return (
        <section
            className="py-24 lg:py-48 bg-surface-container-lowest border-b border-outline-variant overflow-hidden"
            id="terminal"
        >
            <div className="max-w-360 mx-auto px-4 lg:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative bg-surface border border-outline-variant rounded-lg p-1 shadow-2xl aspect-5/4 flex flex-col">
                            <div className="flex items-center justify-between px-3 py-2 border-b border-outline-variant mb-1 bg-surface-container">
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
                                    <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
                                    <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
                                </div>
                                <div className="font-label-caps text-label-caps text-on-surface-variant">
                                    TradeOS Terminal
                                </div>
                            </div>

                            <div className="flex-1 grid grid-cols-12 gap-4 p-4">
                                <div className="col-span-3 border-r border-outline-variant pr-4 flex flex-col gap-2">
                                    <div className="h-6 bg-surface-container rounded"></div>
                                    <div className="h-6 bg-surface-container rounded"></div>
                                    <div className="h-6 bg-surface-container rounded"></div>
                                    <div className="h-6 bg-surface-container rounded mt-auto"></div>
                                </div>

                                <div className="col-span-9 flex flex-col gap-2">
                                    <div className="h-1/3 bg-surface-container border border-outline-variant rounded flex items-center justify-center relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 opacity-20"
                                            data-alt="A dark, high-contrast abstract digital data visualization resembling a stock market chart or financial trading terminal. Glowing amber and gold lines chart upward trends against a deep navy carbon background. Minimalist, professional, and highly technical."
                                            style={{
                                                backgroundImage: `url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBSWkVybMyT-Y2LTMDot6QLOJiQ-3V8K5Cglh1OzlIpFt1z8p_ChIkvC3ou35SZSwbF6JdkQDSsY87C5t2_XTKoPfWHqvst05oJXzhUS6-XNB4eMbRRTDIpTveez0TjKyzhAE7gNVHpUIMQhqkwMSGUrNmxmOg3maEvRqoL-F-HBVOqjUOtYyIhhcZMjdnhJeoJ61qHURIJYM--R0XQYn65dchxF6_btwrCcU0jd9xXodkQlG-rgQ4kZO_wJQHzUSAkszAojyY1VgE&quot;)`,
                                            }}
                                        ></div>
                                        <span className="material-symbols-outlined text-primary text-48 relative z-10">
                                            candlestick_chart
                                        </span>
                                    </div>
                                    <div className="flex-1 grid grid-cols-2 gap-2">
                                        <div className="bg-surface-container border border-outline-variant rounded p-3">
                                            <div className="h-2 bg-outline-variant w-1/2 rounded mb-4"></div>
                                            <div className="space-y-2">
                                                <div className="h-1 bg-surface-variant rounded w-full"></div>
                                                <div className="h-1 bg-surface-variant rounded w-3/4"></div>
                                            </div>
                                        </div>
                                        <div className="bg-surface-container border border-outline-variant rounded p-3 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 rounded-bl-full"></div>
                                            <div className="h-2 bg-primary/50 w-1/3 rounded mb-4"></div>
                                            <div className="h-4 bg-surface-variant rounded w-full mb-2"></div>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-4">
                                                    check_circle
                                                </span>
                                                <div className="h-1 bg-surface-variant rounded w-1/2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="sm:max-lg:max-w-150 sm:max-lg:mx-auto sm:max-lg:text-center text-[36px]! text-inverse-surface mb-4">
                            Command Central
                        </h2>
                        <p className="sm:max-lg:max-w-170 sm:max-lg:text-center sm:max-lg:mx-auto font-body text-body text-on-surface-variant mb-8">
                            The SHAQAL Terminal provides a unified dashboard for
                            all trading operations. Monitor live indices, manage
                            complex multi-leg deals, and review network
                            consensus in real-time from a secure,
                            high-performance desktop environment.
                        </p>
                        <ul className="sm:max-lg:max-w-140 sm:max-lg:mx-auto space-y-4 mb-8">
                            <li className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-primary mt-1">
                                    bolt
                                </span>
                                <div>
                                    <strong className="font-h2 text-h2 text-inverse-surface text-base block mb-1">
                                        Real-Time Execution
                                    </strong>
                                    <span className="font-body text-body text-on-surface-variant text-sm">
                                        Low-latency order routing and instant
                                        trade confirmation across the network.
                                    </span>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-primary mt-1">
                                    hub
                                </span>
                                <div>
                                    <strong className="font-h2 text-h2 text-inverse-surface text-base block mb-1">
                                        Network Consensus View
                                    </strong>
                                    <span className="font-body text-body text-on-surface-variant text-sm">
                                        Audit the state of the decentralized
                                        ledger and verify counterparties
                                        instantly.
                                    </span>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-primary mt-1">
                                    analytics
                                </span>
                                <div>
                                    <strong className="font-h2 text-h2 text-inverse-surface text-base block mb-1">
                                        Advanced Analytics
                                    </strong>
                                    <span className="font-body text-body text-on-surface-variant text-sm">
                                        Proprietary price indices and historical
                                        volume analysis tools built-in.
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <button className="sm:max-lg:max-w-max sm:max-lg:mx-auto sm:max-lg:block border border-primary text-primary hover:bg-primary/10 font-label-caps text-label-caps px-6 py-3 rounded transition-colors">
                            Explore the Terminal Features
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
