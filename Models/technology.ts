import { Domain } from "./domain";

export interface Technology {
    technologyId: number;
    technologyName: string;
    domains: Domain[] | null;
    isActive: boolean;
}