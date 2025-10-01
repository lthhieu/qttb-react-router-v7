import { RuleComponent } from "~/components/rule";
import type { Route } from "./+types/rule";
import { fetchRules } from "~/api/rule";
import { fetchRuleCategories } from "~/api/ruleCategories";
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Văn bản Quy định" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ request, }: Route.LoaderArgs) {
    const url = new URL(request.url)
    const page = url.searchParams.get("page")
    const bio = url.searchParams.get("bio")
    const categoryRuleId = url.searchParams.get("categoryRuleId")
    let response = await fetchRules(page ? +page : 1, 10, bio, categoryRuleId)
    let response1 = await fetchRuleCategories()
    if (response.success && response1.success) {
        return { meta: response.meta, rules: response.data, ruleCategories: response1.data }
    }
    return { meta: null, rules: [], ruleCategories: [] }
}

export default function Rule({ loaderData }: Route.ComponentProps) {
    const { ruleCategories, rules, meta } = loaderData
    return <RuleComponent ruleCategories={ruleCategories} rules={rules} meta={meta} />
}
