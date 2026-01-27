
"use client";

export function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-[#09120D]/90 backdrop-blur-md border-t border-white/5 px-6 py-4 flex justify-between items-center pb-[calc(env(safe-area-inset-bottom)+12px)] z-50 md:hidden">
            <button className="flex flex-col items-center gap-1.5 text-primary group">
                <span className="material-symbols-outlined text-[24px] group-hover:drop-shadow-[0_0_8px_rgba(0,255,42,0.8)] transition-all">dashboard</span>
                <span className="text-[9px] font-bold tracking-widest uppercase">Dash</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-muted-foreground/50 hover:text-white transition-colors group">
                <span className="material-symbols-outlined text-[24px] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">analytics</span>
                <span className="text-[9px] font-medium tracking-widest uppercase">Analyze</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-muted-foreground/50 hover:text-white transition-colors group">
                <span className="material-symbols-outlined text-[24px] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">article</span>
                <span className="text-[9px] font-medium tracking-widest uppercase">News</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-muted-foreground/50 hover:text-white transition-colors group">
                <span className="material-symbols-outlined text-[24px] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">settings</span>
                <span className="text-[9px] font-medium tracking-widest uppercase">Config</span>
            </button>
        </nav>
    );
}
