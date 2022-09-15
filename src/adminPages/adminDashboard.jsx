import { useNavContext } from '../provider/navContext'
import ResponsiveDrawer from '../components/navigation';
const DashboardPage = () => {
    const { setCurrentPage, currentPage } = useNavContext();
    setCurrentPage('График');
    return (<ResponsiveDrawer/>)
}
export default DashboardPage