
import { auth } from "app/server/auth"
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router"

// what type of HTTP requests does the LOADER handle?
// HTTP GET requests
// app.get()
export async function loader({ request }: LoaderFunctionArgs) {
    return auth.handler(request)
}

// HTTP POST request
// app.post
export async function action({ request }: ActionFunctionArgs) {
    return auth.handler(request)
}
