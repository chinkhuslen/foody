import { useNavContext } from '../provider/navContext'
import ResponsiveDrawer from '../components/navigation';
const DashboardPage = () => {
    const { setCurrentPage } = useNavContext();
    setCurrentPage('График');
    return (<ResponsiveDrawer/>)
}
export default DashboardPage