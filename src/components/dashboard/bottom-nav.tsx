
"use client";

export function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 py-2 flex justify-between items-center pb-[calc(env(safe-area-inset-bottom)+8px)] z-50 md:hidden">
            <button className="flex flex-col items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-[24px]">dashboard</span>
                <span className="text-[9px] font-bold">ダッシュボード</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400">
                <span className="material-symbols-outlined text-[24px]">analytics</span>
                <span className="text-[9px] font-medium">分析</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400">
                <span className="material-symbols-outlined text-[24px]">article</span>
                <span className="text-[9px] font-medium">記事一覧</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400">
                <span className="material-symbols-outlined text-[24px]">settings</span>
                <span className="text-[9px] font-medium">設定</span>
            </button>
        </nav>
    );
}
