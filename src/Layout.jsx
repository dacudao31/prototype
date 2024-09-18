import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { VisibilityOutlined, VisibilityOff, MoreHoriz} from '@mui/icons-material';

const Layout = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    return (
        <main className='min-w-xl mx-auto px-4'>
            <header className='desktop:px-5 mx-auto flex items-center justify-between pt-5'>
                <div>
                    <h3 className='font-bold desktop:text-lg'>Good Morning, Admin</h3>
                    <div className='flex items-center gap-2'>
                        {visible ? ( <p>123456789</p> ) : ( <p>*********</p> )}
                        <div className='cursor-pointer' onClick={() => setVisible(!visible)} tabIndex={0}>
                            {visible ? ( <VisibilityOff /> ) : ( <VisibilityOutlined /> )}
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('more')} className='w-10 h-10 bg-grey rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition ease-in-out focus:ring focus:outline-none' tabIndex={0}> 
                    <MoreHoriz />
                </div>
            </header>
            <div className='max-w-2xl mx-auto'>
                <Outlet />
            </div>
        </main>
    )
}

export default Layout
