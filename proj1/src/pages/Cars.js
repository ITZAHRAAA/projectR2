import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem("cars")) || [];
    setCars(savedCars);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 قائمة السيارات</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {cars.length > 0 ? (
          cars.map((car, index) => <CarCard key={index} car={car} />)
        ) : (
          <p>لا توجد سيارات مسجلة.</p>
        )}
      </div>
    </div>
  );
}

export default Cars;