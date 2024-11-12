import './Widgets.css'
import { Search } from '@mui/icons-material'

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            At dawn from the gateway to Mars, the launch of Starship’s second flight test{" "}
            <a href="https://t.co/ffKnsVKwG4">pic.twitter.com/ffKnsVKwG4</a>
          </p>
          &mdash SpaceX (@SpaceX) <a href="https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw">December 7, 2023</a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </div>
  )
}

export default Widgets
