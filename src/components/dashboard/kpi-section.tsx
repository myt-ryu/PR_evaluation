
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
        >
            {/* Main Score - SIS Card */}
            <motion.div variants={itemVariants} className="glass-card p-6 md:col-span-1 border-primary/20 bg-primary/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex justify-between items-start mb-6">
                    <div>
                        <p className="text-[10px] font-black text-primary tracking-[0.2em] uppercase mb-2">平均戦略インパクト (SIS)</p>
                        <h3 className="text-6xl font-black text-white leading-none tracking-tighter neon-text">{avgScore}</h3>
                    </div>
                    <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-xl">analytics</span>
                    </div>
                </div>
                <div className="relative z-10 flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30 shadow-[0_0_10px_rgba(45,212,191,0.2)]">+6.4%</span>
                    <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest leading-none">TARGET: 50.0</p>
                </div>
            </motion.div>

            {/* Reach Card */}
            <motion.div variants={itemVariants} className="glass-card p-6 border-white/5 group hover:border-white/20">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-secondary/10 rounded-lg border border-secondary/20">
                        <span className="material-symbols-outlined text-secondary text-base">target</span>
                    </div>
                    <p className="text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase">重点セグメント到達率</p>
                </div>
                <div className="flex items-end justify-between">
                    <div>
                        <div className="text-4xl font-black text-white tracking-tighter">{highSegmentMatchCount} <span className="text-lg text-muted-foreground tracking-tight ml-1">/ {totalItems}</span></div>
                        <p className="text-[9px] mt-2 text-muted-foreground/60 uppercase tracking-widest font-bold">高関心層ターゲット記事数</p>
                    </div>
                    <div className="w-14 h-14 relative flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90">
                            <circle className="text-white/5" cx="28" cy="28" fill="transparent" r="22" stroke="currentColor" strokeWidth="3"></circle>
                            <circle
                                className="text-secondary drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                                cx="28" cy="28"
                                fill="transparent" r="22"
                                stroke="currentColor"
                                strokeDasharray="138"
                                strokeDashoffset={138 - (138 * (highSegmentMatchCount / Math.max(totalItems, 1)))}
                                strokeWidth="3"
                                strokeLinecap="round"
                            ></circle>
                        </svg>
                        <span className="absolute text-[10px] font-black text-secondary">{Math.round((highSegmentMatchCount / Math.max(totalItems, 1)) * 100)}%</span>
                    </div>
                </div>
            </motion.div>

            {/* Quality Ratio Card */}
            <motion.div variants={itemVariants} className="glass-card p-6 border-white/5 group hover:border-white/20">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-base">verified</span>
                    </div>
                    <p className="text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase">高評価記事比率</p>
                </div>
                <div className="flex items-end justify-between">
                    <div>
                        <div className="text-4xl font-black text-white tracking-tighter">{highQualityRatio}<span className="text-xl ml-0.5">%</span></div>
                        <p className="text-[9px] mt-2 text-muted-foreground/60 uppercase tracking-widest font-bold">QSスコア 35点以上</p>
                    </div>
                    <div className="flex gap-1.5 items-end h-10 mb-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className={cn(
                                    "w-1.5 rounded-full transition-all duration-700",
                                    highQualityRatio >= i * 20
                                        ? "bg-primary shadow-[0_0_8px_rgba(45,212,191,0.4)]"
                                        : "bg-white/10"
                                )}
                                style={{ height: `${20 + i * 16}%` }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
