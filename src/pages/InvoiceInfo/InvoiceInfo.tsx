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
import { postAndDownloadInvoiceInfo } from '../../api/InvoiceInfoApi'
import { useGlobalContext } from '../../context/GlobalContext'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import IconButton from '@mui/material/IconButton'

interface Props { }

const invoiceTypeCodes = [
  {
    value: '325',
    label: 'Commercial',
  },
  {
    value: '380',
    label: 'Proforma',
  },
]

const InvoiceInfo: FC<Props> = () => {
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

  const removeInvoiceItem = (invoiceItem: IInvoiceItem) => {
    setInvoiceInfo({
      ...invoiceInfo,
      invoiceItems: [
        ...invoiceInfo.invoiceItems.filter(
          (item) => item.itemNumber !== invoiceItem.itemNumber
        ),
      ],
    })
  }

  const exportToXml = async () => {
    setShowLoader(true)
    console.log(invoiceInfo, 'INVOICE INFO FORM')
    const response = await postAndDownloadInvoiceInfo(invoiceInfo)
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
            toolTip="Proforma / commercial invoice number"
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
            toolTip="Proforma or Commercial"
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
            toolTip="Date of invoice in specific format"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            type="number"
            name="incoTermDeliveryCode"
            label="INCO term"
            toolTip="Delivery Code"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="invoiceCurrency"
            label="Invoice currency"
            toolTip="Invoice Currency"
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
            name="exporterCargoXId"
            label="CargoX ID"
            toolTip="Shipper CargoX ID"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="exporterName"
            label="Name"
            toolTip="Shipper Name"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="exporterDunsNumber"
            label="Duns Number"
            toolTip="Data Universal Numbering System (D-U-N-S Number)"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="exporterCountryCode"
            label="Country Code"
            toolTip="Country Code"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="exporterVatId"
            label="VAT ID"
            toolTip="VAT ID"
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
            name="importerName"
            label="Name"
            toolTip="Importer Name"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            name="importerCountryCode"
            label="Country Code"
            toolTip="Country Code"
            onChange={handleInvoiceFormChange}
          />

          <TextFieldCustom
            required
            type="number"
            name="importerVatId"
            label="VAT ID"
            toolTip="VAT ID"
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

        <TableContainer component={Paper} sx={{ maxHeight: 205 }}>
          <Table size="small" aria-label="invoice items" stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell>Item Identification</StyledTableCell>
                <StyledTableCell align="right">Product Type</StyledTableCell>
                <StyledTableCell align="right">Product Description</StyledTableCell>
                <StyledTableCell align="right">HS Code</StyledTableCell>
                <StyledTableCell align="right">GS1 Code</StyledTableCell>
                <StyledTableCell align="right">Origin Country</StyledTableCell>
                <StyledTableCell align="right">Item Quantity</StyledTableCell>
                <StyledTableCell align="right">Net Weight</StyledTableCell>
                <StyledTableCell align="right">Gross Weight</StyledTableCell>
                <StyledTableCell align="right">Allowness or charges</StyledTableCell>
                <StyledTableCell align="right">Amount indicator percent</StyledTableCell>
                <StyledTableCell align="right">Amount indicator basic amount</StyledTableCell>
                <StyledTableCell align="right">Amount indicator actual amount</StyledTableCell>
                <StyledTableCell align="right">Sumation line total amount</StyledTableCell>
                <StyledTableCell align="right">Gross price charge amount</StyledTableCell>
                <StyledTableCell align="right">Net price charge amount</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoiceInfo.invoiceItems.map((item, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    <IconButton aria-label="delete">
                      <DeleteOutlinedIcon
                        fontSize="small"
                        color="error"
                        onClick={() => removeInvoiceItem(item)}
                      />
                    </IconButton>
                  </TableCell>
                  <TableCell>{item.itemNumber}</TableCell>
                  <TableCell align="right">{item.productType}</TableCell>
                  <TableCell align="right">{item.productDescription}</TableCell>
                  <TableCell align="right">{item.hsCode}</TableCell>
                  <TableCell align="right">{item.globalTradeItemNumber}</TableCell>
                  <TableCell align="right">{item.countryOfOrigin}</TableCell>
                  <TableCell align="right">{item.itemQuantity}</TableCell>
                  <TableCell align="right">{item.netWeight}</TableCell>
                  <TableCell align="right">{item.grossWeight}</TableCell>
                  <TableCell align="right">{item.amountIndicatorAllownessOrCharges}</TableCell>
                  <TableCell align="right">{item.amountIndicatorCalculationPercent}</TableCell>
                  <TableCell align="right">{item.amountIndicatorBasisAmount}</TableCell>
                  <TableCell align="right">{item.amountIndicatorActualAmount}</TableCell>
                  <TableCell align="right">{item.specifiedTradeSummationLineTotalAmount}</TableCell>
                  <TableCell align="right">{item.grossPriceChargeAmount}</TableCell>
                  <TableCell align="right">{item.netPriceChargeAmount}</TableCell>
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
