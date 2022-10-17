import { Flex, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Select, { OptionProps } from 'components/Select/Select'
import styled from 'styled-components'

const MyNftH2 = styled(Heading)`
  font-size: 16px;
  margin-bottom: 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 32px;
  }
`
const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
      <Heading textAlign="left" scale="xl">
        <MyNftH2 scale="lg" color="#007CA2">
          {t('My NFTs')}
        </MyNftH2>
      </Heading>
      <Heading textAlign="right" scale="xl">
        <FilterContainer>
          <LabelWrapper>
            <Select options={optionsInvestName} onOptionChange={onOptionChange} />
          </LabelWrapper>
        </FilterContainer>
      </Heading>
    </Flex>
  )
}

export default CardListHeading
