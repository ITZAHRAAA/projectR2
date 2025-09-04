import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function addItem() {
    if (!name || !price) return;
    if (editIndex === null && items.some((item) => item.name === name)) {
      alert("This product already exists!");
      return;
    }
    const newItem = { name, price: Number(price) };
    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = newItem;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, newItem]);
    }
    setName("");
    setPrice("");
  }
  function deleteItem(index) {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }
  function getColor(price) {
    if (price < 20) return "green";
    if (price <= 50) return "orange";
    return "red";
  }
  function editItem(index) {
    setName(items[index].name);
    setPrice(items[index].price);
    setEditIndex(index);
  }
function printInvoice() {
  alert(" Your invoice is ready! Thank you for shopping with us");
  window.print();
}
  return (
    <div className="container">
      <h1> Shopping List</h1>
      <h3>
        Total: ${items.reduce((total, item) => total + item.price, 0)}
      </h3>

      <div className="form">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}/>
        <button onClick={addItem}>
          {editIndex !== null ? "Update Item" : "Add Item"}
        </button>
      </div>
      <ul>
        {items.length === 0 && <p>No items yet</p>}
        {items.map((item, index) => (
          <li key={index}>
            <span style={{ color: getColor(item.price) }}>
              {item.name} - ${item.price}
            </span>
            <div>
              <button onClick={() => editItem(index)}>Edit</button>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <button className="print-btn" onClick={printInvoice}>
          Print Invoice
        </button>
      )}
    </div>
  );
}
export default App;