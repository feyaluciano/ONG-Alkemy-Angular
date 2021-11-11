export interface Slide {
    id?: string,
    name?: string,
    slug?: string,
    description?: string,
    image?: string,
    order?: number;
    user_id?: string,
    category_id?: string,
    created_at?: string | null;
    updated_at?: string | null;
    deleted_at?: string | null;
    group_id?: string;
  
}