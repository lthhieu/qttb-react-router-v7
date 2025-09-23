import type { Route } from "./+types/home";
import { Organization as OrganizationComponent } from "~/components/organization";
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "QTTB- Sơ đồ tổ chức" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Organization() {
    return <OrganizationComponent />
}
