export interface News {
    id?:          number;
    name:        string;
    content:     string;
    image:       string;
    category_id: number;
    created_at:  string | null;
    updated_at:  string | null;
    slug:        string | null;
    user_id:     number | null;
    deleted_at:  string | null;
}
