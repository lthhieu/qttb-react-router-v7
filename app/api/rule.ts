import axios from '~/configs/axios';
import type { IBackendRes, IRules } from '~/types/backend';
const fetchRules = (page: number, limit: number, bio?: string | null, categoryRuleId?: string | null, sort?: string | null) => {
    let url = `rules?page=${page}&limit=${limit}`;
    if (bio) url += `&bio=/${bio}/i`;
    if (categoryRuleId) url += `&categoryRuleId=${categoryRuleId}`;
    if (sort) url += `&sort=${sort}`;
    return axios.get<any, IBackendRes<IRules[]>>(url)
}

// const fetchPost = (slug: string) => {
//     return axios.get<any, IBackendRes<IPosts>>(`posts/${slug}`)
// }

export {
    fetchRules
}