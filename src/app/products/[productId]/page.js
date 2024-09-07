import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h2>
        DynamicPage this is
        <span className="text-red-500"> {params.productId}</span>
        <span className="text-red-500"> {searchParams?.productId}</span>
      </h2>
    </div>
  );
};

export default DynamicPage;
