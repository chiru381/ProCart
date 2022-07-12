import React, { useState } from 'react';

import Like from '../images/like.jpg'
import Pic from '../images/pic.jpg'
import Share from '../images/share.png'
import Info from '../images/info.jpg'
import LikeFilled from '../images/likefill.png'

let Cardd=({ post, socket, user })=>{
    const [liked, setLiked] = useState(false);

    const handleNotification = (type) => {
        type === 1 && setLiked(true)
        socket.emit("sendText", {
            senderName: user,
            receiverName: post.username,
            text: "hello this is chat message",
        })
    }
    return (
        <>
            <div className="card">
                <div className="info">
                    <img src={post.userImg} alt="" className='userImg' />
                    <span>{post.fullname}</span>
                </div>
                <img src={post.postImg} alt="" className='postImg' />
                <div className='interaction'>
                    {liked ? (
                        <img src={LikeFilled}  style={{ width: '50px', height: '50px' }} alt="" />
                    ) : (
                        <img src={Like} style={{ width: '50px', height: '50px' }} alt="" onClick={() => handleNotification(1)} />
                    ) }
                    {/* <img src={Like} style={{ width: '50px', height: '50px' }} alt="" /> */}
                    <img src={Pic} style={{ width: '50px', height: '50px' }} alt="" onClick={() => handleNotification(2)} />
                    <img src={Share} style={{ width: '50px', height: '50px' }} alt="" onClick={() => handleNotification(3)} />
                    <img src={Info} style={{ width: '50px', height: '50px' }} alt="" />
                </div>
            </div>
        </>
    )
}

export default Cardd