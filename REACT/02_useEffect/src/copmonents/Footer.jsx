import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    alert("In the Footer");
  });
  useEffect(() => {
    alert("In the Footer with Empty Array");
  }, []);
  return <div>Footer</div>;
};

export default Footer;
