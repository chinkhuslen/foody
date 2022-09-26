import ResponsiveDrawer from '../components/navigation';
import { useNavContext } from '../provider/navContext'
const SettingsPage = () => {
    const { setCurrentPage } = useNavContext();
    setCurrentPage('Тохиргоо');
    return (<ResponsiveDrawer/>)
}
export default SettingsPage