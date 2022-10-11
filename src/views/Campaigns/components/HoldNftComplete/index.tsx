import { Flex, Heading } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import styled from 'styled-components'
import CardNftVertical from '../CardNftVertical'

const WHoldNftComplete = styled.div`
  padding-bottom: 100px;
`

const HoldNftComplete = () => {
  return (
    <WHoldNftComplete>
      <Flex justifyContent="center" mb="40px">
        <Heading size="xxl" as="h2">
          Completed
        </Heading>
      </Flex>
      <FlexGap gap="30px" flexDirection="column">
        <CardNftVertical />
      </FlexGap>
    </WHoldNftComplete>
  )
}

export default HoldNftComplete
