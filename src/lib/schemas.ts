
import { z } from "zod";

export const evaluationSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    mediaName: z.string().min(1, { message: "Media Name is required" }),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Invalid date format (YYYY-MM-DD)" }),
    reach: z.coerce.number().min(0, { message: "Reach must be 0 or greater" }),
    segmentMatch: z.enum(["High", "Medium", "Low"]),
    prominence: z.boolean().default(false),
    tone: z.enum(["Positive", "Neutral", "Negative"]),
    messageDelivery: z.boolean().default(false),
    actionDriver: z.boolean().default(false),
});

export type EvaluationFormValues = z.infer<typeof evaluationSchema>;
