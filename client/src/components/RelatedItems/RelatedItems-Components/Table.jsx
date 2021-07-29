import React from "react";

const Table = ({ currentProduct, comparedProduct }) => {
  return (
    <table className="related-table">
      <thead>
        {console.log(currentProduct)}
        <tr>
          <th>{currentProduct.name}</th>
          <th></th>
          <th>{comparedProduct.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{currentProduct.category}</td>
          <td>Category</td>
          <td>{comparedProduct.category}</td>
        </tr>
        <tr>
          <td>${currentProduct.default_price}</td>
          <td>Price</td>
          <td>${comparedProduct.default_price}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
