import React, { useState } from "react";

const orders = [
  { id: "1001", customer: "Alice Johnson", status: "Pending", items: 3, total: "$120.50" },
  { id: "1002", customer: "Bob Smith", status: "Processing", items: 2, total: "$80.75" },
  { id: "1003", customer: "Charlie Brown", status: "Shipped", items: 5, total: "$230.00" },
];

export default function OrderDashboard() {
  const [search, setSearch] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredOrders(
      orders.filter((order) =>
        order.customer.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Order Fulfillment</h2>
      <input
        placeholder="Search by customer name"
        value={search}
        onChange={handleSearch}
        className="mb-4"
      />
   
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Items</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>
                {order.customer}
              </td>
              <td>{order.items}</td>
              <td>{order.total}</td>
              <td>
                {order.status === "Pending" && (
                  <button>test</button>
                )}
                {order.status === "Processing" && (
                  <button>test</button>
                )}
                <button>test</button>
              </td>
            </tr>
          ))}
        </tbody>
      
    </div>
  );
}