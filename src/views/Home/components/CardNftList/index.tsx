import styled from 'styled-components'
import Carousel from 'react-multi-carousel'
import { useMatchBreakpoints } from '@pancakeswap/uikit'
import NftItem from './NftItem'

const WCardNftList = styled.div`
  padding-bottom: 40px;
  position: relative;

  margin: 0 -8px;
  .carousel-item {
    padding: 20px 8px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 -20px;
    .carousel-item {
      padding: 20px 20px;
    }
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 -40px;
    .carousel-item {
      padding: 20px 40px;
    }
  }

  // container margin
  margin-bottom: 40px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 60px;
  }

  ul.carousel-dots-list {
    li.react-multi-carousel-dot {
      button {
        margin: 0 6px;
        background: #d9d9d9;
        border-color: #d9d9d9;
      }
    }
    li.react-multi-carousel-dot--active {
      button {
        background: #529bf0;
        border-color: #529bf0;
      }
    }
  }
`

const CardNftList = () => {
  const { isMobile, isMd } = useMatchBreakpoints()
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 999, min: 476 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 475, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  }
  return (
    <WCardNftList>
      <Carousel
        responsive={responsive}
        showDots
        containerClass=""
        itemClass="carousel-item"
        dotListClass="carousel-dots-list"
        draggable
        renderDotsOutside
        partialVisible={isMobile || isMd}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <NftItem item={item} />
        ))}
      </Carousel>
    </WCardNftList>
  )
}

export default CardNftList
