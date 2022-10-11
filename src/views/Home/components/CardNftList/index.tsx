import styled from 'styled-components'
import Carousel from 'react-multi-carousel'
import CardNftWithInfo from 'components/Card/CardNftWithInfo'

const WCardNftList = styled.div``

const CardNftList = () => {
  const responsive = {
    tablet: {
      breakpoint: { max: 3000, min: 500 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  }
  return (
    <WCardNftList>
      <Carousel responsive={responsive} showDots itemClass="carousel-item-padding">
        {[1, 2, 3, 4, 5].map((item) => (
          <CardNftWithInfo />
        ))}
      </Carousel>
    </WCardNftList>
  )
}

export default CardNftList
