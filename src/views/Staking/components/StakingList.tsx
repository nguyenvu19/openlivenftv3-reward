import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useStakingListData } from 'state/staking/fetchStakingList'
import ModalStaking from './ModalStaking'
import HeaderStakingList from './HeaderStakingList'
import PackageStakingList from './PackageStakingList'
import useContractStakingConditions from '../hooks/useContractStakingConditions'

const WStakingList = styled.div`
  width: 100%;
  padding-bottom: 70px;
`

const StakingList: React.FC = () => {
  const [modalStaking, setModalStaking] = useState({ open: false, dataModal: null })

  const { stakingList, fetchStakingList } = useStakingListData()
  const { projectFee } = useContractStakingConditions()

  const handleStaking = (packageItem) => {
    setModalStaking({ open: true, dataModal: packageItem })
  }

  const handleStakingSuccess = useCallback(() => {
    setModalStaking({ open: false, dataModal: null })
    fetchStakingList()
  }, [fetchStakingList])

  return (
    <WStakingList>
      <HeaderStakingList />
      <PackageStakingList stakingList={stakingList} onStaking={handleStaking} />
      <ModalStaking
        open={modalStaking.open}
        dataModal={modalStaking.dataModal}
        projectFee={projectFee}
        setModalStaking={setModalStaking}
        onStakingSuccess={handleStakingSuccess}
      />
    </WStakingList>
  )
}

export default StakingList
