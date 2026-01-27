
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { evaluationSchema } from "@/lib/schemas";
import { EvaluationFormValues } from "@/lib/schemas";

interface EvaluationFormProps {
    onSubmit: (data: EvaluationFormValues) => void;
    defaultValues?: Partial<EvaluationFormValues>;
}

export function EvaluationForm({ onSubmit, defaultValues }: EvaluationFormProps) {
    const form = useForm<EvaluationFormValues>({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolver: zodResolver(evaluationSchema) as any,
        defaultValues: (defaultValues || {
            title: "",
            mediaName: "",
            date: new Date().toISOString().split("T")[0],
            reach: 0,
            segmentMatch: "Medium",
            prominence: false,
            tone: "Neutral",
            messageDelivery: false,
            actionDriver: false,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as any,
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-4">

                {/* Basic Info Section */}
                <div className="space-y-5">
                    <h3 className="text-sm font-bold text-white border-b border-white/10 pb-2 mb-4 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(0,255,42,0.8)]"></span>
                        Basic Info
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">記事タイトル</FormLabel>
                                    <FormControl>
                                        <Input placeholder="例: 新技術の発表について" {...field} className="bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/30 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl backdrop-blur-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mediaName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">メディア名</FormLabel>
                                    <FormControl>
                                        <Input placeholder="例: 日本経済新聞" {...field} className="bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/30 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl backdrop-blur-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">掲載日</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} className="bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/30 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl backdrop-blur-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="reach"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">リーチ数 (PV/発行部数)</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} onChange={e => field.onChange(+e.target.value)} className="bg-background/50 border-white/10 text-white placeholder:text-muted-foreground/30 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl backdrop-blur-sm text-right font-mono" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Strategic Metrics Section */}
                <div className="space-y-6 pt-4">
                    <h3 className="text-sm font-bold text-white border-b border-white/10 pb-2 mb-4 flex items-center justify-between uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <span className="w-1 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(0,255,42,0.8)]"></span>
                            Strategic Metrics
                        </span>
                        <span className="text-[9px] font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded shadow-[0_0_10px_rgba(0,255,42,0.1)]">IMPACTS SIS SCORE</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="segmentMatch"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">ターゲット適合度</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-background/50 border-white/10 text-white h-12 rounded-xl backdrop-blur-sm focus:ring-primary/20 focus:border-primary/50">
                                                <SelectValue placeholder="適合度を選択" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-[#121D16] border-white/10 text-white">
                                            <SelectItem value="High" className="focus:bg-primary/20 focus:text-primary">High (ドンピシャ)</SelectItem>
                                            <SelectItem value="Medium" className="focus:bg-primary/20 focus:text-primary">Medium (関連領域)</SelectItem>
                                            <SelectItem value="Low" className="focus:bg-primary/20 focus:text-primary">Low (一般)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription className="text-[10px] text-muted-foreground/50">
                                        メディアの読者層とターゲットペルソナの一致度
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="tone"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">論調</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex gap-3"
                                        >
                                            {['Positive', 'Neutral', 'Negative'].map((tone) => (
                                                <FormItem key={tone} className="flex-1">
                                                    <FormControl>
                                                        <RadioGroupItem value={tone} className="peer sr-only" />
                                                    </FormControl>
                                                    <FormLabel className="flex flex-col items-center justify-between rounded-xl border border-white/10 bg-background/30 p-3 hover:bg-white/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary cursor-pointer transition-all shadow-sm">
                                                        <span className="text-xl mb-1 drop-shadow-md">
                                                            {tone === 'Positive' ? '😊' : tone === 'Neutral' ? '😐' : '😞'}
                                                        </span>
                                                        <span className="text-[9px] font-bold uppercase tracking-wider">{tone}</span>
                                                    </FormLabel>
                                                </FormItem>
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        <FormField
                            control={form.control}
                            name="prominence"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-white/10 p-4 shadow-sm bg-background/30 hover:border-primary/50 transition-colors">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary border-white/20"
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="font-bold text-sm text-white">主要掲載</FormLabel>
                                        <FormDescription className="text-[10px] leading-tight text-muted-foreground/60">
                                            1面、トップニュース、特集扱いなど
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="messageDelivery"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-white/10 p-4 shadow-sm bg-background/30 hover:border-primary/50 transition-colors">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary border-white/20"
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="font-bold text-sm text-white">メッセージ伝達</FormLabel>
                                        <FormDescription className="text-[10px] leading-tight text-muted-foreground/60">
                                            重要キーワードが含まれているか
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="actionDriver"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-white/10 p-4 shadow-sm bg-background/30 hover:border-primary/50 transition-colors">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary border-white/20"
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="font-bold text-sm text-white">行動喚起</FormLabel>
                                        <FormDescription className="text-[10px] leading-tight text-muted-foreground/60">
                                            URLリンクや検索誘導があるか
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="pt-4 sticky bottom-0 bg-[#09120D]/95 backdrop-blur pb-2 -mx-6 px-6 border-t border-white/5">
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/80 text-black font-black rounded-xl h-14 shadow-[0_0_20px_rgba(0,255,42,0.3)] hover:shadow-[0_0_30px_rgba(0,255,42,0.5)] transition-all text-base uppercase tracking-widest border border-white/10">
                        <span className="material-symbols-outlined mr-2">calculate</span>
                        評価を実行してSISを算出
                    </Button>
                </div>
            </form>
        </Form>
    );
}
