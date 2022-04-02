export interface Category {
    section: string;
    display_name: string;
}

export interface News {
	slug_name: string;
    section: string;

    title: string;
    abstract?: string;
    byline: string;
    published_date: string;
    url: string;
}