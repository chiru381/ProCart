import React, { useEffect, useState } from 'react';
import Notification from '../images/notification.png';
import Message from '../images/message.jpg';
import setting from '../images/setting.png';

let Navbarr=({ socket })=>{
    const [notifications, setNotifications] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        socket.on("getText", data => {
            setNotifications((prev) => [...prev, data])
        })
    },[socket])

    console.log(notifications)

    const displayNotification = ({ senderName, text }) => {
        let action;
        // if(type === 1){
        //     action="liked"
        // } else if(type === 2){
        //     action="commented"
        // } else {
        //     action="shared"
        // }
        return (
            <span className="notification">{`${senderName}: ${text}`}</span>
        )
    }

    const handleRead = () => {
        setNotifications([])
        setOpen(false)
    }

    return (
        <>
            <div className="navbar">
                <span className="logo">
                    Lama App
                </span>
                <div className="icons" style={{ display: 'flex'}}>
                    <div className="icon" onClick={() => setOpen(!open)}>
                        <img src={Notification} style={{ width: '20px', height: '20px' }} className='iconImg'alt='' />
                        { notifications.length > 0 && 
                        <div className='counter'>{notifications.length}</div>
                        }
                    </div>
                    <div className="icon" onClick={() => setOpen(!open)}>
                        <img src={Message} style={{ width: '20px', height: '20px' }} className='iconImg'alt='' />
                    </div>
                    <div className="icon" onClick={() => setOpen(!open)}>
                        <img src={setting} style={{ width: '20px', height: '20px' }} className='iconImg'alt='' />
                    </div>
                </div>
                {open && (
                    <div className='notifications'>
                        {notifications.map((n) => displayNotification)}
                        <button className="nButton" onClick={handleRead}>Mark as read</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbarr