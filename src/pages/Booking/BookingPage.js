import { useState } from "react";
import Header from "../../components/Header/Header";
import BookingForm from "../../components/BookingForm/BookingForm";
import Footer from "../../components/Footer/Footer";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  function updateTimes(e) {
    setAvailableTimes(e.target.value);
  }

  function initializeTimes() {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  return (
    <div>
      <Header />
      <BookingForm availableTimes={availableTimes} />
      <Footer />
    </div>
  );
};

export default BookingPage;
