import { Outlet } from "react-router-dom";
import AdminNavigator from "../../components/admin/navigators/Navigator";

function AdminPage() {
  return (
    <>
      <div className="row padding-0">
        <AdminNavigator></AdminNavigator>
        <Outlet></Outlet>
      </div>
    </>
  );
}
export default AdminPage;
