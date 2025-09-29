import type { Route } from "./+types/home";
import { Posts as PostsComponent } from "~/components/posts";
import { fetchPosts } from '~/api/posts'

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Tin tức" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ request, }: Route.LoaderArgs) {
    const url = new URL(request.url)
    const page = url.searchParams.get("page")
    const title = url.searchParams.get("title")
    const sort = url.searchParams.get("sort")
    let response = await fetchPosts(page ? +page : 1, 6, title, sort)
    if (response.success) {
        return { meta: response.meta, posts: response.data }
    } else return { meta: null, posts: [] }
}

export default function Posts({ loaderData }: Route.ComponentProps) {
    return <PostsComponent posts={loaderData?.posts} meta={loaderData?.meta} />;
}
