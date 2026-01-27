
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EvaluationItem } from '@/types/evaluation';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

interface RecentArticlesProps {
    data: EvaluationItem[];
    onDelete: (id: string) => void;
    onBulkDelete: (ids: string[]) => void;
    onClearAll: () => void;
}

export function RecentArticles({ data, onDelete, onBulkDelete, onClearAll }: RecentArticlesProps) {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedIds(data.map(item => item.id));
        } else {
            setSelectedIds([]);
        }
    };

    const handleSelectItem = (id: string, checked: boolean) => {
        if (checked) {
            setSelectedIds([...selectedIds, id]);
        } else {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
        }
    };

    const handleBulkDeleteClick = () => {
        onBulkDelete(selectedIds);
        setSelectedIds([]);
    };

    const handleClearAllClick = () => {
        onClearAll();
        setSelectedIds([]);
    };
    return (
        <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="h-full flex flex-col"
            viewport={{ once: true }}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <h4 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">history</span>
                        Recent Activity
                    </h4>
                    {data.length > 0 && (
                        <div className="flex items-center gap-1">
                            <Checkbox
                                checked={selectedIds.length === data.length && data.length > 0}
                                onCheckedChange={handleSelectAll}
                                className="border-muted-foreground/30"
                            />
                            <span className="text-[10px] text-muted-foreground">全選択</span>
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    {selectedIds.length > 0 && (
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={handleBulkDeleteClick}
                            className="text-[10px] h-7 px-2"
                        >
                            選択を削除 ({selectedIds.length})
                        </Button>
                    )}
                    {data.length > 0 && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleClearAllClick}
                            className="text-[10px] h-7 px-2 border-destructive/30 text-destructive hover:bg-destructive/10"
                        >
                            全て削除
                        </Button>
                    )}
                </div>
            </div>

            <div className="glass-card flex-1 relative overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/[0.02] border-b border-white/5">
                                <th className="py-4 px-3 w-10"></th>
                                <th className="py-4 px-6 text-[9px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">Publication Analytics</th>
                                <th className="py-4 px-4 text-[9px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">Source</th>
                                <th className="py-4 px-6 text-[9px] font-black text-muted-foreground/60 uppercase tracking-[0.2em] text-right">SIS Score</th>
                                <th className="py-4 px-3 w-10"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.03]">
                            {data.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-12 text-center text-muted-foreground/50 text-sm">
                                        データがありません
                                    </td>
                                </tr>
                            ) : (
                                data.map((item) => (
                                    <tr
                                        key={item.id}
                                        className={cn(
                                            "group hover:bg-primary/[0.03] transition-all",
                                            selectedIds.includes(item.id) && "bg-primary/5"
                                        )}
                                    >
                                        <td className="py-5 px-3">
                                            <Checkbox
                                                checked={selectedIds.includes(item.id)}
                                                onCheckedChange={(checked) => handleSelectItem(item.id, checked as boolean)}
                                                className="border-muted-foreground/30"
                                            />
                                        </td>
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
                                        <td className="py-5 px-3">
                                            <button
                                                onClick={() => onDelete(item.id)}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive/80 p-1"
                                                aria-label="削除"
                                            >
                                                <span className="material-symbols-outlined text-base">close</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.section>
    );
}
