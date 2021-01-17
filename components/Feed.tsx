import { useFeed } from "./util/hooks"

export const Feed = () => {
  const { feed } = useFeed()
  console.log(feed, 'feed')
  return feed ? (
    <>
      {feed.map((tweet, i) => (
        <div key={i}>
          <h4>{tweet.text}</h4>
          <span>{tweet.author.username}</span>
        </div>
      ))}
    </>
  ) : null
}