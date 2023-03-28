import React from "react";
import { useShoppingCart } from "../Context/ShoppingContext";
import { Card, Button } from "react-bootstrap";

function StoreItems(props) {
  const { id, name, price, imgUrl } = props.data;
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFormCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-5 text-muted">{price}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseQuantity(id)}>
              加入購物車
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div className="btn-group">
                <Button onClick={() => decreaseQuantity(id)}>-</Button>
                <div>
                  <span className="fs-5">有 {quantity} 個</span>
                </div>
                <Button onClick={() => increaseQuantity(id)}>+</Button>
              </div>
              <div className="delete-btn">
                <Button
                  onClick={() => removeFormCart(id)}
                  variant="danger"
                  size="sm"
                  className="w-100"
                >
                  刪除
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItems;
