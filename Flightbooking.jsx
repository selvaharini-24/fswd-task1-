import { useState, useEffect } from "react";

function Flightbooking() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [airline, setAirline] = useState("");
  const [seat, setSeat] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(0);

  // Base prices per seat class
  const seatPrices = {
    Economy: 3000,
    Business: 6000,
    "First Class": 10000,
  };

  // Date multiplier (example logic)
  const getDateMultiplier = (selectedDate) => {
    if (!selectedDate) return 1;

    const travelDate = new Date(selectedDate);
    const today = new Date();
    const diffDays =
      (travelDate - today) / (1000 * 60 * 60 * 24);

    if (diffDays <= 3) return 1.5;     // last-minute
    if (diffDays <= 7) return 1.2;     // within a week
    return 1;                          // normal
  };

  useEffect(() => {
    if (seat && date) {
      const basePrice = seatPrices[seat];
      const multiplier = getDateMultiplier(date);
      setPrice(Math.round(basePrice * multiplier));
    } else {
      setPrice(0);
    }
  }, [seat, date]);

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>Flight Booking</h2>

      <input
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      /><br /><br />

      <input
        placeholder="Destination"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      /><br /><br />

      <select value={airline} onChange={(e) => setAirline(e.target.value)}>
        <option value="">Select Airline</option>
        <option>IndiGo</option>
        <option>Air India</option>
        <option>Vistara</option>
        <option>SpiceJet</option>
      </select><br /><br />

      <select value={seat} onChange={(e) => setSeat(e.target.value)}>
        <option value="">Select Seat Class</option>
        <option>Economy</option>
        <option>Business</option>
        <option>First Class</option>
      </select><br /><br />

      <label>Travel Date:</label><br />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      /><br /><br />

      {price > 0 && (
        <h3>Total Price: ₹{price}</h3>
      )}

      <button
        disabled={!from || !to || !airline || !seat || !date}
        onClick={() =>
          alert(
            `Flight booked!\nFrom: ${from}\nTo: ${to}\nAirline: ${airline}\nSeat: ${seat}\nDate: ${date}\nPrice: ₹${price}`
          )
        }
      >
        Book Flight
      </button>
    </div>
  );
}

export default Flightbooking;

