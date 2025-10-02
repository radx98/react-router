import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/sidebar.tsx", [
        route("chat/:chatId", "routes/chat.tsx"),
        route("api/chat", "routes/ai.tsx"),
    ]),
    index("routes/home.tsx"),
    route("api/auth/*", "routes/better-auth-routes.ts"),
] satisfies RouteConfig;
