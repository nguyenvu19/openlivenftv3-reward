import { useState } from 'react'
import { Flex, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Select, { OptionProps } from 'components/Select/Select'
import styled from 'styled-components'

const CardListHeading: React.FC<React.PropsWithChildren> = () => {
  const [sortOption, setSortOption] = useState('hot')

  const { t } = useTranslation()

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
  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" flexDirection="row">
        <Heading textAlign="left" scale="xl">
          <MyNftH2 scale="lg" color="#007CA2">
            {t('My NFTs')}
          </MyNftH2>
        </Heading>
        <Heading textAlign="right" scale="xl">
          <FilterContainer>
            <LabelWrapper>
              <Select
                options={[
                  {
                    label: t('Select Name'),
                    value: '',
                  },
                  {
                    label: t('Hot'),
                    value: 'hot',
                  },
                  {
                    label: t('APR'),
                    value: 'apr',
                  },
                ]}
                onOptionChange={handleSortOptionChange}
              />
            </LabelWrapper>
          </FilterContainer>
        </Heading>
      </Flex>
    </>
  )
}

export default CardListHeading
