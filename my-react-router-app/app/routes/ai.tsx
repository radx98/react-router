import {createOpenAI} from "@ai-sdk/openai"
import type { Route } from "./+types/home"
import { streamText, convertToModelMessages, type UIMessage } from "ai"

export const maxDuration = 30

const openai = createOpenAI({apiKey: process.env.OPENAI_API_KEY})

export async function action({ request }: Route.ActionArgs) {
    const { messages }: { messages: UIMessage[] } = await request.json()
    const result = streamText({
        model: openai("gpt-4.1-mini"),
        messages: convertToModelMessages(messages)
    })
    return result.toUIMessageStreamResponse()
}