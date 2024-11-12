import TweetBox from '../tweetBox/TweetBox'
import Post from '../post/Post'
import './Feed.css'

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Fascinating"
        username="fasc1nate"
        verified
        text="The leader of the street gang the Crips, Stanley Williams lived an extreme double life..."
        image="https://pbs.twimg.com/media/GI5YTRnbkAAmPjk?format=jpg&name=small"
        avatar="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
      />
      <Post
        displayName="Somanath Goudar"
        username="somanathg"
        verified
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        image="https://pbs.twimg.com/media/GDus1QhXQAAoe7a?format=jpg&name=small"
        avatar="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
      />
    </div>
  )
}

export default Feed
