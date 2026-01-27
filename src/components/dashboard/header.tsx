
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
        <header className="px-5 pt-4 pb-2 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-[env(safe-area-inset-top)] z-50">
            <div className="max-w-md mx-auto md:max-w-5xl">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-xl">insights</span>
                        </div>
                        <h1 className="font-bold text-base tracking-tight text-slate-900 dark:text-white">SC 広報評価</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">ユーザー</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">ジョン・ドウ</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
                            <img alt="User Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAQ5ubpbDLxwzIj1u6FyCF-Dl2ublSxdrxwNCidywdDjeSA_LDDjwQBg9BX217JkaOfsZsWoRlhmUACN38DkuYgx6U84Ubq4LoEEQd6ndPR_1XH8FYdhTHebNbXFy-eLCH4J3Ax-Ah9eIUtyainNdqtJjpaz6zjn0RFdpyxqwlrONhiWTMWM9pBrnAvbFKPsH0OG96SCTei3w_WqbuWpJBGucn0SfrJln360fjrOQQqpcLS3xuEm0LDHXLa-4D356OMo8Za7MNT34b" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-end pb-2">
                    <div>
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">ダッシュボード</h2>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 max-w-[240px]">広告換算額を超えたサイエンス・コミュニケーションの影響度測定</p>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                aria-label="新規評価を追加"
                                className="bg-primary hover:bg-teal-700 text-white p-2.5 rounded-full shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined">add</span>
                            </motion.button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl">
                            <DialogHeader>
                                <DialogTitle>新規評価を追加</DialogTitle>
                                <DialogDescription>
                                    メディア掲載の詳細を入力して、戦略的インパクトスコア（SIS）を算出します。
                                </DialogDescription>
                            </DialogHeader>
                            <EvaluationForm onSubmit={onAddEvaluation} />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </header>
    );
}
