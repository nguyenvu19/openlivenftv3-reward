import { useModal } from '@pancakeswap/uikit'
import { useState } from 'react'
import styled from 'styled-components'
import HeaderStakingList from './HeaderStakingList'
import ModalStaking from './ModalStaking'
import PackageStakingList from './PackageStakingList'

const WStakingList = styled.div`
  width: 100%;
  padding-bottom: 70px;
`

const StakingList = () => {
  const [modalStaking, setModalStaking] = useState({ open: false, dataModal: null })
  const handleStaking = (packageItem) => {
    setModalStaking({ open: true, dataModal: packageItem })
  }
  return (
    <WStakingList>
      <HeaderStakingList />
      <PackageStakingList onStaking={handleStaking} />

      <ModalStaking open={modalStaking.open} dataModal={modalStaking.dataModal} setModalStaking={setModalStaking} />
    </WStakingList>
  )
}

export default StakingList
