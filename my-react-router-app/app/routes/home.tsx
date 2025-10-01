import type { Route } from "./+types/home";
import { useState } from "react"
import { Form, type LoaderFunctionArgs } from "react-router"
import { authClient } from "~/lib/auth-client";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { data, error, isPending } = authClient.useSession()
  const email = data?.user?.email
  if (isPending) {
    return <div>Loading...</div>
  }
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      {email ? <div>Hello, {email}</div> : <Login />}
    </main>
  );
}

export function Login() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [emailIn, setEmailIn] = useState("")
  const [passwordIn, setPasswordIn] = useState("")

  const signUp = async () => {
    await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onRequest: (ctx) => {
          // show loading state
        },
        onSuccess: (ctx) => {
          // redirect to home
        },
        onError: (ctx) => {
          alert(ctx.error)
        },
      },
    )
  }

  const signIn = async () => {
    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: (ctx) => {
          // show loading state
        },
        onSuccess: (ctx) => {
          // redirect to home
        },
        onError: (ctx) => {
          alert(ctx.error)
        },
      },
    )
  }

  return (
    <>
      <div className='border-2 border-solid border-gray-300 rounded-3xl px-6 py-4'>
        <h1 className='mb-6 mt-3 font-semibold'>
          Sign Up
        </h1>
        <Form className='flex flex-col gap-3'
          onSubmit={signUp}
        >
          <input className='bg-gray-200 px-4 py-2 rounded-lg'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input className='bg-gray-200 px-4 py-2 rounded-lg'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input className='bg-gray-200 px-4 py-2 rounded-lg'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className='my-3 bg-gray-800 text-gray-100 px-4 py-2 rounded-lg'
            type="submit"
          >
            Sign Up
          </button>
        </Form>
      </div>

      <h3 className='my-8'>or</h3>

      <div className='border-2 border-solid border-gray-300 rounded-3xl px-6 py-4'>
        <h1 className='mb-6 mt-3 font-semibold'>
          Sign In
        </h1>
        <Form className='flex flex-col gap-3'
          onSubmit={signIn}
        >
          <input className='bg-gray-200 px-4 py-2 rounded-lg'
            type="email"
            value={emailIn}
            onChange={(e) => setEmailIn(e.target.value)}
            placeholder="Email"
          />
          <input className='bg-gray-200 px-4 py-2 rounded-lg'
            type="password"
            value={passwordIn}
            onChange={(e) => setPasswordIn(e.target.value)}
            placeholder="Password"
          />
          <button className='my-3 bg-gray-800 text-gray-100 px-4 py-2 rounded-lg'
            type="submit"
          >
            Sign In
          </button>
        </Form>
      </div>
    </>
  )
}