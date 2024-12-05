import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
    console.log("whats happeming in the useParams",useParams());
    
  const {userId} = useParams();
  return <div>UserProfile-{userId}</div>;
};

export default UserProfile;


