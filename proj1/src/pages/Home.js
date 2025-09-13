import React, { useEffect, useState } from "react";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem("cars")) || [];
    setCars(savedCars);
  }, []);

  const readyCars = cars.filter((c) => c.status === "جاهزة").length;
  const maintenanceCars = cars.filter((c) => c.status === "صيانة").length;

  return (
    <div style={{ padding: "20px" }}>
      <h2>🏠 الصفحة الرئيسية</h2>
      <p>إجمالي السيارات: {cars.length}</p>
      <p>🚗 سيارات جاهزة: {readyCars}</p>
      <p>🔧 سيارات تحت الصيانة: {maintenanceCars}</p>
    </div>
  );
}

export default Home;
