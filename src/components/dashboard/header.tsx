
"use client";

import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { EvaluationForm } from "@/components/evaluation-form";
import { EvaluationFormValues } from "@/lib/schemas";

interface DashboardHeaderProps {
    onAddEvaluation: (values: EvaluationFormValues) => void;
    years: string[];
    selectedYear: string;
    onYearChange: (year: string) => void;
}

export function DashboardHeader({ onAddEvaluation, years, selectedYear, onYearChange }: DashboardHeaderProps) {
    return (
        <header className="fixed top-0 w-full z-50 bg-[#020617]/80 border-b border-white/5 backdrop-blur-xl px-8 py-4">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between relative">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded flex items-center justify-center bg-primary/20 border border-primary/30">
                        <span className="material-symbols-outlined text-primary text-[14px]">square</span>
                    </div>
                    <h1 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/50 leading-none">SC PR EVALUATION</h1>
                </div>

                {/* Centered Large Action Button */}
                <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 rounded-lg font-black text-[11px] uppercase tracking-[0.2em] shadow-[0_4px_30px_rgba(59,130,246,0.35)] flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">add_circle</span>
                                <span>新規評価を追加</span>
                            </motion.button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl bg-[#0B0F19] text-white">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-black tracking-tight text-primary uppercase italic">New Evaluation</DialogTitle>
                                <DialogDescription className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">
                                    Strategic Impact Score Analysis
                                </DialogDescription>
                            </DialogHeader>
                            <EvaluationForm onSubmit={onAddEvaluation} />
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Right Side: Year Selector + User Avatar */}
                <div className="flex items-center gap-4 relative z-10">
                    {/* Year Selector */}
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">年度:</span>
                        <select
                            value={selectedYear}
                            onChange={(e) => onYearChange(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-xs font-bold text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                        >
                            <option value="all" className="bg-[#020617] text-white">全ての年度</option>
                            {years.filter(y => y !== 'all').map(year => (
                                <option key={year} value={year} className="bg-[#020617] text-white">{year}年</option>
                            ))}
                        </select>
                    </div>

                    {/* User Avatar */}
                    <div className="w-9 h-9 rounded-full bg-slate-800 border border-white/10 overflow-hidden ring-1 ring-white/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAQ5ubpbDLxwzIj1u6FyCF-Dl2ublSxdrxwNCidywdDjeSA_LDDjwQBg9BX217JkaOfsZsWoRlhmUACN38DjeSA_LDDjwQBg9BX217JkaOfsZsWoRlhmUACN38DkuYgx6U84Ubq4LoEEQd6ndPR_1XH8FYdhTHebNbXFy-eLCH4J3Ax-Ah9eIUtyainNdqtJjpaz6zjn0RFdpyxqwlrONhiWTMWM9pBrnAvbFKPsH0OG96SCTei3w_WqbuWpJBGucn0SfrJln360fjrOQQqpcLS3xuEm0LDHXLa-4D356OMo8Za7MNT34b" className="w-full h-full object-cover opacity-80" />
                    </div>
                </div>
            </div>
        </header>
    );
}
