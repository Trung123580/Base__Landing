const VideoPreview = ({src}: { src: string }) => {
  return (
    // playsInline tren ios tranh tu dong focus vao video va full screen man hinh
    <video className="absolute top-0 -left-[.2px] bottom-0 right-0 flex items-center justify-center max-w-[347px]" autoPlay={true} controls={false} muted={true} loop={true} playsInline tabIndex={-1}>
      <source src={'https://website-assets-cdn.vtvlive.vn/web-game/t021/landing' + src} type="video/mp4"/>
    </video>
  )
}
export default VideoPreview
