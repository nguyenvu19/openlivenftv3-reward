import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

const WNextPrevPagination = styled.div<SpaceProps>`
  display: flex;
  ${space}

  button {
    color: #fff;

    width: 32px;
    height: 32px;

    background: #007ca2;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    &:first-child {
      margin-right: 5px;
    }
    &:last-child {
      margin-left: 5px;
    }
  }
`

interface Props extends SpaceProps {
  total?: number
  limit?: number
  dataLength?: number
  onChange?: (limit: number) => void
}
const NextPrevPagination: React.FC<Props> = ({ total, limit = 10, dataLength, onChange, ...props }) => {
  const isPrev = total > limit && dataLength > limit
  const isNext = total <= dataLength

  const handleChangePrevPage = () => {
    if (isPrev) {
      const prev = total - limit
      onChange(prev < limit ? limit : prev)
    }
  }
  const handleChangeNextPage = () => {
    if (isNext) {
      const next = total + limit
      onChange(next > 0 ? next : 0)
    }
  }

  return (
    <WNextPrevPagination {...props}>
      <button type="button" style={{ cursor: isPrev ? 'pointer' : 'not-allowed' }} onClick={handleChangePrevPage}>
        <span role="img" aria-label="left" className="anticon anticon-left">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="left"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
          </svg>
        </span>
      </button>
      <button type="button" style={{ cursor: isNext ? 'pointer' : 'not-allowed' }} onClick={handleChangeNextPage}>
        <span role="img" aria-label="right" className="anticon anticon-right">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="right"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
          </svg>
        </span>
      </button>
    </WNextPrevPagination>
  )
}

export default NextPrevPagination
