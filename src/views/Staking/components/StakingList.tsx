import { useState } from 'react'
import styled from 'styled-components'
import { useStakingListData } from 'state/staking/fetchStakingList'
import ModalStaking from './ModalStaking'
import HeaderStakingList from './HeaderStakingList'
import PackageStakingList from './PackageStakingList'

const WStakingList = styled.div`
  width: 100%;
  padding-bottom: 70px;
`

const StakingList: React.FC = () => {
  const [modalStaking, setModalStaking] = useState({ open: false, dataModal: null })

  const { stakingList } = useStakingListData()

  const handleStaking = (packageItem) => {
    setModalStaking({ open: true, dataModal: packageItem })
  }

  return (
    <WStakingList>
      <HeaderStakingList />
      <PackageStakingList stakingList={stakingList} onStaking={handleStaking} />
      <ModalStaking open={modalStaking.open} dataModal={modalStaking.dataModal} setModalStaking={setModalStaking} />
    </WStakingList>
  )
}

export default StakingList
