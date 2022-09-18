import React, { FC } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'
import { useGlobalContext } from '../context/GlobalContext'

interface Props {}

const Loader: FC<Props> = () => {
  const { showLoader } = useGlobalContext()

  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={showLoader}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loader
