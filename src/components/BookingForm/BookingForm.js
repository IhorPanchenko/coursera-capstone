import { useState } from "react";
import "./BookingForm.scss";

const BookingForm = ({ availableTimes }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("occasion");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="container">
      <h2>Reserve Your Table</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="resDate">Choose date</label>
        <input
          type="date"
          id="resDate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="resTime">Choose time</label>
        <select
          id="resTime "
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((availableTime, index) => (
            <option key={index} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make a reservation" />
      </form>
    </section>
  );
};

export default BookingForm;
