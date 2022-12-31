import { useState } from "react";
import CartItem from "./CartItem";

const initData = [
  { id: 1, label: "noodles", price: 90, quantity: 1 },
  { id: 2, label: "biryani", price: 180, quantity: 3 },
  { id: 3, label: "chips", price: 70, quantity: 5 }
];

const CartContainer = () => {
  const [data, setData] = useState(initData);

  const handleDataChange = (id, value) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + value } : item
    );
    setData(updatedData);
  };

  console.log(data);
  return (
    <div style={{ background: "pink" }}>
      {data.map((item) => (
        <CartItem key={item.id} {...item} handleDataChange={handleDataChange} />
      ))}
      {/* <Total/> */}
    </div>
  );
};

export default CartContainer;
