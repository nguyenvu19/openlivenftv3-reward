import CampaignsCreate from 'views/admin/Campaigns/CampaignsCreate'
import AdminLayout from 'components/Admin/Layout'

const AdminCreateCampaigns = () => {
  return <CampaignsCreate />
}

AdminCreateCampaigns.mp = true
AdminCreateCampaigns.Layout = AdminLayout
export default AdminCreateCampaigns
