import { useFetcher } from "@remix-run/react"

export default function Numbers({
  odds,
  evens,
}: { odds: number[], evens: number[] }) {
  const fetcher = useFetcher()

  console.log("Numbers")
  return (
    <div>
      <h1>Evens</h1>
      {odds.map((n) => <p key={n}>{n}</p>)}

      <h1>Odds</h1>
      {evens.map((n) => <p key={n}>{n}</p>)}
    </div>
  )
}
