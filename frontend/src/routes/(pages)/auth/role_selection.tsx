import { createFileRoute } from "@tanstack/react-router";

import RoleSelection from "../../-components/auth/RoleSelection";

export const Route = createFileRoute("/(pages)/auth/role_selection")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <RoleSelection />     
    );
}
