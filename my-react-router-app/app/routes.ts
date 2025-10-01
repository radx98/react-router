import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("api/auth/*", "routes/better-auth-routes.ts"),
    route("ai", "routes/ai.tsx"),
    route("chat", "routes/chat.tsx")
] satisfies RouteConfig;
