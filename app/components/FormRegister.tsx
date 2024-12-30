"use client";

import React from "react";

const FormRegister = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Email", formData.get("email"));
    console.log("Password", formData.get("password"));
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border p-2 mx-auto mt-8"
      >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="border" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" className="border" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FormRegister;
