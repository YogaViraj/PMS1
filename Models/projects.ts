import { PersonalDetails } from "./personalDetails";

export interface Projects {
    projectId: number;
    projectName: string;
    projectDescription: string;
    projectStartingMonth: string;
    projectStartingYear: string;
    projectEndingMonth: string;
    projectEndingYear: string;
    startingMonth: string | null;
    startingYear: number | null;
    endingMonth: string | null;
    endingYear: number | null;
    personalDetailsId: number;
    personalDetails: PersonalDetails | null;
    designation: string;
    toolsUsed: string;
    createdOn: string | null;
    createdBy: number | null;
    updatedOn: string | null;
    updatedBy: number | null;
    isActive: boolean;
}