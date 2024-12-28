import React from "react";

const DetailBlog = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      DetailBlog
      <p>Detail of blog {params.id}</p>
    </div>
  );
};

export default DetailBlog;
