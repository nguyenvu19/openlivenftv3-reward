import { Box, BoxProps } from '@pancakeswap/uikit'

const Container: React.FC<React.PropsWithChildren<BoxProps>> = ({ children, ...props }) => (
  <Box p={['0 6px', '0 16px', '0 0 0 24px']} mx="auto" maxWidth="1200px" {...props}>
    {children}
  </Box>
)

export default Container
