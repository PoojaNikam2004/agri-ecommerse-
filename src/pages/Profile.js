import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {

  const [user,setUser] = useState(null);

  useEffect(()=>{

    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/user/profile",{
      headers:{ Authorization:`Bearer ${token}` }
    })
    .then(res=>{
      setUser(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

  },[])

  if(!user) return <h2 style={{textAlign:"center"}}>Loading...</h2>

  return(

    <div className="profile-container">

      <h1>My Profile</h1>

      <div className="profile-card">

        <div className="profile-item">
          <span>Name:</span> {user.name}
        </div>

        <div className="profile-item">
          <span>Email:</span> {user.email}
        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>

    </div>

  )
}

export default Profile