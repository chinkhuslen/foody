import { useNavContext } from '../provider/navContext'
import ResponsiveDrawer from '../components/navigation';
import { Box } from '@mui/material'
import { orderData } from '../mockData/data';
const OrderPage = () => {
    const { setCurrentPage } = useNavContext();
    setCurrentPage('Захиалга');
    const stateBox = {
        height: '48px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 20px', 
        border: '1px solid #DFE0EB'
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
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day =>
                        <Box sx={{ width: { sm: '334px', xs: '100vw' }, border: '1px solid #DFE0EB' }}>
                            <Box sx={stateBox}>
                                <Box>{day}</Box>
                                <Box>icon 0</Box>
                            </Box>
                            <Box sx={stateBox}>
                                <Box>Zahialga</Box>
                                <Box>icon 0</Box>
                            </Box>
                            <Box>1</Box>
                            <Box sx={stateBox}>
                                <Box>Savalsan</Box>
                                <Box>icon 0</Box>
                            </Box>
                            <Box>2</Box>
                            <Box sx={stateBox}>
                                <Box>hurgesen</Box>
                                <Box>icon 0</Box>
                            </Box>
                            <Box>3</Box>
                            <Box sx={stateBox}>
                                <Box>Aldaatai</Box>
                                <Box>icon 0</Box>
                            </Box>
                            <Box>4</Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
export default OrderPage