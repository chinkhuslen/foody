import { Box, Button, List, ListItem, ListItemText } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import { useOrderDataContext } from '../provider/orderDataContext'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';


export const OrderAccordion = ({ data }) => {
    const { setOrderData } = useOrderDataContext();
    return (
        <Box >
            <Accordion
                disableGutters
                elevation={0}
                sx={{
                    m: '5px 0', width: '282px', borderRadius: '8px', border: '1px solid #DFE0EB', '&:before': {
                        display: 'none',
                    }
                }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>{data.orderID}</Typography>
                    <Typography sx={{ fontWeight: '500', ml: '10px', color: '#A0A2A8' }}>{data.day}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List sx={{ borderBottom: '1px dashed #DFE0EB' }}>
                        {data.foods.map(el =>
                            <ListItem disablePadding
                                secondaryAction={
                                    <Typography>
                                        x{el.amount}
                                    </Typography>
                                }>
                                <ListItemText primary={`${el.name}`} />
                            </ListItem>)}
                    </List>
                    <List>
                        <ListItem>
                            <PlaceIcon sx={{ color: '#66B60F', mr: '10px' }} />
                            <Typography sx={{ fontSize: '14px' }}>{data.address}</Typography>
                        </ListItem>
                        <ListItem>
                            <PhoneIcon sx={{ color: '#66B60F', mr: '10px' }} />
                            <Typography sx={{ fontSize: '14px' }}>{data.phone}</Typography>
                        </ListItem>
                    </List>
                    <Box sx={{ minWidth: 120 }}>
                        <div >
                            <select>
                                <option value={''}>Захиалга</option>
                                <option value={'packed'}>Савласан</option>
                                <option value={'delivered'}>Хүргэсэн</option>
                                <option value={'returned'}>Алдаатай</option>
                            </select>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
