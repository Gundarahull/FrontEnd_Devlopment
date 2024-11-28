/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"], //allowing all files...incase of particular we can include like folder name, file name liks that
  theme: {
    //on;y this will valid other will no applicable in the code
    // screens:{
    //   sm: '480px',
    // },
    extend: {
      screens: {
        sm: "480px",
        ra: "789px",
      },
      //customize what do we want
      width:{
        "13":"56px"
      },
      height:{
        "13":"56px"
      },
      margin:{
        "13":"56px"
      },
      padding:{
        "13":"56px",
        '8':"68px"
      },
      //spacing will include all things like w,p,m,h
      spacing:{
        "13":"56px",
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
