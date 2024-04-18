import { Outlet } from "react-router-dom";
import AdminNavigator from "../../components/admin/navigators/Navigator";

function AdminPage() {
  return (
    <>
      <div className="row">
        <AdminNavigator></AdminNavigator>
        <Outlet></Outlet>
      </div>
    </>
  );
}
export default AdminPage;
