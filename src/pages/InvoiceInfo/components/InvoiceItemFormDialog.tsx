import React, { FC } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { DialogActions, DialogContent } from '@mui/material'
import { IInvoiceItem, InvoiceItemDefaultValues } from '../invoiceInfo.types'
import TextFieldCustom from '../../../components/TextFieldCustom'

interface Props {
  open: boolean
  setOpen: any
  onSave: (invoiceItem: IInvoiceItem) => void
}

const InvoiceItemFormDialog: FC<Props> = ({ open, setOpen, onSave }) => {
  const [invoiceItem, setInvoiceItem] = React.useState<IInvoiceItem>(InvoiceItemDefaultValues)

  const handleClose = () => {
    setOpen(false)
  }

  const handleInvoiceItemFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceItem({
      ...invoiceItem,
      [event.target.name]: event.target.value,
    })
  }

  const handelSave = () => {
    onSave(invoiceItem)
    setInvoiceItem(InvoiceItemDefaultValues)
    handleClose()
  }

  return (
    <div>
      <Dialog
        sx={{ minWidth: '50%' }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Invoice Item - add product
            </Typography>
          </Toolbar>
        </AppBar>

        <DialogContent
          dividers
          sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}
        >
          <TextFieldCustom
            required
            name="itemNumber"
            label="Item Number"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="productType"
            label="Product Type"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="productDescription"
            label="Product Description"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="hsCode"
            label="HS Code"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="globalTradeItemNumber"
            label="Global Trade Item Numbers"
            toolTip="Global Trade Item Numbers (GTIN)"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="countryOfOrigin"
            label="Origin Country"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="itemQuantity"
            label="Item Quantity"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="netWeight"
            label="Net Weight"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="grossWeight"
            label="Gross Weight"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="amountIndicatorAllownessOrCharges"
            label="Allowness or charges"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="amountIndicatorCalculationPercent"
            label="Amount indicator percent"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="amountIndicatorBasisAmount"
            label="Amount indicator basic amount"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="amountIndicatorActualAmount"
            label="Amount indicator actual amount"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="specifiedTradeSummationLineTotalAmount"
            label="Sumation line total amount"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="grossPriceChargeAmount"
            label="Gross price charge amount"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
          <TextFieldCustom
            required
            name="netPriceChargeAmount"
            label="Net price charge amount"
            toolTip="Some info"
            onChange={handleInvoiceItemFormChange}
          />
        </DialogContent>

        <DialogActions>
          <Button autoFocus color="inherit" onClick={handelSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default InvoiceItemFormDialog
