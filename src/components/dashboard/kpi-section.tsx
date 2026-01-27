
"use client";

import { motion } from 'framer-motion';

interface KpiSectionProps {
    avgScore: string;
    highSegmentMatchCount: number;
    totalItems: number;
    highQualityRatio: number;
    containerVariants: any;
    itemVariants: any;
}

export function KpiSection({
    avgScore,
    highSegmentMatchCount,
    totalItems,
    highQualityRatio,
    containerVariants,
    itemVariants
}: KpiSectionProps) {

    return (
        <motion.div
            className="grid grid-cols-1 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
        >
            {/* SIS Card */}
            <motion.div variants={itemVariants} className="bg-card-light dark:bg-card-dark p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 tracking-wide">平均戦略的インパクト (SIS)</p>
                        <h3 className="text-4xl font-black mt-1 text-slate-900 dark:text-white leading-none">{avgScore}</h3>
                    </div>
                    <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-xl">
                        <span className="material-symbols-outlined text-primary">trending_up</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">+6.4%</span>
                    <p className="text-xs text-slate-400">目標値: &gt; 50.0</p>
                </div>
                <div className="absolute bottom-0 right-0 left-0 h-1.5 bg-slate-100 dark:bg-slate-800">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(parseFloat(avgScore), 100)}%` }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="h-full bg-primary"
                    />
                </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
                {/* Reach Card */}
                <motion.div variants={itemVariants} className="bg-card-light dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-indigo-500 text-xl">pie_chart</span>
                        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-tight">重点セグメント到達率</p>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="text-2xl font-black text-slate-900 dark:text-white">{highSegmentMatchCount} / {totalItems}</div>
                        <div className="w-10 h-10 relative flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90">
                                <circle className="text-slate-100 dark:text-slate-700" cx="20" cy="20" fill="transparent" r="16" stroke="currentColor" strokeWidth="4"></circle>
                                <circle
                                    className="text-indigo-500"
                                    cx="20" cy="20"
                                    fill="transparent" r="16"
                                    stroke="currentColor"
                                    strokeDasharray="100.5"
                                    strokeDashoffset={100.5 - (100.5 * (highSegmentMatchCount / Math.max(totalItems, 1)))}
                                    strokeWidth="4"
                                ></circle>
                            </svg>
                        </div>
                    </div>
                    <p className="text-[9px] mt-2 text-slate-400 leading-tight">高関心層をターゲットにした記事数</p>
                </motion.div>

                {/* Quality Ratio Card */}
                <motion.div variants={itemVariants} className="bg-card-light dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-amber-500 text-xl">equalizer</span>
                        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-tight">高評価記事比率</p>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="text-2xl font-black text-slate-900 dark:text-white">{highQualityRatio}%</div>
                        <div className="flex gap-0.5 items-end h-8">
                            <div className={`w-1.5 rounded-full ${highQualityRatio > 20 ? 'h-3 bg-amber-200 dark:bg-amber-900' : 'h-1 bg-slate-100'}`}></div>
                            <div className={`w-1.5 rounded-full ${highQualityRatio > 50 ? 'h-5 bg-amber-400 dark:bg-amber-700' : 'h-1 bg-slate-100'}`}></div>
                            <div className={`w-1.5 rounded-full ${highQualityRatio > 80 ? 'h-8 bg-amber-500' : 'h-1 bg-slate-100'}`}></div>
                        </div>
                    </div>
                    <p className="text-[9px] mt-2 text-slate-400 leading-tight">クオリティスコア 35点以上の記事</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
