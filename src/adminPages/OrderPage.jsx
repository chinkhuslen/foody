import { useNavContext } from '../provider/navContext'
import { useOrderDataContext } from '../provider/orderDataContext'
import ResponsiveDrawer from '../components/navigation';
import { Box } from '@mui/material'
import { OrderAccordion } from '../components/orderAccordion';
import WidgetsIcon from '@mui/icons-material/Widgets';
const OrderPage = () => {
    const {orderData} = useOrderDataContext();
    const { setCurrentPage } = useNavContext();
    setCurrentPage('Захиалга');
    const stateBox = {
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        borderBottom: '1px solid #DFE0EB',
        borderTop: '1px solid #DFE0EB'
    }
    const center = {
        width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'
    }
    return (
        <Box>
            <ResponsiveDrawer />
            <Box sx={{
                width: { sm: `calc(100% - 240px)` },
                ml: { sm: `240px` },
                mt: "100px",
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: { sm: '2254px', xs: '100vw' } }}>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) =>
                        <Box sx={{ width: { sm: '334px', xs: '100vw' }, border: '1px solid #DFE0EB' }}>
                            
                            <Box sx={stateBox}>
                                <Box>{day}</Box>
                                <Box><WidgetsIcon sx={{fontSize:'14px', color:'#A0A2A8'}}/> 0</Box>
                            </Box>
                            <Box sx={center}>
                                {orderData[index].map(order => {
                                    return order.state === "" ? <OrderAccordion data={order} /> : '';
                                })}
                            </Box>



                            <Box sx={stateBox} style={{ backgroundColor: '#f47fff' }}>
                                <Box>Savalsan</Box>
                                <Box><WidgetsIcon sx={{fontSize:'14px', color:'#A0A2A8'}}/> 0</Box>
                            </Box>
                            <Box sx={center}>
                                {orderData[index].map(order => {
                                    return order.state === "packed" ? <OrderAccordion data={order} /> : '';
                                })}
                            </Box>



                            <Box sx={stateBox} style={{ backgroundColor: '#4BB543' }}>
                                <Box>hurgesen</Box>
                                <Box><WidgetsIcon sx={{fontSize:'14px', color:'#A0A2A8'}}/> 0</Box>
                            </Box>
                            <Box sx={center}>
                                {orderData[index].map(order => {
                                    return order.state === "delivered" ? <OrderAccordion data={order} /> : '';
                                })}
                            </Box>



                            <Box sx={stateBox} style={{ backgroundColor: '#FC100D' }}>
                                <Box>Aldaatai</Box>
                                <Box><WidgetsIcon sx={{fontSize:'14px', color:'#A0A2A8'}}/> 0</Box>
                            </Box>
                            <Box sx={center}>
                                {orderData[index].map(order => {
                                    return order.state === "returned" ? <OrderAccordion data={order} /> : '';
                                })}
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
export default OrderPage