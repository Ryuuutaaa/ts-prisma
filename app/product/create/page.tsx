import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Create product</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="" className="blok text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="" className="blok text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            step="0.01"
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="" className="blok text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="" className="blok text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="" className="blok text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Crate Product
        </button>
      </form>
    </div>
  );
};

export default page;
