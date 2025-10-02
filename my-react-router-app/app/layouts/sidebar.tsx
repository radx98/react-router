import { Form, Link, Outlet } from "react-router";
import type { Route } from "./+types/sidebar";

export default function SidebarLayout({
  loaderData,
}: Route.ComponentProps) {
  const contacts = [
  { id: 1, name: 'This is a chat'},
  { id: 2, name: 'And this is also a chat'},
  { id: 3, name: 'This is a chat too'},
];

  return (
    <>
      <div id="sidebar" className='fixed max-w-60 p-8 text-md'>
        <h1 className='font-semibold text-gray-500'>
          <Link to="chat">🤖 AI-Assisted Spaced Repetition Bot</Link>
        </h1>
        <div>
          <Form id="search-form" role="search">
            <input
              className="mt-6 py-2 px-4 max-w-40 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-full bg-white text-sm"
              aria-label="Search contacts"
              id="q"
              name="q"
              placeholder="Search"
              type="search"
            />
            <div
              aria-hidden
              hidden={true}
              id="search-spinner"
            />
          </Form>
          <Form method="post">
            <button type="submit" className="mt-14 py-2 px-4 bg-gray-700 rounded-full max-w-50 text-sm text-gray-100 font-bold">+ New Chat</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul className="flex flex-col items-start mt-4">
              {contacts.map((contact) => (
                <Link to={`contacts/${contact.id}`}>
                  <li key={contact.id} className="mt-2 py-2 px-4 bg-gray-100 rounded-full max-w-60 text-sm text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
                    {contact.name ? <>{contact.name}</> : <>(empty)</>}
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}