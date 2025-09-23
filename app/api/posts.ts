import axios from '~/configs/axios';
import type { IBackendRes, IPosts } from '~/types/backend';
const fetchPosts = () => {
    return axios.get<any, IBackendRes<IPosts[]>>(`posts`)
}

const fetchPost = (slug: string) => {
    return axios.get<any, IBackendRes<IPosts>>(`posts/${slug}`)
}

export {
    fetchPosts, fetchPost
}