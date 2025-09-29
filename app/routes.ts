import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [
    layout("layouts/master.tsx", [
        index("routes/home.tsx"),
        route("chuc-nang-nhiem-vu", "routes/responsibility.tsx"),
        route("van-ban-quy-dinh", "routes/rule.tsx"),
        route("bieu-mau", "routes/form.tsx"),
        route("quy-trinh", "routes/process.tsx"),
        ...prefix("tin-tuc", [
            index("routes/posts.tsx"),
            route(":postId", "routes/post.detail.tsx")
        ])
    ])
    // index("routes/home.tsx")
] satisfies RouteConfig;
