import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Create product</h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor=""
            className="blok text-sm font-medium text-gray-700"
          ></label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default page;
