import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Paper, TextField } from '@mui/material'

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
        Invoice Info
      </Typography>
      <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', p: '10px 26px' }}>
        <Typography variant="h6" sx={{ m: '21px' }}>
          General Info
        </Typography>

        <Box>
          <TextField
            required
            id="filled-required"
            label="Shipping Date"
            defaultValue=""
            variant="filled"
          />

          <TextField
            required
            id="filled-required"
            label="Shipping Arrival Customs"
            defaultValue=""
            variant="filled"
          />

          <TextField
            id="select-1"
            required
            select
            label="Invoice Type Code"
            value={invoiceTypeCode}
            onChange={handleChange}
            variant="filled"
            helperText="Please select your currency"
          >
            {invoiceTypeCodes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
      </Paper>
    </Box>
  )
}

export default InvoiceInfo
