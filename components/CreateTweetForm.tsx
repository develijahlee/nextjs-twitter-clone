import { mutate } from "swr"
import { useState } from "react"
import { useFeed } from "./util/hooks"

export const CreateTweetForm = () => {
  const [input, setInput] = useState("")
  const { feed } = useFeed()
  return (
    <form
      style={{ padding: "2rem" }}
      onSubmit={async e => {
        e.preventDefault()

        // we include "false" here to ask SWR not to revalidate the cache with
        // the feed returned from the server. we'll remove this after the next section
        mutate("/api/feed", [{ text: input, author: { username: 'me' } }, ...feed], false)
        setInput("")
      }}
    >
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button type="submit">Tweet</button>
    </form>
  )
}