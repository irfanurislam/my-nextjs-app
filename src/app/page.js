import Counter from "@/components/Counter/Counter";
import Link from "next/link";
import React from "react";

const Homepage = async () => {
  // just practice not only proffesionl mode thiss
  const res = await fetch("http://localhost:5000/shoes", {
    next: { revalidate: 30 },
  });
  const shoes = await res.json();
  // console.log(shoes);
  return (
    <div className="p-5">
      <div className="flex items-center justify-between gap-3">
        {shoes.slice(0, 3).map((shoe) => (
          <>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {shoe.title}
                  <div className="badge badge-secondary">{shoe.price}</div>
                </h2>
                <p>{shoe.description}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`allShoes/${shoe.id}`}
                    className="btn btn-outline btn-primary"
                  >
                    View
                  </Link>
                  <button className="btn btn-outline btn-primary">
                    delete
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <Link href="/allShoes" className="flex items-center justify-center mt-5">
        <button className="btn btn-info">See more</button>
      </Link>
    </div>
  );
};

export default Homepage;
