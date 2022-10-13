import { useState } from 'react'
import { Flex, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Select, { OptionProps } from 'components/Select/Select'
import styled from 'styled-components'
import Container from 'components/Layout/Container'
import CardNftList from './components/CardNftList'
import CardListHeading from './components/CardListHeading'

const MyNftPage: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <Container>
        <CardListHeading />
      </Container>

      <Container mt={[null, null, null, '32px']}>
        <CardNftList />
      </Container>
    </>
  )
}

export default MyNftPage
