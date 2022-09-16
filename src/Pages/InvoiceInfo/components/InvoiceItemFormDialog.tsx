import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { DialogActions, DialogContent, TextField } from '@mui/material'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface InvoiceItemFormDialogProps {
  open: boolean
  setOpen: any
}

export default function InvoiceItemFormDialog({ open, setOpen }: InvoiceItemFormDialogProps) {
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>

        <DialogContent
          dividers
          sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}
        >
          <TextField
            required
            sx={{ m: '5px 0' }}
            id="outlined-basic"
            label="Item Identification"
            variant="filled"
          />
          <TextField
            required
            sx={{ m: '5px 0' }}
            id="outlined-basic"
            label="Product Type"
            variant="filled"
          />
          <TextField
            required
            sx={{ m: '5px 0' }}
            id="outlined-basic"
            label="Product Description"
            variant="filled"
          />
          <TextField
            required
            sx={{ m: '5px 0' }}
            id="outlined-basic"
            label="HS Code"
            variant="filled"
          />
          <TextField
            required
            sx={{ m: '5px 0' }}
            id="outlined-basic"
            label="GST Code"
            variant="filled"
          />
          <TextField
            required
            sx={{ m: '5px 0' }}
            id="outlined-basic"
            label="Origin Country"
            variant="filled"
          />
          <TextField
            required
            sx={{ m: '5px 0' }}
            id="outlined-basic"
            label="Item Quantity"
            variant="filled"
          />
          <TextField
            required
            sx={{ m: '5px 0' }}
            id="outlined-basic"
            label="Net Weight"
            variant="filled"
          />
        </DialogContent>

        <DialogActions>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
