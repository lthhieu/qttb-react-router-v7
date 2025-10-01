import { FormComponent } from "~/components/form";
import type { Route } from "./+types/form";
import { fetchForms } from "~/api/forms";
import { fetchFormCategories } from "~/api/formCategories";
import { FileLink } from "~/utils/file.link";
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Biểu mẫu" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ request, }: Route.LoaderArgs) {
    const url = new URL(request.url)
    const page = url.searchParams.get("page")
    const name = url.searchParams.get("name")
    const categoryFormId = url.searchParams.get("categoryFormId")
    let response = await fetchForms(page ? +page : 1, 10, name, categoryFormId)
    let response1 = await fetchFormCategories()
    if (response.success && response1.success) {
        return { meta: response.meta, forms: response.data, formCategories: response1.data }
    }
    return { meta: null, forms: [], formCategories: [] }
}



export default function Form({ loaderData }: Route.ComponentProps) {
    const { meta, formCategories, forms } = loaderData
    return <FormComponent forms={forms} meta={meta} formCategories={formCategories} />
}
