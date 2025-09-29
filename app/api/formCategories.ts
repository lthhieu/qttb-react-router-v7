import axios from '~/configs/axios';
import type { IBackendRes, IFormCategories } from '~/types/backend';
const fetchFormCategories = () => {
    let url = `formCategories`;
    return axios.get<any, IBackendRes<IFormCategories[]>>(url)
}


export {
    fetchFormCategories
}