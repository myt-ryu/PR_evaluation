
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
    const form = useForm({
        resolver: zodResolver(evaluationSchema),
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
        }) as any,
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Article Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. New Research Findings" {...field} />
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
                                <FormLabel>Media Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Science Daily" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
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
                                <FormLabel>Reach (Approximated PV/Circulation)</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} onChange={e => field.onChange(+e.target.value)} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="space-y-4 pt-4 border-t">
                    <h3 className="text-lg font-medium">Strategic Metrics</h3>

                    <FormField
                        control={form.control}
                        name="segmentMatch"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Target Segment Match</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select segment relevance" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="High">High (Direct Match)</SelectItem>
                                        <SelectItem value="Medium">Medium (Broad Interest)</SelectItem>
                                        <SelectItem value="Low">Low (General Public)</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    How well does the media audience match your target persona?
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
                                <FormLabel>Tone</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-row space-x-4"
                                    >
                                        <FormItem className="flex items-center space-x-2 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Positive" />
                                            </FormControl>
                                            <FormLabel className="font-normal">Positive</FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-2 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Neutral" />
                                            </FormControl>
                                            <FormLabel className="font-normal">Neutral</FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-2 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Negative" />
                                            </FormControl>
                                            <FormLabel className="font-normal">Negative</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        <FormField
                            control={form.control}
                            name="prominence"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>Prominence</FormLabel>
                                        <FormDescription>Headline/Front page?</FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="messageDelivery"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>Message Match</FormLabel>
                                        <FormDescription>Key keywords included?</FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="actionDriver"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>Call to Action</FormLabel>
                                        <FormDescription>URL/Event Date?</FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <Button type="submit" className="w-full">Submit Evaluation</Button>
            </form>
        </Form>
    );
}
