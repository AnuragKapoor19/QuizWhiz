import React, { useState } from 'react'
import { ContextState } from '../ContextApi'
import { Link, useNavigate } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const Header = () => {
    const { authenticated, setauthenticated, user, setuser } = ContextState();
    const [toggle, settoggle] = useState(false);
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            setloading(true);
            const { data } = await axios.get(`${import.meta.env.VITE_PRO_API_URL}/api/v1/logout`, { withCredentials: true });

            if (!data.success) {
                return console.log(data.message);
            }

            toast.success(data.message);
            await settoggle(false);
            await setauthenticated(false);
            await setuser(null);
            setloading(false);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="navbar">
                <div className='logo-container' onClick={() => navigate('/')}>
                    <span className='logo'>𝕼𝖚𝖎𝖟𝖂𝖍𝖎𝖟</span>
                    <span className='line'>𝐅𝐨𝐫 𝐭𝐡𝐞 𝐮𝐥𝐭𝐢𝐦𝐚𝐭𝐞 𝐪𝐮𝐢𝐳 𝐰𝐢𝐳𝐚𝐫𝐝 </span>
                </div>

                {authenticated
                    ?
                    <div className='user'>
                        <div className='name' onClick={() => settoggle(!toggle)}>
                            <MdAccountCircle size={40} />
                            Hi, {String(user.username).split(' ')[0]}
                        </div>

                        <div className={`toggle-menu ${!toggle && 'd-none'}`}>
                            <div className='menu-container'>
                                <Link to={'/profile'}>My Profile</Link>
                                <Link to={'/leaderboard'}>LeaderBoard</Link>
                                {user.role === 'admin' && <Link to={'/admin/dashboard'}>Dashboard</Link>}
                                <button id='logout' onClick={handleLogout}>
                                    {loading ? <ClipLoader color='white' size={15}/> : 'Logout'}
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='buttons'>
                        <Link to={'/login'} id='login'>Login</Link>
                        <Link to={'/signup'} id='signup'>SignUp</Link>
                    </div>
                }
            </div>
        </>
    )
}

export default Header