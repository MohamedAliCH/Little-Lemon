/* global fetchAPI, submitAPI */
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      // action.payload is a Date object
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

const BookingPage = () => {
  const navigate = useNavigate();
  const today = new Date();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    () => fetchAPI(today)
  );

  const submitForm = (formData) => {
    const ok = submitAPI(formData);
    if (ok) {
      alert("Reservation successful! 🎉");
      // Navigate back to home or to a confirmation page
      navigate("/");
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <main className="booking-page">
      <h2>Reserve a Table</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
};

export default BookingPage;
