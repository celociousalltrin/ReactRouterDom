import React from 'react'
import { UseUserContext } from '../Utilities/Context';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
const {person, logOut} = UseUserContext();
const navigate = useNavigate()

const handleClick = (()=>{
    logOut()
    navigate("/")
})

    return (
    <div>
        <h1>This is Profile Page</h1>
        <h2>User:{person.name}</h2>
        <button onClick={handleClick}>SignOut</button>
    </div>
  )
}

export default Profile;