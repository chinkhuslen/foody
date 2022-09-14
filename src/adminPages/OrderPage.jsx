import { Box } from "@mui/system"
import { useNavContext } from '../provider/navContext'
const OrderPage = () => {
    const { setCurrentPage, currentPage } = useNavContext();
    setCurrentPage('Захиалга');
    return (
        <Box>
            Order
        </Box>
    )
}
export default OrderPage