import React, { useEffect } from 'react'
import BasicButtons from './common/Button';

export default function Home() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        window.location = '/';
    }

    // useEffect(() => {
    //     let authToken = sessionStorage.getItem('Auth Token');
    //     console.log(authToken);
    //     if (authToken) {
    //         window.location = '/home';
    //     }
    //     else {
    //         window.location = '/';
    //     }
    // }, [])

    return (
        <div>
            Home Page
            <br />
            <BasicButtons handleAction={handleLogout} title='Log out' />
        </div>
    )
}