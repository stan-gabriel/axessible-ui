import React, { FC } from 'react'
import { StandardTextFieldProps, InputAdornment, TextField } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

interface TextFieldCustomProps extends StandardTextFieldProps {
  toolTip?: string | undefined
  toolTipPosition?: 'start' | 'end'
}

const TextFieldCustom: FC<TextFieldCustomProps> = ({
  toolTip = undefined,
  toolTipPosition = 'end',
  ...rest
}) => {
  const adornment =
    toolTipPosition === 'start'
      ? {
          startAdornment: toolTip && (
            <InputAdornment position="start">
              <Tooltip title={toolTip}>
                <InfoOutlinedIcon fontSize="small" />
              </Tooltip>
            </InputAdornment>
          ),
        }
      : {
          endAdornment: toolTip && (
            <InputAdornment position="end">
              <Tooltip title={toolTip}>
                <InfoOutlinedIcon fontSize="small" />
              </Tooltip>
            </InputAdornment>
          ),
        }

  return (
    <TextField {...rest} variant="filled" fullWidth sx={{ m: '5px 0' }} InputProps={adornment} />
  )
}

export default TextFieldCustom
