import AdminHomePage from 'views/admin/Home'
import AdminLayout from 'components/Admin/Layout'

const Admin = () => {
  return <AdminHomePage />
}

Admin.mp = true
Admin.Layout = () => <AdminLayout />
export default Admin
