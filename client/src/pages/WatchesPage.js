import React, { useEffect, useState } from 'react';
import Navbarr from '../components/Navbarr'
import Cardd from '../components/Cardd'
import { posts } from '../data'
import { io } from 'socket.io-client'

let WatchesPage=()=>{
    const [username, setUsername] = useState("")
    const [user, setUser] = useState("")
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        setSocket(io("http://localhost:5000"))

        // console.log(socket.on("firstEvent", (msg) => {
        //     console.log(msg)
        // }))
    },[])

    useEffect(() => {
        socket?.emit("newUser", user)
    },[socket, user])

    return(
        <>
        {user ? (
            <>
            <Navbarr socket={socket} />
            {posts.map((post) => (
                <Cardd key={post.id} post={post} socket={socket} user={user} />
            ))}
            <span className="username">{user}</span>
            </>
        ) : (
             <div className="container">
             <div className='login'>
                 <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                 <button onClick={() => setUser(username)} >Login</button>
             </div>
         </div>
        )}
       
        </>
    )
}
export default WatchesPage;