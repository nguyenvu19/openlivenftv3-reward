import styled from 'styled-components'
import { NotificationDot } from '@pancakeswap/uikit'

interface FarmTabButtonsProps {
  value?: string
  tabs: {
    label: string
    value: string
    hasStakeInFinishedFarms?: boolean
  }[]
  onChange?: (p: any) => void
}

const FarmTabButtons: React.FC<React.PropsWithChildren<FarmTabButtonsProps>> = ({ value, tabs, onChange }) => {
  return (
    <Wrapper>
      {tabs.map((tab) => {
        if (!tab.hasStakeInFinishedFarms) {
          return (
            <div
              key={tab.value}
              className={`btn-tab-farm btn-live ${tab.value === value && 'active'}`}
              onClick={() => onChange && onChange(tab)}
              role="presentation"
            >
              <div>{tab.label}</div>
            </div>
          )
        }
        return (
          <NotificationDot show key={tab.value}>
            <div
              className={`btn-tab-farm btn-finish ${tab.value === value && 'active'}`}
              onClick={() => onChange && onChange(tab)}
              role="presentation"
            >
              <div>{tab.label}</div>
            </div>
          </NotificationDot>
        )
      })}
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;

  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 16px;

  .btn-tab-farm {
    color: rgba(0, 0, 0, 0.2);
    font-weight: bold;
    text-align: center;

    min-width: 100px;
    padding: 12px;
    cursor: pointer;

    -webkit-transform: skew(30deg);
    -moz-transform: skew(30deg);
    -o-transform: skew(30deg);
    transform: skew(30deg);

    & > * {
      -webkit-transform: skew(-30deg) !important;
      -moz-transform: skew(-30deg) !important;
      -o-transform: skew(-30deg) !important;
      transform: skew(-30deg) !important;
    }
  }

  .btn-tab-farm.active {
    color: ${({ theme }) => theme.colors.secondary};
    background: #dcf2ff;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
  }
`
