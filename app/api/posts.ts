import axios from '~/configs/axios';
import type { IBackendRes, IPosts } from '~/types/backend';
const fetchPosts = (page: number, limit: number, title?: string | null, sort?: string | null) => {
    let url = `posts?page=${page}&limit=${limit}`;
    if (title) url += `&title=/${title}/i`;
    if (sort) url += `&sort=${sort}`
    else url += `&sort=-createdAt`;
    return axios.get<any, IBackendRes<IPosts[]>>(url)
}

const fetchPost = (slug: string) => {
    return axios.get<any, IBackendRes<IPosts>>(`posts/${slug}`)
}

export {
    fetchPosts, fetchPost
}