import { Owner } from "../FeedResponse/owner"
import { Experience } from "./Experience";
import { SocialNetwork } from "./SocialNetwork";
import { ContactInformation } from "./ContactInformation";
import { BizButtonOptions } from "./BizButtonOptions";
import { Button } from './Button';
import { Location } from './Location';
import { Service } from "./Service";
import { FeedResponse } from "../FeedResponse/feedResponse";

export class FullBizCard {
    id: number;
    owner: Owner;
    services: Array<Service>;
    experience: Experience;
    content: [FeedResponse];
    is_contact: boolean;
    contact_id: string;
    is_following: boolean;
    follow_up_date: string;
    notifications_enabled: boolean;
    notes: string;
    has_friend_request: boolean;
    sent_friend_request_id: Array<string>;
    received_friend_request_id: Array<string>;
    created_on: string;
    modified: string;
    is_active: boolean;
    slug: string;
    buttons: Array<Button>;
    tags: Array<string>;
    biz_button_options: BizButtonOptions;
    social_networks: Array<SocialNetwork>
    contact_information: Array<ContactInformation>;
    locations: Array<Location>;
    available_to_work: boolean;
    availability_overview: string;
    services_locations: Array<any>;
    opportunity_settings: Array<any>;
    workplace_settings: Array<any>;
    about: string;
    professional_skills: Array<any>;
}