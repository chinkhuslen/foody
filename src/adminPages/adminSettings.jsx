import { useNavContext } from '../provider/navContext'
const SettingsPage = () => {
    const { setCurrentPage, currentPage } = useNavContext();
    setCurrentPage('Тохиргоо');
    return (<div>SettingsPage</div>)
}
export default SettingsPage