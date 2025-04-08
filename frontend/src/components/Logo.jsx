import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {
    const navigate = useNavigate();

    return (
        <>
            <div className='logo-container' onClick={() => navigate('/')}>
                <span className='logo'>𝕼𝖚𝖎𝖟𝖂𝖍𝖎𝖟</span>
                <span className='line'>𝐅𝐨𝐫 𝐭𝐡𝐞 𝐮𝐥𝐭𝐢𝐦𝐚𝐭𝐞 𝐪𝐮𝐢𝐳 𝐰𝐢𝐳𝐚𝐫𝐝 </span>
            </div>
        </>
    )
}

export default Logo