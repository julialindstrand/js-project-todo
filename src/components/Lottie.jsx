import Lottie from "lottie-react"
import Animation from "../Animation.json"

export const LottieAnime = () => {
  const options = {
    animationData: Animation,
    style: {
      height: 500,
      margin: "0 auto",
    },
    loop: true,
    autoplay: true
  }

  return (
    <Lottie
      animationData={options.animationData}
      style={options.style}
      loop={options.loop}
      autoplay={options.autoplay}
    />
  )
}