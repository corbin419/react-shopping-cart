import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingContext";
import storeItems from "../Data/item.json";
import { formatCurrency } from "../utilities/formatcurrency";


function CartItem({ id, quantity }) {
  const { removeFormCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "150px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}&nbsp;&nbsp;
          {quantity > 1 && (
            <span className="text-mute" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFormCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}

export default CartItem;
