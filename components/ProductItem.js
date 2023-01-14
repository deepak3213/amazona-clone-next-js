import React from "react";
import Link from "next/link";
const ProductItem = ({ product }) => {
  return (
    <div className="shadow-md border-gray-200 rounded-lg">
      <Link className="p-2" href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <img src={product.image} className="p-2" alt="" />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`} legacyBehavior>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className="mb-2">${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
