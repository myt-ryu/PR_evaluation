
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
            className="pb-safe"
            viewport={{ once: true }}
        >
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase">最近の掲載実績</h4>
                <button className="text-[10px] font-bold text-primary underline">すべて見る</button>
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50">
                            <th className="py-3 px-4 text-[10px] font-bold text-slate-400">記事タイトル</th>
                            <th className="py-3 px-4 text-[10px] font-bold text-slate-400">メディア</th>
                            <th className="py-3 px-4 text-[10px] font-bold text-slate-400 text-center">SIS</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {data.map((item, index) => (
                            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">{item.title}</p>
                                    <p className="text-[9px] text-slate-400 mt-0.5">{item.date.replace(/-/g, '年').replace(/(\d{4}年)(\d{2}年)/, '$1$2月')}</p>
                                    {/* ^ Simple mock date format adjustment, ideally use date-fns */}
                                </td>
                                <td className="py-3 px-4">
                                    <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">
                                        {item.mediaName}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className={cn(
                                        "text-xs font-bold",
                                        item.strategicImpactScore >= 60 ? "text-primary" :
                                            item.strategicImpactScore < 30 ? "text-red-500" : "text-amber-500"
                                    )}>
                                        {item.strategicImpactScore}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.section>
    );
}
