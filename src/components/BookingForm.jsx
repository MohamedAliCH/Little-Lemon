import React, { useState, useEffect } from "react";

const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  // When the date changes, fetch new times from the API
  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(e.target.value);
    setTime("");
    dispatch({ type: "SET_TIMES", payload: selectedDate });
  };

  // Validate all fields
  const validate = () => {
    const newErrors = {};
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    if (guests < 1 || guests > 10)
      newErrors.guests = "Guests must be between 1 and 10";
    if (!occasion) newErrors.occasion = "Occasion is required";

    setErrors(newErrors);
    setFormValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    validate();
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (formValid) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        aria-invalid={!!errors.date}
        aria-describedby={errors.date ? "res-date-error" : undefined}
      />
      {errors.date && (
        <span id="res-date-error" role="alert" style={{ color: "red", fontSize: "12px" }}>
          {errors.date}
        </span>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-invalid={!!errors.time}
        aria-describedby={errors.time ? "res-time-error" : undefined}
      >
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {errors.time && (
        <span id="res-time-error" role="alert" style={{ color: "red", fontSize: "12px" }}>
          {errors.time}
        </span>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        min="1"
        max="10"
        required
        aria-invalid={!!errors.guests}
        aria-describedby={errors.guests ? "guests-error" : undefined}
      />
      {errors.guests && (
        <span id="guests-error" role="alert" style={{ color: "red", fontSize: "12px" }}>
          {errors.guests}
        </span>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-invalid={!!errors.occasion}
        aria-describedby={errors.occasion ? "occasion-error" : undefined}
      >
        <option value="">Select</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {errors.occasion && (
        <span id="occasion-error" role="alert" style={{ color: "red", fontSize: "12px" }}>
          {errors.occasion}
        </span>
      )}

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!formValid}
        style={{
          backgroundColor: formValid ? "#495E57" : "#ccc",
          color: "#fff",
          cursor: formValid ? "pointer" : "not-allowed",
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "4px",
        }}
      />
    </form>
  );
};

export default BookingForm;
