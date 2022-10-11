interface Props {
  className?: string
  fileUrl?: string
  videoProps?: any
  imageProps?: any
}
const MediaCard: React.FC<Props> = ({ className = '', fileUrl, videoProps = {}, imageProps = {}, ...props }) => {
  const isVideo = fileUrl?.endsWith('mp4')
  return (
    <>
      {isVideo ? (
        <div className={`embed-responsive ${className || 'embed-responsive-1by1'}`} {...props}>
          <video className="embed-responsive-item" autoPlay loop muted playsInline {...videoProps}>
            <source src="https://s3.ap-southeast-1.amazonaws.com/openlivenft/investPackage/TOPAZ.mp4" />
            {/* <source src={fileUrl} /> */}
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <img src={fileUrl} alt="" {...imageProps} />
      )}
    </>
  )
}

export default MediaCard
