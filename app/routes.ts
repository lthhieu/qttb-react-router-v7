import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [
    layout("layouts/master.tsx", [
        index("routes/home.tsx"),
        route("chuc-nang-nhiem-vu", "routes/responsibility.tsx"),
        route("so-do-to-chuc", "routes/organization.tsx"),
        ...prefix("tin-tuc", [
            index("routes/posts.tsx"),
            route(":postId", "routes/post.detail.tsx")
        ])
    ])
    // index("routes/home.tsx")
] satisfies RouteConfig;
