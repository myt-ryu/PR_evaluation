
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase">インパクト・マトリクス</h4>
                <p className="text-[9px] font-medium text-slate-400">記事の質 (Y) vs メディア力 (X)</p>
            </div>
            <div className="bg-card-light dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="relative w-full aspect-square border-l-2 border-b-2 border-slate-200 dark:border-slate-700 flex flex-wrap">
                    {/* Axis Labels */}
                    <div className="absolute -left-8 top-1/2 -rotate-90 text-[9px] font-bold text-slate-400">記事の質</div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-400">メディア力</div>

                    {/* Zones */}
                    <div className="w-1/2 h-1/2 border-r border-b border-slate-100 dark:border-slate-800 p-2 flex items-center justify-center">
                        <span className="text-[9px] text-slate-300 font-medium">中</span>
                    </div>
                    <div className="w-1/2 h-1/2 border-b border-slate-100 dark:border-slate-800 bg-teal-50/30 dark:bg-teal-900/10 p-2 flex items-center justify-center relative">
                        <span className="text-[10px] text-primary font-bold z-10">高インパクト</span>
                        <div className="absolute top-4 right-4 w-6 h-6 bg-primary/40 rounded-full border border-primary animate-pulse opacity-50"></div>
                    </div>
                    <div className="w-1/2 h-1/2 border-r border-slate-100 dark:border-slate-800 p-2 flex items-center justify-center">
                        <span className="text-[9px] text-slate-300 font-medium">低</span>
                    </div>
                    <div className="w-1/2 h-1/2 p-2 flex items-center justify-center">
                        <span className="text-[9px] text-slate-300 font-medium">中</span>
                    </div>

                    {/* Recharts Overlay */}
                    <div className="absolute inset-0 pt-0 pr-0 pl-0 pb-0 z-20">
                        <ResponsiveContainer width="100%" height="100%">
                            <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                                <XAxis type="number" dataKey="mediaImpactScore" name="Media Impact" domain={[0, 60]} hide />
                                <YAxis type="number" dataKey="contentQualityScore" name="Content Quality" domain={[0, 60]} hide />
                                <ZAxis type="number" dataKey="strategicImpactScore" range={[40, 150]} />
                                <Tooltip
                                    cursor={{ strokeDasharray: '3 3', stroke: '#94a3b8' }}
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            const data = payload[0].payload;
                                            return (
                                                <div className="bg-white/95 backdrop-blur-sm p-3 border border-slate-100 shadow-xl rounded-xl text-xs z-50 min-w-[150px]">
                                                    <p className="font-bold mb-1 text-slate-800">{data.title}</p>
                                                    <div className="flex justify-between items-center text-[10px] text-slate-500 mb-0.5">
                                                        <span>SIS Score:</span>
                                                        <span className="font-bold text-primary text-sm">{data.strategicImpactScore}</span>
                                                    </div>
                                                    <p className="text-slate-400 text-[9px]">{data.mediaName}</p>
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
                                            fill={entry.strategicImpactScore >= 60 ? '#0D9488' : entry.strategicImpactScore < 30 ? '#ef4444' : '#f59e0b'}
                                            stroke="white"
                                            strokeWidth={1}
                                            className="drop-shadow-sm hover:drop-shadow-md transition-all cursor-pointer opacity-80 hover:opacity-100"
                                        />
                                    ))}
                                </Scatter>
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="mt-8 flex justify-between px-2">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-[10px] text-slate-500">高</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <span className="text-[10px] text-slate-500">中</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                        <span className="text-[10px] text-slate-500">低</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
