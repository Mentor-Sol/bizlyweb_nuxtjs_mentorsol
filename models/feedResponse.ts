import { Owner } from "./owner"

export class FeedResponse {
    id: number;
    is_bookmarked: boolean;
    created_on: string;
    modified: string;
    owner: Owner;
    biz_card: number;
    children: Array<FeedResponse>;
    invited_collaborators: Array<Number>;
    collaborators: Array<number>;
    is_featured: boolean;
    is_posted: boolean;
    post_content: string;
    status: string;
    is_gallery: boolean;
    title: string;
    description: string;
    content_type: string;
    external_type: string;
    audio_file: string;
    external_url: string;
    image_kit_id: string;
    thumbnail_image_kit_id: string;
    image_kit_ids: Array<string>;
    tags: Array<string>;
    pronouns: Array<string>;
    is_contact: boolean;
    contact_id: string;
    is_following: boolean;

}