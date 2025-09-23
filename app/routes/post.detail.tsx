import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import type { IPosts } from "~/types/backend";
import { fetchPost } from "~/api/posts";
import { PostDetail } from "~/components/post.detail";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Tin tức" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    //@ts-ignore
    let response = await fetchPost(params.postId as string)
    if (response.success) {
        return response.data
    } else return null
}

export default function Post({ loaderData }: Route.ComponentProps) {

    return <><PostDetail post={loaderData} /></>;
}
