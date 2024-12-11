import { environment } from "../../environments/environment";
import { Assessment } from "../components/assessments/assessment.model";

export const Utilities = {
    favoritesBack: environment.favoritesBackUrl
}

export interface Page {
    content: [Assessment],
    totalElements: number,
    totalPages: number,
    number: number,
    size: number,
    numberOfElements: number,
    first: boolean,
    last: boolean,
}