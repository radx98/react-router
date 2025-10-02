import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/sidebar.tsx", [
        index("routes/home.tsx"),
        route("chat", "routes/chat.tsx"),
        route("api/chat", "routes/ai.tsx"),
    ]),
    route("api/auth/*", "routes/better-auth-routes.ts"),
] satisfies RouteConfig;
