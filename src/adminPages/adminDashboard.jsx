import { useNavContext } from '../provider/navContext'
const DashboardPage = () => {
    const { setCurrentPage, currentPage } = useNavContext();
    setCurrentPage('График');
    return (<div>DashboardPage</div>)
}
export default DashboardPage