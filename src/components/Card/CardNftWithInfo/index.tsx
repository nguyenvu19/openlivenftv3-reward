import MediaCard from 'components/MediaCard'
import styled from 'styled-components'

const WCardNftWithInfo = styled.div`
  padding: 30px 14px;

  .card-nft-cover {
    max-width: 100%;
    text-align: center;
    img {
      width: 100%;
    }
  }
`

const CardNftWithInfo = () => {
  return (
    <WCardNftWithInfo>
      <div className="card-nft-cover">
        <MediaCard fileUrl="abc.mp4" />
      </div>
      <div className="investment-item-content">
        <h3>HEMATITE</h3>
        <div className="investment-content">
          <p>
            <span>Price:</span>
            <span>123</span>
          </p>
          <p>
            <span>Reward:</span>
            <span>123</span>
          </p>
          <p>
            <span>Dividend:</span>
            <span>123</span>
          </p>
        </div>
      </div>
    </WCardNftWithInfo>
  )
}

export default CardNftWithInfo
