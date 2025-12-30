import { useState } from "react";

function HotelReservation() {
  const [name, setName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [nights, setNights] = useState(1);
  const [food, setFood] = useState(false);
  const [total, setTotal] = useState(0);

  const roomPrices = {
    Single: 2000,
    Double: 3500,
    Deluxe: 5000,
  };

  const calculatePrice = () => {
    if (!name || !roomType || nights <= 0) {
      alert("Please fill all details correctly");
      return;
    }

    let price = roomPrices[roomType] * nights;
    if (food) price += 1000;

    setTotal(price);
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>Hotel Reservation System</h2>

      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <select
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
      >
        <option value="">Select Room Type</option>
        <option value="Single">Single Room</option>
        <option value="Double">Double Room</option>
        <option value="Deluxe">Deluxe Room</option>
      </select>
      <br /><br />

      <input
        type="number"
        min="1"
        value={nights}
        onChange={(e) => setNights(e.target.value)}
      />
      <br /><br />

      <label>
        <input
          type="checkbox"
          checked={food}
          onChange={(e) => setFood(e.target.checked)}
        />
        Food Service (+₹1000)
      </label>
      <br /><br />

      <button onClick={calculatePrice}>Calculate Bill</button>

      {total > 0 && (
        <h3>Total Amount: ₹{total}</h3>
      )}
    </div>
  );
}

export default HotelReservation;
