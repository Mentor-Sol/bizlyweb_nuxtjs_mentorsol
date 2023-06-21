import { Comapny } from "./company"
import { Role } from "./role"

export class Occupation {
    id: number;
    company: Comapny;
    role: Role;
    created_on: string;
    modified: string;
    is_active: true;
    employment_type: string;
    location: string;
    start_date: string;
    end_date: string;
    user: number;
}