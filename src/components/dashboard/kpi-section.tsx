
"use client";

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface KpiSectionProps {
    avgScore: string;
    highSegmentMatchCount: number;
    totalItems: number;
    highQualityRatio: number;
    containerVariants: Variants;
    itemVariants: Variants;
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
            className="grid grid-cols-1 md:grid-cols-12 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
        >
            {/* Main Score - SIS Card - P0 Mock Alignment */}
            <motion.div variants={itemVariants} className="md:col-span-8 glass-card p-8 border-white/5 bg-white/[0.02] relative overflow-hidden group min-h-[220px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />

                <div className="relative z-10 flex justify-between items-start">
                    <div>
                        <p className="text-[9px] font-black text-white/40 tracking-[0.3em] uppercase mb-1">平均戦略インパクト (SIS)</p>
                        <h3 className="text-7xl font-black text-white leading-none tracking-tighter tabular-nums drop-shadow-2xl">
                            {avgScore}
                        </h3>
                        <p className="text-[10px] text-muted-foreground font-bold mt-2 flex items-center gap-2">
                            <span className="text-primary font-black">+6.4%</span>
                            <span className="opacity-40">Previous Year Comparison</span>
                        </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <div className="w-16 h-16 rounded-full border-4 border-primary shadow-[0_0_20px_rgba(45,212,191,0.3)] flex items-center justify-center bg-[#020617]">
                            <span className="text-xl font-black text-primary italic">A+</span>
                        </div>
                        <span className="text-[8px] font-black text-primary tracking-widest uppercase mt-2">Target Passed</span>
                    </div>
                </div>

                <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex gap-8">
                        <div>
                            <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">Target Score</p>
                            <p className="text-sm font-black text-white/80 tabular-nums">50.0</p>
                        </div>
                        <div>
                            <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">Evaluation Period</p>
                            <p className="text-sm font-black text-white/80">FY2024</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[9px] font-black text-white/60 tracking-widest uppercase">Live Data Feed</span>
                    </div>
                </div>
            </motion.div>

            {/* Reach & Quality - Side Stack */}
            <div className="md:col-span-4 flex flex-col gap-4">
                {/* Reach Card */}
                <motion.div variants={itemVariants} className="glass-card p-6 border-white/5 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <p className="text-[9px] font-black text-white/40 tracking-[0.2em] uppercase">重点セグメント到達率</p>
                        <span className="material-symbols-outlined text-secondary text-base">radar</span>
                    </div>
                    <div className="flex items-end justify-between mt-4">
                        <div className="text-4xl font-black text-white tracking-tighter">
                            {highSegmentMatchCount}
                            <span className="text-sm text-white/20 ml-1">/ {totalItems}</span>
                        </div>
                        <div className="w-12 h-12 relative flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90">
                                <circle className="text-white/5" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="3"></circle>
                                <circle
                                    className="text-secondary"
                                    cx="24" cy="24"
                                    fill="transparent" r="20"
                                    stroke="currentColor"
                                    strokeDasharray="125"
                                    strokeDashoffset={125 - (125 * (highSegmentMatchCount / Math.max(totalItems, 1)))}
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                ></circle>
                            </svg>
                        </div>
                    </div>
                </motion.div>

                {/* Quality Card */}
                <motion.div variants={itemVariants} className="glass-card p-6 border-white/5 flex-1 flex flex-col justify-between bg-primary/[0.03]">
                    <div className="flex items-center justify-between">
                        <p className="text-[9px] font-black text-primary tracking-[0.2em] uppercase">高評価記事比率</p>
                        <span className="material-symbols-outlined text-primary text-base">verified</span>
                    </div>
                    <div className="flex items-end justify-between mt-4">
                        <div className="text-4xl font-black text-white tracking-tighter">
                            {highQualityRatio}<span className="text-lg ml-0.5 opacity-40">%</span>
                        </div>
                        <div className="flex gap-1 items-end h-8 mb-1">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "w-1 rounded-full",
                                        highQualityRatio >= i * 25 ? "bg-primary" : "bg-white/10"
                                    )}
                                    style={{ height: `${25 + i * 25}%` }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
