import React, { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Logo from '../Logo/Logo'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import Stack from '@mui/material/Stack/Stack'
import AvatarName from '../AvatarName/AvatarName'

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <AppBar position="static" color="default">
      <Container
        maxWidth="xl"
        sx={{
          height: '7rem',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Logo />

        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => {}} sx={{ m: 0 }}>
            <Avatar sx={{ width: 24, height: 24 }}>
              <SearchIcon sx={{ fontSize: '16px' }} />
            </Avatar>
          </IconButton>
          <IconButton onClick={() => {}} sx={{ mr: 2, ml: 1 }}>
            <Avatar sx={{ width: 24, height: 24 }}>
              <NotificationsActiveIcon sx={{ fontSize: '16px' }} />
            </Avatar>
          </IconButton>

          <AvatarName userName="Robert V" />
        </Stack>
      </Container>
    </AppBar>
  )
}

export default NavBar
