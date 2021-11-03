export interface User {
    id:                number;
    name:              string;
    email?:             string;
    email_verified_at: Date | null;
    password?:          string;
    role_id:           number;
    remember_token:    null | string;
    created_at:        Date;
    updated_at:        Date;
    deleted_at:        null;
    group_id:          number | null;
    latitude:          null | string;
    longitude:         null | string;
    address:           null | string;
    profile_image:     null;
}
