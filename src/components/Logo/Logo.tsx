import React, { FC } from 'react'
import AxessibleBlackLogo from '../../assets/logo-black.png'
import AxessibleWhiteLogo from '../../assets/logo-white.png'
import Box from '@mui/material/Box'

interface LogoProps {
  variant?: 'black' | 'white'
}

const Logo: FC<LogoProps> = ({ variant = 'black' }: LogoProps) => (
  <Box sx={{ display: 'flex', mr: 1, width: '190px', height: '30px' }}>
    {variant === 'black' && <img src={AxessibleBlackLogo} alt="axessible logo black" />}
    {variant === 'white' && <img src={AxessibleWhiteLogo} alt="axessible logo black" />}
  </Box>
)

export default Logo
