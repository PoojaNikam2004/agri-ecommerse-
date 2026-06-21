import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("TOKEN =", token);

    axios.get("http://localhost:5000/api/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log("PROFILE DATA =", res.data);
      setUser(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log("PROFILE ERROR =", err.response);
      setLoading(false);
    });

  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!user) {
    return <h2>User Not Found</h2>;
  }

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <hr></hr>
      <h3>Name: {user.name}</h3>
      <br></br>
      <h3>Email: {user.email}</h3>
      <h3>Phone: 8010478153</h3>
    </div>
  );
};

export default Profile;