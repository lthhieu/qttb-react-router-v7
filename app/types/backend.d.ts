export interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    success: boolean;
    data?: T;
}
export interface IPosts {
    content: string
    slug: string
    thumbnail: string
    title: string
    mimetype: string
    createdAt: Date
    _id: string
}[]