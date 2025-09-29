import axios from '~/configs/axios';
import type { IBackendRes, IForms } from '~/types/backend';
const fetchForms = (page: number, limit: number, name?: string | null, sort?: string | null) => {
    let url = `forms?page=${page}&limit=${limit}`;
    // if (title) url += `&title=/${title}/i`;
    if (sort) url += `&sort=${sort}`;
    return axios.get<any, IBackendRes<IForms[]>>(url)
}

// const fetchPost = (slug: string) => {
//     return axios.get<any, IBackendRes<IPosts>>(`posts/${slug}`)
// }

export {
    fetchForms
}