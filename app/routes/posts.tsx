import type { Route } from "./+types/home";
import { Posts as PostsComponent } from "~/components/posts";
import { fetchPosts } from '~/api/posts'
import { useEffect, useState } from "react";
import type { IPosts } from "~/types/backend";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Tin tức" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader() {
    let response = await fetchPosts()
    if (response.success) {
        return response.data
    } else return null
}

export default function Posts({ loaderData }: Route.ComponentProps) {
    return <PostsComponent posts={loaderData} />;
}
