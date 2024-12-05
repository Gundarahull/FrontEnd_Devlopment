import React from "react";
import { useForm } from "react-hook-form";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";

function App() {
  const {
    register,
    handleSubmit,
    setError, // for manual Error Types
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    setTimeout(() => {
      console.log("Form Submitted Data:", data);
      if (data.username === "rahul") {
        setError("exist", {
          type: "manual",
          message: "Username is already taken",
        });
      }
    }, 3000);
  };

  return (
    <>
      <div
        style={{
          border: "2px solid white",
          padding: "10px",
          margin: "10px",
          paddingLeft: "30px",
        }}
      >
        <h1>React Hook Form Example</h1>
        {isSubmitting && <p>It is Submitting please wait</p>}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username Field */}
          <input
            defaultValue="test"
            placeholder="Enter the Username"
            {...register("username", {
              minLength: {
                value: 5,
                message: "The min length should be 5", // Validation message
              },
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}
          <br />
          <input
            defaultValue="Password"
            placeholder="Enter the Password"
            {...register(
              "password",
              {
                minLength: { value: 5, message: "The min length should be 5" },
              },
              {
                required: { value: true, message: "This is Required" },
              }
            )}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <br />
          <button disabled={isSubmitting} type="submit">
            Submit the details
          </button>
          {errors.exist && <p>{errors.exist.message}</p>}
        </form>
      </div>
      <h1>React Router....</h1>
      <div
        style={{
          border: "2px solid white",
          padding: "10px",
          margin: "10px",
          paddingLeft: "30px",
        }}
      >
        <Header />
        <Outlet />

        <Footer />
      </div>
    </>
        
  );
}

export default App;
