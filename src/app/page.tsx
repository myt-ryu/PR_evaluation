
"use client";

import { useState } from 'react';
import { Variants } from 'framer-motion';
import { EvaluationFormValues } from "@/lib/schemas";
import { calculateScores } from "@/lib/calculator";
import { EvaluationItem } from '@/types/evaluation';
import { DashboardHeader } from '@/components/dashboard/header';
import { KpiSection } from '@/components/dashboard/kpi-section';
import { ImpactMatrix } from '@/components/dashboard/impact-matrix';
import { RecentArticles } from '@/components/dashboard/recent-articles';
import { BottomNav } from '@/components/dashboard/bottom-nav';

// Mock Data
const INITIAL_DATA: EvaluationItem[] = [
    {
        id: '1', title: '新技術の発表について', mediaName: 'テック・デイリー', date: '2024-01-15',
        reach: 50000, segmentMatch: 'High', prominence: true, tone: 'Positive',
        messageDelivery: true, actionDriver: true,
        mediaImpactScore: 30, contentQualityScore: 50, strategicImpactScore: 80
    },
    {
        id: '2', title: '業界動向レポート', mediaName: '週刊ニュース', date: '2024-01-20',
        reach: 2000000, segmentMatch: 'Low', prominence: true, tone: 'Negative',
        messageDelivery: false, actionDriver: false,
        mediaImpactScore: 15, contentQualityScore: 0, strategicImpactScore: 15
    },
    {
        id: '3', title: '大学との共同研究特集', mediaName: 'サイエンス・ウェブ', date: '2024-01-22',
        reach: 15000, segmentMatch: 'High', prominence: true, tone: 'Positive',
        messageDelivery: true, actionDriver: true,
        mediaImpactScore: 22, contentQualityScore: 22, strategicImpactScore: 72 // Adjusted Q-score to match "Middle" chart pos if needed, but using random data
    },
    {
        id: '4', title: '地域イベントの取材記事', mediaName: 'シティ・タイムズ', date: '2024-01-25',
        reach: 30000, segmentMatch: 'Medium', prominence: false, tone: 'Neutral',
        messageDelivery: true, actionDriver: true,
        mediaImpactScore: 10, contentQualityScore: 35, strategicImpactScore: 45
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
};

export default function Dashboard() {
    const [data, setData] = useState<EvaluationItem[]>(INITIAL_DATA);

    const handleAddEvaluation = (values: EvaluationFormValues) => {
        const newItem: EvaluationItem = {
            id: Math.random().toString(),
            title: values.title,
            mediaName: values.mediaName,
            date: values.date,
            reach: values.reach,
            segmentMatch: values.segmentMatch,
            prominence: values.prominence,
            tone: values.tone,
            messageDelivery: values.messageDelivery,
            actionDriver: values.actionDriver,
            // Temporary, will be recalculated
            mediaImpactScore: 0,
            contentQualityScore: 0,
            strategicImpactScore: 0
        };

        const calculated = calculateScores(newItem);
        setData([calculated, ...data]);
    };

    // 個別削除
    const handleDelete = (id: string) => {
        setData(data.filter(item => item.id !== id));
    };

    // 選択削除
    const handleBulkDelete = (ids: string[]) => {
        setData(data.filter(item => !ids.includes(item.id)));
    };

    // 全削除
    const handleClearAll = () => {
        setData([]);
    };

    const avgScore = (data.reduce((acc, item) => acc + item.strategicImpactScore, 0) / data.length).toFixed(1);
    const highSegmentMatchCount = data.filter(i => i.segmentMatch === 'High').length;
    const highQualityRatio = Math.round((data.filter(i => i.contentQualityScore >= 35).length / data.length) * 100);

    return (
        <div className="bg-[#020617] text-foreground min-h-screen font-sans pb-20 selection:bg-primary selection:text-black">
            <DashboardHeader onAddEvaluation={handleAddEvaluation} />

            <main className="mx-auto w-full max-w-[1400px] px-8 pt-24 space-y-4 relative z-10">
                {/* Dashboard Title Section - P0 Alignment */}
                <div className="flex flex-col gap-0.5 mb-6">
                    <h2 className="text-4xl font-black tracking-tighter text-white">ダッシュボード</h2>
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-muted-foreground/60 uppercase">
                        <span>こんにちは、山田 太郎 様</span>
                        <span className="w-1 h-1 rounded-full bg-white/10"></span>
                        <span className="opacity-80">公共政策研究室、サイエンスコミュニケーションの実績を可視化します。</span>
                    </div>
                </div>

                {/* KPI Section - Card Row */}
                <KpiSection
                    avgScore={avgScore}
                    highSegmentMatchCount={highSegmentMatchCount}
                    totalItems={data.length}
                    highQualityRatio={highQualityRatio}
                    containerVariants={containerVariants}
                    itemVariants={itemVariants}
                />

                {/* Grid Layout Mirroring Stitch Mock */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Impact Matrix - Primary Visualization (7 Cols) */}
                    <div className="md:col-span-12 lg:col-span-7">
                        <ImpactMatrix data={data} />
                    </div>

                    {/* Recent Articles - Secondary List (5 Cols) */}
                    <div className="md:col-span-5">
                        <RecentArticles
                            data={data}
                            onDelete={handleDelete}
                            onBulkDelete={handleBulkDelete}
                            onClearAll={handleClearAll}
                        />
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    );
}
