import './TweetBox.css'

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <img
            src="/src/assets/images/profile.png"
            alt="profile"
          />
          <input type="text" placeholder="What's happening?" />
        </div>
        <button type="submit" className="tweetBox__tweetButton">Tweet</button>
      </form>
    </div>
  )
}

export default TweetBox
