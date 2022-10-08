import { useMemo } from 'react'

export const useMenuItemsStatus = (): Record<string, string> => {
  return useMemo(() => {
    return {
      // '/competition': competitionStatus,
      // ...(potteryStatus === PotteryDepositStatus.BEFORE_LOCK && {
      //   '/pottery': 'pot_open',
      // }),
      // ...(votingStatus && {
      //   '/voting': 'vote_now',
      // }),
    }
  }, [])
}
