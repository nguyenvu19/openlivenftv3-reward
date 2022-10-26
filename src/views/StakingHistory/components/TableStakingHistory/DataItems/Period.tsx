import React from 'react'

const Period: React.FC<{ start; end }> = ({ start, end }) => {
  const period = (end - start) / 1000 / 60 / 60 / 24
  return <>{period || '--'} Days</>
}

export default Period
