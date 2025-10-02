'use client';

import { useChat, type UIMessage } from '@ai-sdk/react';
import { useState } from 'react';
import { useParams, type LoaderFunctionArgs } from 'react-router';
import type { Route } from './+types/chat';
import { chats } from '~/fake-chats';

export default function Chat() {
    const params = useParams()
    // updates the key which triggers rerender
    return <ActualChat key={params.chatId}></ActualChat>
}

function ActualChat() {
    const [input, setInput] = useState('');
    const params = useParams()
    const myData = chats[params.chatId]
    const { messages, sendMessage } = useChat({
        messages: (myData as UIMessage[])
    });
    return (
        <div className="flex flex-col w-full justify-center max-w-md py-24 mx-auto stretch">
            <div>{JSON.stringify(messages)}</div>
            {messages.map(message => (
                <div key={message.id} className={message.role === "user" ?
                    "whitespace-pre-wrap bg-sky-800 text-sky-100 rounded-t-3xl rounded-bl-3xl rounded-br-lg p-3 mb-6 self-end" :
                    "whitespace-pre-wrap bg-sky-100 text-sky-800 rounded-t-3xl rounded-br-3xl rounded-bl-lg p-3 mb-6 self-start max-w-96"
                }>
                    {/* {message.role === 'user' ? 'User: ' : 'AI: '} */}
                    {message.parts.map((part, i) => {
                        switch (part.type) {
                            case 'text':
                                return <div key={`${message.id}-${i}`}>{part.text}</div>;
                        }
                    })}
                </div>
            ))}

            <form
                onSubmit={e => {
                    e.preventDefault();
                    sendMessage({ text: input });
                    setInput('');
                }}
            >
                <input
                    className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md py-3 px-4 mb-8 border border-zinc-300 dark:border-zinc-800 rounded-full shadow-xl bg-white"
                    value={input}
                    placeholder="Say something..."
                    onChange={e => setInput(e.currentTarget.value)}
                />
            </form>
        </div>
    );
}