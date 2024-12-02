import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    alert("In the Navbar with Empty Array");
  }, []);
  useEffect(() => {
    alert("In the Navbar");
  });
  return <div>Navbar</div>;
};

export default Navbar;
