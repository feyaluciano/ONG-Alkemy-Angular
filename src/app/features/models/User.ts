export interface User {
    id?:                number;
    name?:              string;
    email?:             string;
    email_verified_at?: string;
    password?:          string;
    role_id?:           number;
    remember_token?:    string;
    created_at?:        Date;
    updated_at?:        Date;
    deleted_at?:        Date;
    group_id?:          number;
    latitude?:          number;
    longitude?:         number;
    address?:           string;
    profile_image?:     string;
    description?:       string;
    token?:             string;
}

