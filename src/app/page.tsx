
"use client";

import { useState } from 'react';
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
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
        const newItem: any = {
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
        };

        const calculated = calculateScores(newItem);
        setData([calculated, ...data]);
    };

    const avgScore = (data.reduce((acc, item) => acc + item.strategicImpactScore, 0) / data.length).toFixed(1);
    const highSegmentMatchCount = data.filter(i => i.segmentMatch === 'High').length;
    const highQualityRatio = Math.round((data.filter(i => i.contentQualityScore >= 35).length / data.length) * 100);

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-sans">
            <div className="ios-status-bar bg-white dark:bg-slate-900 sticky top-0 z-50"></div>

            <DashboardHeader onAddEvaluation={handleAddEvaluation} />

            <main className="mx-auto max-w-md md:max-w-5xl p-5 space-y-6">
                <KpiSection
                    avgScore={avgScore}
                    highSegmentMatchCount={highSegmentMatchCount}
                    totalItems={data.length}
                    highQualityRatio={highQualityRatio}
                    containerVariants={containerVariants}
                    itemVariants={itemVariants}
                />

                {/* Desktop: Matrix left, List right.  Mobile: Matrix top, List bottom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ImpactMatrix data={data} />
                    <RecentArticles data={data} />
                </div>
            </main>

            <BottomNav />
            {/* Spacer for bottom nav */}
            <div className="h-24 md:hidden"></div>
        </div>
    );
}
