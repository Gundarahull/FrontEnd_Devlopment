import React from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  const data = useLoaderData();
  return (
    <div>
      GitHub
      <p>{data.followers}</p>
      <p>{data.login}</p>
    </div>
  );
};

export default GitHub;

export const GitHubProfileInfo = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    ).then((data) => data.json());
    console.log("data in the profile>>>>.",response);
    
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
