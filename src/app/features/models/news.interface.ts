export interface News {
    id?:          string;
    name:        string;
    slug?:        string | null;
    content:     string;
    image:       string;
    user_id?:     number | null;
    category_id?: number;
    created_at?:  string | null;
    updated_at?:  string | null;
    deleted_at?:  string | null;
}
