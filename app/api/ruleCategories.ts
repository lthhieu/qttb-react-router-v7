import axios from '~/configs/axios';
import type { IBackendRes, IRuleCategories } from '~/types/backend';
const fetchRuleCategories = () => {
    let url = `ruleCategories`;
    return axios.get<any, IBackendRes<IRuleCategories[]>>(url)
}


export {
    fetchRuleCategories
}