export default function Chat() {
  return(
    <div className="gradient_border">
      <iframe src="https://www.twitch.tv/embed/<channel>/chat?parent=<parent>"
        height="400"
        width="300">
      </iframe>
    </div>
  )
}
