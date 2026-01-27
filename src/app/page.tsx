
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"; // Need to check if badge exists or use plain div
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { Activity, BarChart3, PieChart, Plus, TrendingUp, Search } from 'lucide-react';
import { EvaluationItem, VSEG } from '@/types/evaluation';

// Mock Data
const INITIAL_DATA: EvaluationItem[] = [
    {
        id: '1', title: 'New Tech Announcement', mediaName: 'TechDaily', date: '2024-01-15',
        reach: 50000, segmentMatch: 'High', prominence: true, tone: 'Positive',
        messageDelivery: true, actionDriver: true,
        mediaImpactScore: 30, contentQualityScore: 50, strategicImpactScore: 80
    },
    {
        id: '2', title: 'Scandal Report', mediaName: 'Weekly News', date: '2024-01-20',
        reach: 2000000, segmentMatch: 'Low', prominence: true, tone: 'Negative',
        messageDelivery: false, actionDriver: false,
        mediaImpactScore: 15, contentQualityScore: 0, strategicImpactScore: 15
    },
    {
        id: '3', title: 'University Research Feature', mediaName: 'Science Web', date: '2024-01-22',
        reach: 15000, segmentMatch: 'High', prominence: true, tone: 'Positive',
        messageDelivery: true, actionDriver: true,
        mediaImpactScore: 22, contentQualityScore: 50, strategicImpactScore: 72
    },
    {
        id: '4', title: 'Local Event Coverage', mediaName: 'City Times', date: '2024-01-25',
        reach: 30000, segmentMatch: 'Medium', prominence: false, tone: 'Neutral',
        messageDelivery: true, actionDriver: true,
        mediaImpactScore: 10, contentQualityScore: 35, strategicImpactScore: 45
    },
];

export default function Dashboard() {
    const [data, setData] = useState<EvaluationItem[]>(INITIAL_DATA);

    // Handlers (basic mock)
    const addEntry = () => {
        const newItem: any = {
            id: Math.random().toString(),
            title: 'New Evaluation Entry',
            mediaName: 'Sample Media',
            date: new Date().toISOString().split('T')[0],
            reach: 10000,
            segmentMatch: 'Medium',
            prominence: true,
            tone: 'Neutral',
            messageDelivery: false,
            actionDriver: false
        };

        // Quick calc
        const calculated = {
            ...newItem,
            mediaImpactScore: 20,
            contentQualityScore: 25,
            strategicImpactScore: 45
        };

        setData([...data, calculated]);
    };

    const avgScore = (data.reduce((acc, item) => acc + item.strategicImpactScore, 0) / data.length).toFixed(1);

    return (
        <div className="min-h-screen bg-slate-50/50">
            {/* Navbar */}
            <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-xl text-primary">
                    <Activity className="h-6 w-6" />
                    <span>SC PR Evaluation</span>
                </div>
                <div className="ml-auto flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">User: John Doe</span>
                </div>
            </header>

            <main className="container mx-auto p-6 space-y-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                        <p className="text-muted-foreground">Measuring Science Communication Impact beyond Advertising Value.</p>
                    </div>
                    <Button onClick={addEntry} className="gap-2 shadow-md hover:shadow-lg transition-all">
                        <Plus className="h-4 w-4" /> Add New Evaluation
                    </Button>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="shadow-sm border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Strategic Impact (SIS)</CardTitle>
                            <TrendingUp className="h-4 w-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-900">{avgScore}</div>
                            <p className="text-xs text-muted-foreground mt-1">Target: &gt; 50.0</p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">High Segment Reach</CardTitle>
                            <PieChart className="h-4 w-4 text-green-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-900">
                                {data.filter(i => i.segmentMatch === 'High').length} <span className="text-lg text-muted-foreground font-normal">/ {data.length}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Articles targeting high-interest segment</p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm border-l-4 border-l-purple-500 hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">High Quality Ratio</CardTitle>
                            <BarChart3 className="h-4 w-4 text-purple-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-900">
                                {Math.round((data.filter(i => i.contentQualityScore >= 35).length / data.length) * 100)}%
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Articles with Quality Score ≥ 35</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Chart: Quality vs Quantity Matrix */}
                    <Card className="col-span-1 shadow-sm">
                        <CardHeader>
                            <CardTitle>Impact Matrix</CardTitle>
                            <CardDescription>Quality (Y) vs Media Power (X)</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[350px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
                                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                                    <XAxis type="number" dataKey="mediaImpactScore" name="Media" unit="pts" domain={[0, 60]} label={{ value: 'Media Power', position: 'bottom', offset: 0 }} />
                                    <YAxis type="number" dataKey="contentQualityScore" name="Quality" unit="pts" domain={[0, 60]} label={{ value: 'Content Quality', angle: -90, position: 'insideLeft' }} />
                                    <Tooltip
                                        cursor={{ strokeDasharray: '3 3' }}
                                        content={({ active, payload }) => {
                                            if (active && payload && payload.length) {
                                                const d = payload[0].payload as EvaluationItem;
                                                return (
                                                    <div className="bg-white p-3 border rounded shadow text-sm">
                                                        <p className="font-bold">{d.title}</p>
                                                        <p>Media: {d.mediaName}</p>
                                                        <p>SIS: {d.strategicImpactScore}</p>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        }}
                                    />
                                    <Scatter name="Articles" data={data} fill="#8884d8">
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.strategicImpactScore >= 60 ? "#22c55e" : entry.strategicImpactScore < 30 ? "#ef4444" : "#eab308"} />
                                        ))}
                                    </Scatter>
                                    <Legend />
                                </ScatterChart>
                            </ResponsiveContainer>
                            <div className="mt-4 flex justify-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-green-500"></div>High Impact</div>
                                <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-yellow-500"></div>Medium</div>
                                <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-500"></div>Low</div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Entries Table */}
                    <Card className="col-span-1 shadow-sm flex flex-col">
                        <CardHeader>
                            <CardTitle>Recent Coverage</CardTitle>
                            <CardDescription>Latest evaluated articles and their scores</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[40%]">Title</TableHead>
                                        <TableHead>Media</TableHead>
                                        <TableHead className="text-right">SIS</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">
                                                <div className="flex flex-col">
                                                    <span>{item.title}</span>
                                                    <span className="text-xs text-muted-foreground">{item.date}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>{item.mediaName}</TableCell>
                                            <TableCell className="text-right">
                                                <span className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-bold ${item.strategicImpactScore >= 60 ? 'bg-green-100 text-green-700' :
                                                    item.strategicImpactScore < 30 ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {item.strategicImpactScore}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
