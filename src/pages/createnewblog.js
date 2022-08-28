import React from "react";
import { useFormik } from "formik";
import "./style.css";

const Create = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      
    },
  });
  return (
    <div className="blogform">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button style={{margin:"2rem"}} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
