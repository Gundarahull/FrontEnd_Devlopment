import React from "react";
import userContext from "../context/userContext";
import { useContext } from "react";

const UserProfile = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      userProfile
      <h2>{user.username}</h2>
      {/* <h1 className="p-2 m-50 {themOde&&light:dark}"></h1>
      <h1 className={`p-2 m-50 ${themOde ? "light" : "dark"}`}></h1> */}

    </div>
  );
  
};

export default UserProfile;
