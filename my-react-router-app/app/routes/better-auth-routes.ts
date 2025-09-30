
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router'
import { auth } from '~/auth.server' // Adjust the path as necessary

// GET (app.get)
export async function loader({ request }: LoaderFunctionArgs) {
    return auth.handler(request)
}

// POST (app.post)
export async function action({ request }: ActionFunctionArgs) {
    return auth.handler(request)
}