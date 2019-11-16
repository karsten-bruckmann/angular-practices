import { ID } from '@datorama/akita';

export interface ComparisonItemInterface {
    id: ID;
    name: string;
    contribution: number;
    savings: number;
    recommendation?: string;
}
