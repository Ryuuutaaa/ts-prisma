"use client";

import React from "react";

const FormLogin = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Email", email);
    console.log("Password", password);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border p-2 mx-auto mt-8"
      >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="border" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" className="border" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default FormLogin;
