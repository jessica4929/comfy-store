import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const { total } = meta.pagination;
  //console.log(total);
  const [isGrid, setIsGrid] = useState(true);
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === isGrid
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };
  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {total} product{total > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setIsGrid(true)}
            className={setActiveStyles(true)}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setIsGrid(false)}
            className={setActiveStyles(false)}
          >
            <BsList />
          </button>
        </div>
      </div>

      {/*PRODUCTS*/}
      <div>
        {total === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : isGrid ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
