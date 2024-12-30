import React from "react";

const FormRegister = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Email", formData.get("email"));
    console.log("Password", formData.get("password"));
  };
  return (
    <div>
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="border" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" className="border" />
      </form>
    </div>
  );
};

export default FormRegister;
