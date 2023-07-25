import { Comapny } from "./Compnay"
import { Role } from "./Role"
export class Occupation {
    id: number;
    company: Comapny;
    role: Role;
    created_on: string;
    modified: string;
    is_active: boolean;
    employment_type: string;
    location: string;
    start_date: string;
    end_date: string;
    user: number;
}
