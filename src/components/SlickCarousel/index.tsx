import styled from 'styled-components'
import Slider from 'react-slick'

const WSlickCarousel = styled(Slider)``

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
      role="presentation"
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
      role="presentation"
    />
  )
}

const SlickCarousel = ({ children, ...props }) => {
  return (
    <WSlickCarousel nextArrow={<SampleNextArrow />} prevArrow={<SamplePrevArrow />} {...props}>
      {children}
    </WSlickCarousel>
  )
}

export default SlickCarousel
