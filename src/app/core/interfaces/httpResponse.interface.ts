export interface HTTPResponse {
    success: boolean;
    data:    Datum[];
    message: string;
}

export interface Datum {
    id:          number;
    name:        string;
    description: null | string;
    image:       null | string;
    order:       number | null;
    user_id:     null;
    created_at:  String;
    updated_at:  String;
    deleted_at:  null;
    group_id:    number | null;
}


/**
 * 
 * created_at:  Date; 
 * updated_at:  Date;
 */