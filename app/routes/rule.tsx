import { RuleComponent } from "~/components/rule";
import type { Route } from "./+types/home";
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Văn bản Quy định" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Rule() {
    return <RuleComponent />
}
