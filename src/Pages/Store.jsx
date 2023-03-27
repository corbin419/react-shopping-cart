import React from "react";
import StoreItems from "../Components/StoreItems";
import storeItems from "../Data/item.json";

function Store() {
  return (
    <div className="Store">
      <h1>Store</h1>
      <div className="products">
        {storeItems.map((items) => (
          <StoreItems data={items} key={items.id} />
        ))}
      </div>
    </div>
  );
}

export default Store;
