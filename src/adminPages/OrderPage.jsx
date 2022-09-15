import { useNavContext } from '../provider/navContext'
import ResponsiveDrawer from '../components/navigation';
const OrderPage = () => {
    const { setCurrentPage } = useNavContext();
    setCurrentPage('Захиалга');
    return (<ResponsiveDrawer/>)
}
export default OrderPage