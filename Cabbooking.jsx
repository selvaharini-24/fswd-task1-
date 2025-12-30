import React, { useState } from "react";

function CabBooking() {
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [cabType, setCabType] = useState("");
  const [fare, setFare] = useState(null);

  const calculateFare = () => {
    if (!name || !pickup || !drop || !cabType) {
      alert("Please fill all details");
      return;
    }

    let pricePerKm = 0;

    if (cabType === "Mini") pricePerKm = 10;
    else if (cabType === "Sedan") pricePerKm = 15;
    else if (cabType === "SUV") pricePerKm = 20;

    const distance = 10; // fixed distance for simplicity
    const totalFare = distance * pricePerKm;

    setFare(totalFare);

    alert(
      "Cab Booked Successfully!\n\n" +
      "Name: " + name + "\n" +
      "Pickup: " + pickup + "\n" +
      "Drop: " + drop + "\n" +
      "Cab Type: " + cabType + "\n" +
      "Distance: " + distance + " km\n" +
      "Fare: ₹" + totalFare
    );
  };

  return (
    <div>
      <h2>Online Cab Booking</h2>

      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Drop Location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />
      <br /><br />

      <select
        value={cabType}
        onChange={(e) => setCabType(e.target.value)}
      >
        <option value="">Select Cab Type</option>
        <option value="Mini">Mini</option>
        <option value="Sedan">Sedan</option>
        <option value="SUV">SUV</option>
      </select>
      <br /><br />

      <button onClick={calculateFare}>Book Cab</button>

      {fare !== null && <h3>Total Fare: ₹{fare}</h3>}
    </div>
  );
}

export default CabBooking;
