import { FormComponent } from "~/components/form";
import type { Route } from "./+types/home";
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
        const newData = response.data?.map((item, index) => ({
            ...item,
            filelink: FileLink(item.file, item.mimetype), // ghi đè lại file
        }));
        return { meta: response.meta, forms: newData, formCategories: response1.data }
    } else return { meta: null, posts: [], formCategories: [] }
}



export default function Form({ loaderData, }: Route.ComponentProps) {
    return <FormComponent forms={loaderData?.forms} meta={loaderData?.meta} formCategories={loaderData?.formCategories} />
}
