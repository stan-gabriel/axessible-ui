import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  Button,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Tooltip from '@mui/material/Tooltip'
import { StyledTableCell } from '../../components/styledMuiComponents/InvoiceStyledTableCell'
import InvoiceItemFormDialog from './components/InvoiceItemFormDialog'
import { InvoiceInfoDefaultValues } from './invoiceInfo.types'
import TextFieldCustom from '../../components/TextFieldCustom'

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

function createRowData(
  itemIdentification: string,
  productType: string,
  productDescription: string,
  hsCode: string,
  gs1Code: string,
  originCountry: string,
  itemQuantity: string,
  netWeight: string
) {
  return {
    itemIdentification,
    productType,
    productDescription,
    hsCode,
    gs1Code,
    originCountry,
    itemQuantity,
    netWeight,
  }
}

const tableRows = [
  createRowData(
    'value1',
    'value 2',
    'value 3',
    'value 4',
    'value 6',
    'value 7',
    'value 8',
    'value 9'
  ),
]

const InvoiceInfo: FC<InvoiceInfoProps> = () => {
  // const [invoiceTypeCode, setInvoiceTypeCode] = React.useState('Commercial')
  const [openInvoiceItemFrom, setOpenInvoiceItemFrom] = React.useState(false)
  const [invoiceInfo, setInvoiceInfo] = React.useState(InvoiceInfoDefaultValues)

  function handleInvoiceFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.name, ' - NAME')
    console.log(event.target.value, ' - VALUE')
    setInvoiceInfo({
      ...invoiceInfo,
      [event.target.name]: event.target.value,
    })
  }

  const handelAddInvoiceItem = () => {
    setOpenInvoiceItemFrom(true)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setInvoiceTypeCode(event.target.value)
  }

  return (
    <Box sx={{ mt: '21px', pl: '130px', pr: '130px' }}>
      <Typography variant="h4" sx={{ m: '21px' }}>
        Invoice details
      </Typography>

      <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', p: '10px 31px' }}>
        <Typography variant="h6">General Info</Typography>

        <Box
          sx={{
            '& .MuiTextField-root': { m: 1 },
            display: 'flex',
          }}
        >
          <TextFieldCustom
            required
            name="filled-required"
            toolTip="Some info"
            label="Invoice number"
            type="number"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            select
            name="invoiceTypeCode"
            label="Invoice Type Code"
            value={invoiceInfo.invoiceTypeCode}
            onChange={handleInvoiceFormChange}
            toolTip="Some info"
            toolTipPosition="start"
          >
            {invoiceTypeCodes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldCustom>

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

      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          p: '30px 31px',
          mt: '15px',
        }}
      >
        <Box sx={{ display: 'flex', mb: '25px' }}>
          <Typography variant="h6" sx={{ mr: '1rem' }}>
            Invoice items
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: '#11232C' }}
            onClick={handelAddInvoiceItem}
          >
            Add products
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Item Identification</StyledTableCell>
                <StyledTableCell align="right">Product Type</StyledTableCell>
                <StyledTableCell align="right">Product Description</StyledTableCell>
                <StyledTableCell align="right">HS Code</StyledTableCell>
                <StyledTableCell align="right">GS1 Code</StyledTableCell>
                <StyledTableCell align="right">Origin Country</StyledTableCell>
                <StyledTableCell align="right">Item Quantity</StyledTableCell>
                <StyledTableCell align="right">Net Weight</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.itemIdentification}
                  </TableCell>
                  <TableCell align="right">{row.productType}</TableCell>
                  <TableCell align="right">{row.productDescription}</TableCell>
                  <TableCell align="right">{row.hsCode}</TableCell>
                  <TableCell align="right">{row.gs1Code}</TableCell>
                  <TableCell align="right">{row.originCountry}</TableCell>
                  <TableCell align="right">{row.itemQuantity}</TableCell>
                  <TableCell align="right">{row.netWeight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: '#5DCA83', borderRadius: '2rem', m: '1rem', p: '1rem 10rem' }}
        >
          Export to XML
        </Button>
      </Box>

      <InvoiceItemFormDialog open={openInvoiceItemFrom} setOpen={setOpenInvoiceItemFrom} />
    </Box>
  )
}

export default InvoiceInfo
