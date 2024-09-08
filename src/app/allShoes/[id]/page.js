import React from "react";

// Function to fetch the shoe by its ID from the server
const fetchShoeById = async (id) => {
  const res = await fetch(`http://localhost:5000/shoes/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch the shoe data");
  }
  return res.json();
};

// The dynamic page component for showing individual shoe details
const SingleShoePage = async ({ params }) => {
  const { id } = params; // Extract the dynamic ID from the URL
  // Convert the ID from string to number
  const shoe = await fetchShoeById(id); // Fetch shoe data
  console.log(shoe);
  return (
    <div className="p-5">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt={shoe.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{shoe.title}</h2>
          <p>{shoe.description}</p>
          <p className="badge badge-secondary">${shoe.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShoePage;
