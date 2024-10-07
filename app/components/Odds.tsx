import { useFetcher } from "@remix-run/react"

export default function Evens({
  numbers,
}: { numbers: number[] }) {
  const fetcher = useFetcher()

  console.log("Odds")
  return (
    <div>
      <h1>Odds</h1>
      {numbers.map((n) => <p key={n}>{n}</p>)}
    </div>
  )
}
