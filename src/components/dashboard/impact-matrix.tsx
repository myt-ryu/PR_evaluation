
"use client";

import { motion } from 'framer-motion';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell } from 'recharts';
import { EvaluationItem } from '@/types/evaluation';

interface ImpactMatrixProps {
    data: EvaluationItem[];
}

export function ImpactMatrix({ data }: ImpactMatrixProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
        >
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-[10px] font-black tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">bubble_chart</span>
                    Impact Matrix
                </h4>
                <p className="text-[10px] font-bold text-muted-foreground/50 tracking-widest uppercase">Content (Y) vs Media (X)</p>
            </div>
            <div className="glass-card p-6 flex-1 relative overflow-hidden flex flex-col">
                <div className="relative w-full flex-1 border-l border-b border-white/5 flex flex-wrap bg-primary/[0.02] rounded-bl-xl mt-2 mb-4">
                    {/* Axis Labels */}
                    <div className="absolute -left-8 top-1/2 -rotate-90 text-[8px] font-black text-muted-foreground/40 tracking-[0.3em] uppercase origin-center translate-y-[-50%]">Content Quality</div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] font-black text-muted-foreground/40 tracking-[0.3em] uppercase">Media Authority</div>

                    {/* Zones */}
                    <div className="w-1/2 h-1/2 border-r border-b border-white/5 p-2 flex items-center justify-center relative">
                        <span className="text-[9px] text-muted-foreground/20 font-black uppercase tracking-[0.2em]">Growth Zone</span>
                    </div>
                    <div className="w-1/2 h-1/2 border-b border-white/5 bg-primary/[0.03] p-2 flex items-center justify-center relative">
                        <span className="text-[9px] text-primary/40 font-black uppercase tracking-[0.2em]">Strategic High</span>
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-1/2 h-1/2 border-r border-white/5 p-2 flex items-center justify-center relative">
                        <span className="text-[9px] text-muted-foreground/20 font-black uppercase tracking-[0.2em]">Baseline</span>
                    </div>
                    <div className="w-1/2 h-1/2 p-2 flex items-center justify-center relative">
                        <span className="text-[9px] text-muted-foreground/20 font-black uppercase tracking-[0.2em]">Potential</span>
                    </div>

                    {/* Recharts Overlay */}
                    <div className="absolute inset-0 z-20">
                        <ResponsiveContainer width="100%" height="100%">
                            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                <XAxis type="number" dataKey="mediaImpactScore" domain={[0, 60]} hide />
                                <YAxis type="number" dataKey="contentQualityScore" domain={[0, 60]} hide />
                                <ZAxis type="number" dataKey="strategicImpactScore" range={[150, 800]} />
                                <Tooltip
                                    cursor={{ strokeDasharray: '3 3', stroke: 'rgba(255,255,255,0.1)' }}
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            const data = payload[0].payload;
                                            return (
                                                <div className="bg-[#0F1524]/95 backdrop-blur-xl p-4 border border-white/10 shadow-2xl rounded-2xl text-xs z-50 min-w-[200px]">
                                                    <p className="font-black mb-2 text-white border-b border-white/5 pb-2 uppercase tracking-tight">{data.title}</p>
                                                    <div className="flex justify-between items-center text-[10px] mb-3">
                                                        <span className="text-muted-foreground font-bold tracking-widest uppercase">SIS Efficiency</span>
                                                        <span className="font-black text-primary text-xl neon-text">{data.strategicImpactScore.toFixed(0)}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center text-[8px] font-bold text-muted-foreground">{data.mediaName.charAt(0)}</div>
                                                        <p className="text-muted-foreground/70 text-[9px] font-bold tracking-wider">{data.mediaName}</p>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Scatter name="Evaluations" data={data}>
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.strategicImpactScore >= 60 ? 'var(--primary)' : entry.strategicImpactScore < 30 ? '#ef4444' : '#3B82F6'}
                                            stroke="rgba(255,255,255,0.2)"
                                            strokeWidth={1}
                                            className="drop-shadow-[0_0_10px_rgba(45,212,191,0.3)] hover:brightness-125 transition-all cursor-pointer opacity-90"
                                        />
                                    ))}
                                </Scatter>
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="flex gap-6 mt-2 justify-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(45,212,191,0.5)]"></div>
                        <span className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.2em]">Critical</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(59,130,246,0.3)]"></div>
                        <span className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.2em]">Standard</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-destructive shadow-[0_0_8px_rgba(239,68,68,0.3)]"></div>
                        <span className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.2em]">Low Yield</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
