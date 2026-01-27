
import { EvaluationItem, SEGMENT_WEIGHTS, TONE_SCORES } from '@/types/evaluation';

export function calculateScores(item: Omit<EvaluationItem, 'mediaImpactScore' | 'contentQualityScore' | 'strategicImpactScore'>): EvaluationItem {

    // 1. Media Impact Score (Max 50)
    // Reach Point: Log scale. 100k -> 20pts.
    let reachPoints = 0;
    if (item.reach >= 1000000) reachPoints = 30; // Mega
    else if (item.reach >= 100000) reachPoints = 20; // Major
    else if (item.reach >= 10000) reachPoints = 10; // Mid
    else reachPoints = 5; // Niche

    const mediaMatchMultiplier = SEGMENT_WEIGHTS[item.segmentMatch];
    const mediaImpactScore = Math.min(50, reachPoints * mediaMatchMultiplier);

    // 2. Content Quality Score (Max 50)
    let qualityScore = 0;

    // Prominence (10pts)
    if (item.prominence) qualityScore += 10;

    // Tone (10pts)
    qualityScore += TONE_SCORES[item.tone];

    // Message Delivery (15pts)
    if (item.messageDelivery) qualityScore += 15;

    // Action Driver (15pts)
    if (item.actionDriver) qualityScore += 15;

    // Clamp quality score to 0-50 range (Tone can be negative)
    const contentQualityScore = Math.max(0, Math.min(50, qualityScore));

    // 3. Strategic Impact Score (SIS) (0-100)
    // Simple sum for now as per plan logic review, or composite?
    // Plan said: (Media * Content) / 100 which is 25 max roughly? 
    // Let's adjust to be additive or normalized to 100.
    // Method A: Additive (Max 100) -> Easiest to understand.
    const strategicImpactScore = mediaImpactScore + contentQualityScore;

    return {
        ...item,
        mediaImpactScore,
        contentQualityScore,
        strategicImpactScore
    };
}
