import { Occupation } from "./Occupation"

export class Owner {
    id: number;
    first_name: string;
    last_name: string;
    pronouns: Array<string>;
    image: string;
    background_images: Array<string>;
    roles: Array<string>;
    location: string;
    occupation: Occupation;
}