import type { Route } from "./+types/home";
import { Responsibility as ResponsibilityComponent } from "~/components/responsibility";
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Chức năng nhiệm vụ" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Organization() {
    return <ResponsibilityComponent />
}
