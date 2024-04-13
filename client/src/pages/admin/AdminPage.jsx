import { Outlet } from 'react-router-dom'
import AdminNavigator from '../../components/admin/navigators/Navigator'

function AdminPage() {
    return (
        <>
        <AdminNavigator></AdminNavigator>
        <Outlet></Outlet>
        </>
    )
}
export default AdminPage