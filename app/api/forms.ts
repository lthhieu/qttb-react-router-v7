import axios from '~/configs/axios';
import type { IBackendRes, IForms } from '~/types/backend';
const fetchForms = (page: number, limit: number, name?: string | null, categoryFormId?: string | null) => {
    let url = `forms?page=${page}&limit=${limit}`;
    if (name) url += `&name=/${name}/i`;
    if (categoryFormId) url += `&categoryFormId=${categoryFormId}`;
    return axios.get<any, IBackendRes<IForms[]>>(url)
}

// const fetchPost = (slug: string) => {
//     return axios.get<any, IBackendRes<IPosts>>(`posts/${slug}`)
// }

export {
    fetchForms
}