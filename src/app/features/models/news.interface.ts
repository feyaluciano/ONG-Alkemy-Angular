export interface News {
    id?:          number;
    name:        string;
    content:     string;
    image:       string;
    category_id: number;
    created_at:  Date;
    updated_at:  Date;
    slug?:        string;
    user_id?:     null;
    deleted_at?:  null;
}
