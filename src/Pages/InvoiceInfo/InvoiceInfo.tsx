import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { InputAdornment, Paper, TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack/Stack'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Tooltip from '@mui/material/Tooltip'

interface InvoiceInfoProps {}

const invoiceTypeCodes = [
  {
    value: 'Commercial',
    label: 'Commercial',
  },
  {
    value: 'Industrial',
    label: 'Industrial',
  },
]

const InvoiceInfo: FC<InvoiceInfoProps> = () => {
  const [invoiceTypeCode, setInvoiceTypeCode] = React.useState('Commercial')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceTypeCode(event.target.value)
  }

  return (
    <Box sx={{ mt: '21px', pl: '130px', pr: '130px' }}>
      <Typography variant="h4" sx={{ m: '21px' }}>
        Invoice details
      </Typography>

      <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', p: '10px 26px' }}>
        <Typography variant="h6">General Info</Typography>

        <Box
          sx={{
            '& .MuiTextField-root': { m: 1 },
            display: 'flex',
          }}
        >
          <TextField
            required
            id="filled-required"
            label="Invoice number"
            type="number"
            defaultValue=""
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="select-1"
            required
            select
            label="Invoice Type Code"
            value={invoiceTypeCode}
            onChange={handleChange}
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          >
            {invoiceTypeCodes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            required
            id="filled-required"
            label="Invoice Date"
            defaultValue=""
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            id="filled-required"
            label="INCO term"
            type="number"
            defaultValue=""
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            id="filled-required"
            label="Currency"
            defaultValue="USD"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Typography variant="h6">Exporter details</Typography>

        <Box
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
        >
          <TextField
            required
            id="filled-required"
            label="Cargo ID"
            defaultValue=""
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            id="filled-required"
            label="Duns number"
            defaultValue=""
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            id="filled-required"
            label="Country Code"
            defaultValue=""
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            id="filled-required"
            label="VAT ID"
            defaultValue=""
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Typography variant="h6">Importer details</Typography>

        <Box
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
        >
          <TextField
            required
            id="filled-required"
            label="Name"
            defaultValue=""
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            id="filled-required"
            label="Country Code"
            defaultValue=""
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            id="filled-required"
            label="VAT ID"
            defaultValue=""
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Some info">
                    <InfoOutlinedIcon fontSize="small" />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Paper>
    </Box>
  )
}

export default InvoiceInfo
