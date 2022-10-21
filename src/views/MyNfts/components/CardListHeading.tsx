import { Flex } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Select, { OptionProps } from 'components/Select/Select'
import styled from 'styled-components'
import BackLink from 'components/BackLink'

const FilterContainer = styled.div`
  display: flex;
  padding: 8px 0px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`

const optionsInvestName = [
  {
    label: 'ALL',
    value: '',
  },
  {
    label: 'HEMATITE',
    value: 'HEMATITE',
  },
  {
    label: 'AMBER',
    value: 'AMBER',
  },
  {
    label: 'ZICRON',
    value: 'ZICRON',
  },
  {
    label: 'PERIDOT',
    value: 'PERIDOT',
  },
  {
    label: 'TOURMALINE',
    value: 'TOURMALINE',
  },
  {
    label: 'TOPAZ',
    value: 'TOPAZ',
  },
  {
    label: 'BERYL',
    value: 'BERYL',
  },
  {
    label: 'EMERALD',
    value: 'EMERALD',
  },
  {
    label: 'SPINEL',
    value: 'SPINEL',
  },
  {
    label: 'RUBY',
    value: 'RUBY',
  },
]

interface Props {
  onOptionChange: (p: OptionProps) => void
}
const CardListHeading: React.FC<Props> = ({ onOptionChange }) => {
  const { t } = useTranslation()

  return (
    <Flex justifyContent="space-between" alignItems="center" flexDirection="row">
      <BackLink
        title={t('My NFTs')}
        rightNode={
          <FilterContainer>
            <Select options={optionsInvestName} onOptionChange={onOptionChange} />
          </FilterContainer>
        }
      />
    </Flex>
  )
}

export default CardListHeading
