import styled, { createGlobalStyle } from 'styled-components'
import { Box, Button, Checkbox, Flex, Grid, Text } from '@pancakeswap/uikit'
import { Modal } from 'antd'
import Caution01 from './Caution01'
import StakingInput from './StakingInput'
import CautionImage from '../../images/caution.png'

const GlobalStyleModalStaking = createGlobalStyle`
  .ant-modal-content {
    background: #FFFFFF; 
    border-radius: 20px;  
    overflow: hidden;
    .ant-modal-close-x {
      display: none;
    }
    .ant-modal-body {
      padding: 0;
    }
  }
`
const WModalStakingContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
  .modal-staking-left {
    flex: 1 1 100%;
    max-width: 100%;
    padding: 24px 12px;
    ${({ theme }) => theme.mediaQueries.md} {
      padding: 24px;
      flex: 1 1 55%;
      max-width: 55%;
    }
  }
  .modal-staking-right {
    flex: 1 1 100%;
    max-width: 100%;
    padding: 12px;
    background: #eefbff;
    ${({ theme }) => theme.mediaQueries.md} {
      padding: 24px;
      flex: 1 1 45%;
      max-width: 45%;
    }
  }
`
const InputRightNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .divider {
    width: 2px;
    height: 16px;
    margin: 0 16px;
    background: #000;
  }
`

const ModalStaking = ({ open, dataModal, setModalStaking, ...props }) => {
  const onPurchase = () => {
    console.log(123)
  }
  return (
    <Modal open={open} width={1000} className="modal-staking" centered footer={false} {...props}>
      <GlobalStyleModalStaking />
      <WModalStakingContent>
        <div className="modal-staking-left">
          <Text
            as="h2"
            color="#000"
            fontSize={['16px', , '24px']}
            fontWeight="700"
            pb="4px"
            mb="24px"
            style={{ borderBottom: '1px solid #333' }}
          >
            OPV Staking
          </Text>
          <div className="modal-staking-left-body">
            <Caution01 />
            <Flex justifyContent="flex-end" mt="12px">
              <Text fontSize={['12px', , '16px']}>Defi Staking Timeline</Text>
            </Flex>
            <Box mb="16px">
              <Text mb="5px" bold fontSize={['12px', , '16px']}>
                Type
              </Text>
              <StakingInput readOnly value="30 Days" style={{ textAlign: 'center' }} />
            </Box>
            <Box mb="24px">
              <Flex justifyContent="space-between">
                <Text mb="5px" bold fontSize={['12px', , '16px']}>
                  Lock Amount
                </Text>
                <Text fontSize={['12px', , '16px']}>Available amount 0.0000000 OPV</Text>
              </Flex>
              <StakingInput
                value={199999}
                rightNode={
                  <InputRightNode className="">
                    <Text>OPV</Text>
                    <span className="divider" />
                    <Button scale="xs">Max</Button>
                  </InputRightNode>
                }
              />
            </Box>
            <Text bold fontSize={['12px', , '16px']}>
              Lock Amount Limitation
            </Text>
            <Grid gridTemplateColumns={['1fr', , '1fr 1fr']}>
              <Text fontSize={['12px', , '16px']}>Minium: 0.0000001 OPV</Text>
              <Text fontSize={['12px', , '16px']}>Maxium: 500 OPV</Text>
            </Grid>
          </div>
        </div>
        <div className="modal-staking-right">
          <Text
            as="h2"
            color="#000"
            fontSize={['16px', , '24px']}
            fontWeight="700"
            pb="4px"
            mb={['12px', , '24px']}
            style={{ borderBottom: '1px solid rgba(0,0,0,0)' }}
          >
            Summary
          </Text>
          <div className="modal-staking-right-body">
            <Flex justifyContent="space-between" mb="6px">
              <Text fontSize={['12px', , '16px']}>Redemption Period</Text>
              <Text bold fontSize={['12px', , '16px']}>
                1 Days
              </Text>
            </Flex>
            <Flex justifyContent="space-between" mb="6px">
              <Text fontSize={['12px', , '16px']}>Interest Period</Text>
              <Text bold fontSize={['12px', , '16px']}>
                1 Days
              </Text>
            </Flex>
            <Flex justifyContent="space-between" mb="24px">
              <Text fontSize={['12px', , '16px']}>Est.APR</Text>
              <Text bold color="#46D79E" fontSize={['12px', , '16px']}>
                10.54 %
              </Text>
            </Flex>
            <Box background="#BBBBBB" borderRadius="12px" p="12px">
              <Flex>
                <Box maxWidth={24} mr="6px">
                  <img src={CautionImage.src} alt="" />
                </Box>
                <Text color="#fff" fontSize={['8px', , ' 12px']}>
                  The APR is adjusted daily based on the on-chain staking rewards, and the specific APR is subject to
                  the page display on the day.
                </Text>
              </Flex>
            </Box>
            <Flex justifyContent="flex-end">
              <Text fontSize={['8px', '12px']} mt="6px">
                *Check holding assets under Wallet - Earn - Defi Staking
              </Text>
            </Flex>

            <Text
              color="red"
              fontSize={['12px', , ' 14px']}
              minHeight={['30px', , '60px']}
              width="100%"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Error Code
            </Text>

            <Box background="#DFDDDD" borderRadius="12px" p="12px 16px">
              <Flex>
                <Box>
                  <Checkbox scale="xs" />
                </Box>
                <Text fontSize={['12px', , ' 14px']} pl="10px">
                  I have read and I agree to OPENLIVE Staking Service Agreement
                </Text>
              </Flex>
            </Box>

            <Box mt="16px">
              <Button width="100%" scale="md" onClick={onPurchase}>
                Confirm Purchase
              </Button>
            </Box>
          </div>
        </div>
      </WModalStakingContent>
    </Modal>
  )
}

export default ModalStaking
