import { FormComponent } from "~/components/form";
import type { Route } from "./+types/home";
import { fetchForms } from "~/api/forms";
import { fetchFormCategories } from "~/api/formCategories";
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Biểu mẫu" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ request, }: Route.LoaderArgs) {
    const url = new URL(request.url)
    const page = url.searchParams.get("page")
    // const title = url.searchParams.get("title")
    const sort = url.searchParams.get("sort")
    let response = await fetchForms(page ? +page : 1, 10, sort)
    let response1 = await fetchFormCategories()
    if (response.success && response1.success) {
        return { meta: response.meta, forms: response.data, formCategories: response1.data }
    } else return { meta: null, posts: [], formCategories: [] }
}



export default function Form({ loaderData, }: Route.ComponentProps) {
    return <FormComponent forms={loaderData?.forms} meta={loaderData?.meta} formCategories={loaderData?.formCategories} />
}
