import { defer, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { Suspense } from 'react'
import { useLoaderData, Await } from "@remix-run/react";
import Numbers from "~/components/Numbers";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = () => {
  const odds = new Promise((resolve) => {
    setTimeout(() => resolve([1, 3, 5]), 200)
  })

  const evens = new Promise((resolve) => {
    setTimeout(() => resolve([2, 4, 6]), 200)
  })

  return defer({
    odds,
    evens
  })
}

export default function Index() {
  const { odds, evens } = useLoaderData<{ odds: Promise<number[]>, evens: Promise<number[]> }>()
  console.log("Index")

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to <span className="sr-only">Remix</span>
          </h1>
          <div className="h-[144px] w-[434px]">
            <img
              src="/logo-light.png"
              alt="Remix"
              className="block w-full dark:hidden"
            />
            <img
              src="/logo-dark.png"
              alt="Remix"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <p className="leading-6 text-gray-700 dark:text-gray-200">
            What&apos;s next?
          </p>
          <Suspense
            fallback={
              <p>Loading numbers...</p>
            }
          >
            <Await
              resolve={Promise.all([odds, evens])}
            >
              {([odds, evens]) => (
                <Numbers odds={odds as number[]} evens={evens as number[]}/>
              )}
            </Await>
          </Suspense>
        </nav>
      </div>
    </div>
  );
}

