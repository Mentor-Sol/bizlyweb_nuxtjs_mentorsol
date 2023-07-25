import { Industry } from "./Industry"
import { Occupation } from "./Occupation"
import { Role } from "./Role"

export class Inspiration {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    image: string;
    username: string;
    phone_number: string;
    roles: Array<Role>;
    industries: Array<Industry>;
    zip_code: string;
    location: string;
    onboarding_intention: Array<string>;
    show_current_occupation: boolean;
    elevator_pitch: string;
    onboarding_field: string;
    biz_card_options: Array<string>;
    email_verified: boolean;
    available_for_opportunities: boolean;
    is_discoverable: boolean;
    biz_card_id: number;
    occupation: Occupation;
    is_following: boolean;
    is_friend: boolean;
    notifications_enabled: boolean;
    has_friend_request: boolean;
    sent_friend_request_id: Array<string>;
    received_friend_request_id: Array<string>;
}