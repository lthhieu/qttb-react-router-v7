import { ProcessComponent } from "~/components/process";
import type { Route } from "./+types/home";
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Sơ đồ tổ chức" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Process() {
    return <ProcessComponent />
}
