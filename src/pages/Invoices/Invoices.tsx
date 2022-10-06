import React, { FC, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import FilterListIcon from '@mui/icons-material/FilterList'
import { invoicesMockData } from '../../mock/invoicesMock'
import { IInvoice } from './invoice.types'
import axios from 'axios'
import SearchInput from '../../components/SearchInput/SearchInput'
import { useGlobalContext } from '../../context/GlobalContext'

interface Props {}

const Invoices: FC<Props> = () => {
  const [invoices, setInvoices] = React.useState<IInvoice[]>([])
  const [sortBy, setSortBy] = React.useState('1')
  const { setShowLoader } = useGlobalContext()

  const handleSortByChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string)
  }

  useEffect(() => {
    const fetchData = async () => {
      setShowLoader(true)
      const res = await axios.get<IInvoice[]>('http://127.0.0.1:8000/invoices/')
      // setInvoices(res.data)  //TODO uncomment this when API is working
      setShowLoader(false)
    }
    setInvoices(invoicesMockData) // Mock data todo remove this when API is ready

    fetchData().catch((err) => {
      setShowLoader(false)
    })
  }, [])

  const handleViewOriginal = (invoiceNumber: string) => {
    console.log('VIEW ORIGINAL', invoiceNumber)
  }

  const handleEdit = (invoiceNumber: string) => {
    console.log('EDIT', invoiceNumber)
  }

  const handleExport = async (invoiceNumber: string) => {
    console.log('EXPORT', invoiceNumber)
    setShowLoader(true)
    await axios.post(`http://127.0.0.1:8000/invoices/${invoiceNumber}`, {}).catch((err) => {
      setShowLoader(false)
    })
    setShowLoader(false)
  }

  const handleDelete = async (invoiceNumber: string) => {
    console.log('DELETE', invoiceNumber)
    setShowLoader(true)
    await axios.delete(`http://127.0.0.1:8000/invoices/${invoiceNumber}`).catch((err) => {
      setShowLoader(false)
    })
    setShowLoader(false)
  }

  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: '1rem 2rem',
          borderTop: '1px solid #E5E5E5',
        }}
      >
        <SearchInput />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '39px' }}>
          {/*<InputLabel id="demo-simple-select-label">Recent Changes</InputLabel>*/}
          <Select
            sx={{ backgroundColor: '#E5E5E5', borderRadius: '2rem', p: '0 2rem' }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            label="Sort By"
            onChange={handleSortByChange}
          >
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </Select>

          <Button
            variant="contained"
            color="success"
            sx={{
              borderRadius: '2rem',
              p: '0 2rem',
              ml: '2rem',
            }}
            startIcon={<FilterListIcon />}
          >
            Filter
          </Button>
        </Box>
      </Paper>

      <Box sx={{ mt: '21px', pl: '130px', pr: '130px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '1rem' }}>
          <Typography variant="h6">Invoice Listing</Typography>

          <Typography variant="h6">{invoices.length} Results</Typography>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Invoice No</TableCell>
                <TableCell align="right">Invoice Date</TableCell>
                <TableCell align="right">Export Name</TableCell>
                <TableCell align="right">Import Name</TableCell>
                <TableCell align="right">Upload Date</TableCell>
                <TableCell align="right" />
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice: IInvoice) => (
                <TableRow
                  key={invoice.invoice_number}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {invoice.invoice_number}
                  </TableCell>
                  <TableCell align="right">{invoice.invoice_date}</TableCell>
                  <TableCell align="right">{invoice.exporter_name}</TableCell>
                  <TableCell align="right">{invoice.importer_name}</TableCell>
                  <TableCell align="right">{invoice.invoice_date}</TableCell>
                  <TableCell align="right" />
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        borderRadius: '2rem',
                        minWidth: '150px',
                        backgroundColor: '#c7c7c7',
                        m: '5px 5px 0 0',
                      }}
                      onClick={() => handleViewOriginal(invoice.invoice_number)}
                    >
                      View Original
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="success"
                      sx={{ borderRadius: '2rem', m: '5px 5px 0 0' }}
                      onClick={() => handleEdit(invoice.invoice_number)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="warning"
                      sx={{ borderRadius: '2rem', m: '5px 5px 0 0' }}
                      onClick={() => handleExport(invoice.invoice_number)}
                    >
                      Export
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      sx={{ borderRadius: '2rem', m: '5px 5px 0 0' }}
                      onClick={() => handleDelete(invoice.invoice_number)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default Invoices
