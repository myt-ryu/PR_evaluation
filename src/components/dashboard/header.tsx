
"use client";

import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { EvaluationForm } from "@/components/evaluation-form";
import { EvaluationFormValues } from "@/lib/schemas";

interface DashboardHeaderProps {
    onAddEvaluation: (values: EvaluationFormValues) => void;
}

export function DashboardHeader({ onAddEvaluation }: DashboardHeaderProps) {
    return (
        <header className="fixed top-0 w-full z-50 glass border-b border-white/5 backdrop-blur-3xl px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                        <span className="material-symbols-outlined text-primary text-xl">dataset</span>
                    </div>
                    <div>
                        <h1 className="text-xs font-black tracking-[0.2em] uppercase text-primary leading-none mb-0.5">SC PR EVALUATION</h1>
                        <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase">Management Dashboard</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">add</span>
                                <span>新規評価を追加</span>
                            </motion.button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl bg-[#0B0F19] text-white backdrop-blur-2xl">
                            <DialogHeader className="mb-4">
                                <DialogTitle className="text-2xl font-black tracking-tight text-primary uppercase italic">New Evaluation</DialogTitle>
                                <DialogDescription className="text-muted-foreground text-xs uppercase tracking-wider">
                                    Input data to calculate Strategic Impact Score (SIS).
                                </DialogDescription>
                            </DialogHeader>
                            <EvaluationForm onSubmit={onAddEvaluation} />
                        </DialogContent>
                    </Dialog>

                    <div className="w-9 h-9 rounded-full bg-slate-800 border border-white/10 overflow-hidden ring-1 ring-white/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAQ5ubpbDLxwzIj1u6FyCF-Dl2ublSxdrxwNCidywdDjeSA_LDDjwQBg9BX217JkaOfsZsWoRlhmUACN38DkuYgx6U84Ubq4LoEEQd6ndPR_1XH8FYdhTHebNbXFy-eLCH4J3Ax-Ah9eIUtyainNdqtJjpaz6zjn0RFdpyxqwlrONhiWTMWM9pBrnAvbFKPsH0OG96SCTei3w_WqbuWpJBGucn0SfrJln360fjrOQQqpcLS3xuEm0LDHXLa-4D356OMo8Za7MNT34b" className="w-full h-full object-cover opacity-80" />
                    </div>
                </div>
            </div>
        </header>
    );
}
