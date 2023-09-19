
import "../../style/components/status.css"

const Status = () => {
  const state = {
    loading: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Google_Books_logo_2015.svg/1280px-Google_Books_logo_2015.svg.png",
    error: {
      error404: "https://static.vecteezy.com/system/resources/thumbnails/025/728/485/original/good-investment-opportunities-404-error-animation-building-strategy-choosing-way-error-message-gif-motion-graphic-thinking-investor-animated-character-cartoon-4k-isolated-on-white-background-video.jpg",

    },
    succses: "https://static.vecteezy.com/system/resources/previews/014/003/604/non_2x/big-human-hand-holds-stack-of-three-books-concept-of-donation-education-and-learning-illustration-of-world-book-day-vector.jpg"
  }
  return (
    <div className="status">
      <img src={state.succses} alt="" />
    </div>
  )
}
export default Status