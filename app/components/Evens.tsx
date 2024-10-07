import { useFetcher } from "@remix-run/react"

export default function Evens({
  numbers,
}: { numbers: number[] }) {
  const fetcher = useFetcher()

  console.log("Evens")
  return (
    <div>
      <h1>Evens</h1>
      {numbers.map((n) => <p key={n}>{n}</p>)}
    </div>
  )
}
