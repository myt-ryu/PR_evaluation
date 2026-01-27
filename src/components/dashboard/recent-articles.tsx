
"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EvaluationItem } from '@/types/evaluation';

interface RecentArticlesProps {
    data: EvaluationItem[];
}

export function RecentArticles({ data }: RecentArticlesProps) {
    return (
        <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="h-full flex flex-col"
            viewport={{ once: true }}
        >
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">history</span>
                    Recent Activity
                </h4>
                <button className="text-[10px] font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 uppercase tracking-wider border border-primary/20 bg-primary/5 px-2 py-1 rounded">
                    See All <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                </button>
            </div>

            <div className="glass-card flex-1 relative overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/[0.02] border-b border-white/5">
                                <th className="py-4 px-6 text-[9px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">Publication Analytics</th>
                                <th className="py-4 px-4 text-[9px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">Source</th>
                                <th className="py-4 px-6 text-[9px] font-black text-muted-foreground/60 uppercase tracking-[0.2em] text-right">SIS Score</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.03]">
                            {data.map((item) => (
                                <tr key={item.id} className="group hover:bg-primary/[0.03] transition-all cursor-pointer">
                                    <td className="py-5 px-6">
                                        <p className="text-xs font-black text-white group-hover:text-primary transition-colors tracking-tight">
                                            {item.title}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <span className="text-[9px] text-muted-foreground font-mono uppercase tracking-widest">
                                                {item.date}
                                            </span>
                                            {item.prominence && (
                                                <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20 tracking-tighter">
                                                    CRITICAL_HIT
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded bg-slate-900 border border-white/10 flex items-center justify-center text-[9px] font-black text-muted-foreground">
                                                {item.mediaName.charAt(0)}
                                            </div>
                                            <span className="text-[10px] font-bold text-muted-foreground tracking-wide uppercase">
                                                {item.mediaName}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-5 px-6 text-right">
                                        <div className="flex justify-end">
                                            <span className={cn(
                                                "text-xs font-black px-3 py-1 rounded-lg border font-mono tracking-tighter",
                                                item.strategicImpactScore >= 60
                                                    ? "bg-primary/10 text-primary border-primary/30 shadow-[0_0_10px_rgba(45,212,191,0.2)]"
                                                    : item.strategicImpactScore < 30
                                                        ? "bg-red-500/10 text-red-500 border-red-500/20"
                                                        : "bg-secondary/10 text-secondary border-secondary/20"
                                            )}>
                                                {item.strategicImpactScore.toFixed(1)}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.section>
    );
}
