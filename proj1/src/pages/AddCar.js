import React, { useState } from "react";

function AddCar() {
  const [car, setCar] = useState({
    owner: "",
    model: "",
    year: "",
    status: "جاهزة",
    lastService: "",
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedCars = JSON.parse(localStorage.getItem("cars")) || [];
    savedCars.push(car);
    localStorage.setItem("cars", JSON.stringify(savedCars));
    alert("✅ تم إضافة السيارة بنجاح!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>➕ إضافة سيارة</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="owner"
          placeholder="اسم المالك"
          value={car.owner}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="model"
          placeholder="الموديل"
          value={car.model}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="year"
          placeholder="سنة الصنع"
          value={car.year}
          onChange={handleChange}
          required
        />
        <br />
        <select name="status" value={car.status} onChange={handleChange}>
          <option value="جاهزة">جاهزة</option>
          <option value="صيانة">صيانة</option>
        </select>
        <br />
        <input
          type="date"
          name="lastService"
          value={car.lastService}
          onChange={handleChange}
        />
        <br />
        <button type="submit">حفظ</button>
      </form>
    </div>
  );
}

export default AddCar;