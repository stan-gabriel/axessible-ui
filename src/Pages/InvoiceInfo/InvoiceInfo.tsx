import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { StyledTableCell } from '../../components/styledMuiComponents/InvoiceStyledTableCell'
import InvoiceItemFormDialog from './components/InvoiceItemFormDialog'
import { IInvoiceInfo, IInvoiceItem, InvoiceInfoDefaultValues } from './invoiceInfo.types'
import TextFieldCustom from '../../components/TextFieldCustom'
import { postInvoiceInfo } from '../../api/InvoiceInfoApi'
import { useGlobalContext } from '../../context/GlobalContext'

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
  const [openInvoiceItemFrom, setOpenInvoiceItemFrom] = React.useState(false)
  const [invoiceInfo, setInvoiceInfo] = React.useState<IInvoiceInfo>(InvoiceInfoDefaultValues)
  const { setShowLoader } = useGlobalContext()

  const handleInvoiceFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceInfo({
      ...invoiceInfo,
      [event.target.name]: event.target.value,
    })
  }

  const handelAddInvoiceItem = () => {
    setOpenInvoiceItemFrom(true)
  }

  const saveInvoiceItem = (invoiceItem: IInvoiceItem) => {
    setInvoiceInfo({
      ...invoiceInfo,
      invoiceItems: [...invoiceInfo.invoiceItems, invoiceItem],
    })
  }

  const exportToXml = async () => {
    setShowLoader(true)
    console.log(invoiceInfo, 'INVOICE INFO FORM')
    const response = await postInvoiceInfo(invoiceInfo)
    console.log(response, ' - Api POST response')
    setShowLoader(false)
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
            type="number"
            name="invoiceNumber"
            toolTip="Some info"
            label="Invoice number"
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

          <TextFieldCustom
            required
            name="invoiceDate"
            label="Invoice Date"
            toolTip="Some info"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            type="number"
            name="incoTerm"
            label="INCO term"
            toolTip="Some info"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="currency"
            label="Currency"
            toolTip="Some info"
            onChange={handleInvoiceFormChange}
          />
        </Box>

        <Typography variant="h6">Exporter details</Typography>

        <Box
          sx={{
            '& .MuiTextField-root': { m: 1 },
            display: 'flex',
          }}
        >
          <TextFieldCustom
            required
            name="exportCargoId"
            label="Cargo ID"
            toolTip="Some info"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="exportName"
            label="Name"
            toolTip="Some info"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="exportDunsNumber"
            label="Duns Number"
            toolTip="Some info"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="exportCountryCode"
            label="Country Code"
            toolTip="Some info"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="exportVatId"
            label="VAT ID"
            toolTip="Some info"
            onChange={handleInvoiceFormChange}
          />
        </Box>

        <Typography variant="h6">Importer details</Typography>

        <Box
          sx={{
            '& .MuiTextField-root': { m: 1 },
            display: 'flex',
          }}
        >
          <TextFieldCustom
            required
            name="importName"
            label="Name"
            toolTip="Some info"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="importCountryCode"
            label="Country Code"
            toolTip="Some info"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            type="number"
            name="importVatId"
            label="VAT ID"
            toolTip="Some info"
            onChange={handleInvoiceFormChange}
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
              {invoiceInfo.invoiceItems.map((item, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {item.itemIdentification}
                  </TableCell>
                  <TableCell align="right">{item.productType}</TableCell>
                  <TableCell align="right">{item.productDescription}</TableCell>
                  <TableCell align="right">{item.hsCode}</TableCell>
                  <TableCell align="right">{item.gs1Code}</TableCell>
                  <TableCell align="right">{item.originCountry}</TableCell>
                  <TableCell align="right">{item.itemQuantity}</TableCell>
                  <TableCell align="right">{item.netWeight}</TableCell>
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
          onClick={exportToXml}
        >
          Export to XML
        </Button>
      </Box>

      <InvoiceItemFormDialog
        open={openInvoiceItemFrom}
        setOpen={setOpenInvoiceItemFrom}
        onSave={saveInvoiceItem}
      />
    </Box>
  )
}

export default InvoiceInfo
