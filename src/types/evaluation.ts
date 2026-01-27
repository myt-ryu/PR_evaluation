
export type VSEG = 'High' | 'Medium' | 'Low';

export interface EvaluationItem {
    id: string;
    title: string;
    mediaName: string;
    date: string;

    // Metrics
    reach: number; // Circulation/PV
    segmentMatch: VSEG; // Target Relevance

    prominence: boolean; // Headline/Photo?
    tone: 'Positive' | 'Neutral' | 'Negative';
    messageDelivery: boolean; // Key message included?
    actionDriver: boolean; // URL/Call to action?

    // Calculated Scores
    mediaImpactScore: number;
    contentQualityScore: number;
    strategicImpactScore: number; // SIS (0-100)
}

export const SEGMENT_WEIGHTS: Record<VSEG, number> = {
    High: 1.5,
    Medium: 1.0,
    Low: 0.5,
};

export const TONE_SCORES = {
    Positive: 10,
    Neutral: 5,
    Negative: -10,
};
