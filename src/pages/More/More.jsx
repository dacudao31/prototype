import React from 'react'
import Button from '../../components/UI/Button'
import Back from '../../components/UI/Back';
import Link from '../../components/UI/Link'
import { AdminPanelSettingsRounded, GroupsRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const More = () => {
  const navigate = useNavigate();
  const iconStyling = {
    fontSize: 40
  }

  return (
    <main className="relative min-h-screen flex flex-col gap-4 overflow-hidden">
      <Back to={'/profile'}/>
      <section className="flex flex-col gap-3">
        <h3 className="text-md-lg font-bold">
          Post
        </h3>
        <Link to={'/profile/admins'}>
          <Button variant="secondary">
            <div>
              <AdminPanelSettingsRounded sx={iconStyling} />
              <h3 className="font-normal">Manage Admins</h3>
            </div>
          </Button>
        </Link>
        <Button variant="secondary">
          <div>
            <GroupsRounded sx={iconStyling} />
            <h3 className="font-normal">Manage Accounts</h3>
          </div>
        </Button>
      </section>

      <Button 
        variant="default-outline" 
        className="absolute bottom-28 w-full"
        onClick={() => navigate('/')}
      > 
        Logout
      </Button>
      
    </main>
  )
}

export default More
