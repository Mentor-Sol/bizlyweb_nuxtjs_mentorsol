import { AwardNomination } from "./AwardNomination"
import { Education } from "./Education"
import { TalentAttributes } from "./TalentAttributes"

export class Experience {
    id: number;
    biz_card: number;
    created_on: string;
    modified: string;
    is_active: true;
    demographics: Object;
    talent_attributes: TalentAttributes;
    guild_affiliations: Array<any>;
    performer_skills: Array<any>;
    athletic_skills: Array<string>
    musical_instruments: Array<string>
    dance_skills: Array<any>;
    credits: Array<string>
    credits_dict: Object;
    licenses_certifications: Object;
    employment: Object;
    awards_nominations: Array<AwardNomination>;
    honors: Object;
    philanthropy_volunteering: Object;
    education: Array<Education>;
    causes: Array<any>;
    organizations: Object;
    patents: Object;
}