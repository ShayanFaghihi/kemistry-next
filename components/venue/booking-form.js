"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import classes from "./booking-form.module.css";

const initialData = {
  name: "",
  phone: "",
  email: "",
  bookingDate: "",
  eventType: "",
  eventSize: "",
  message: "",
};

const initialState = {
  values: initialData,
};

export default function BookingForm() {
  const [formData, setFormData] = useState(initialState);
  const [touchedInputs, setTouchedInputs] = useState([]);

  const { values } = formData;

  const blurHandler = ({ target }) => {
    setTouchedInputs((prevState) => [...prevState, target.name]);
  };

  const changeHandler = ({ target }) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        values: {
          ...prevState.values,
          [target.name]: target.value,
        },
      };
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    let response = "";

    if (
      values.email &&
      values.eventType &&
      values.eventSize &&
      values.bookingDate &&
      values.phone
    ) {
      response = fetch("/api/venue-reserve/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    toast.promise(
      response,
      {
        loading: "Sending your request....",
        success: () => {
          setFormData(initialState);
          setTouchedInputs([]);
          return `Thanks ${values.name}, Your request was successfully sent! We will be in touch.`;
        },
        error: (err) => `This just happened: ${err.toString()}`,
      },
      {
        position: "bottom-center",

        style: {
          minWidth: "250px",
        },
        success: {
          duration: 5000,
        },
      }
    );
  };

  return (
    <div className={classes["form-container"]}>
      <form onSubmit={submitFormHandler}>
        <div className={classes.row}>
          <div className={classes["form-group"]}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              name="name"
              value={values.name}
              onChange={changeHandler}
              onBlur={blurHandler}
            />
          </div>
          <div
            className={
              touchedInputs.includes("phone") && !values.phone
                ? `${classes["form-group"]} ${classes.invalid}`
                : classes["form-group"]
            }
          >
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              id="phone"
              name="phone"
              value={values.phone}
              required
              onChange={changeHandler}
              onBlur={blurHandler}
            />
          </div>
        </div>
        <div
          className={
            touchedInputs.includes("email") && !values.email
              ? `${classes["form-group"]} ${classes.invalid}`
              : classes["form-group"]
          }
        >
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            id="email"
            name="email"
            value={values.email}
            onBlur={blurHandler}
            onChange={changeHandler}
            className={
              touchedInputs.includes("email") && !values.email
                ? classes.focus
                : null
            }
          />
        </div>

        <div
          className={
            touchedInputs.includes("eventType") && !values.eventType
              ? `${classes["form-group"]} ${classes.invalid}`
              : classes["form-group"]
          }
        >
          <label htmlFor="eventType">Venue Event Type *</label>
          <select
            id="eventType"
            name="eventType"
            value={values.eventType}
            required
            onBlur={blurHandler}
            onChange={changeHandler}
          >
            <option value="">Select one...</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Wedding Reception">Wedding Reception</option>
            <option value="General Event">General</option>
            <option value="Other Event">Other</option>
          </select>
        </div>

        <div className={classes.row}>
          <div
            className={
              touchedInputs.includes("bookingDate") && !values.bookingDate
                ? `${classes["form-group"]} ${classes.invalid}`
                : classes["form-group"]
            }
          >
            <label htmlFor="bookingDate" className={classes["date-label"]}>
              Date of Booking *
            </label>
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              value={values.bookingDate}
              required
              onChange={changeHandler}
              onBlur={blurHandler}
            />
          </div>
          <div
            className={
              touchedInputs.includes("partySize") && !values.partySize
                ? `${classes["form-group"]} ${classes.invalid}`
                : classes["form-group"]
            }
          >
            <label htmlFor="eventSize">Event Size *</label>
            <input
              type="number"
              min={1}
              step={1}
              placeholder="How many guests do you have?"
              id="eventSize"
              name="eventSize"
              value={values.eventSize}
              required
              onChange={changeHandler}
              onBlur={blurHandler}
            />
          </div>
        </div>

        <div
          className={
            touchedInputs.includes("message") && !values?.message
              ? `${classes["form-group"]} ${classes.invalid}`
              : classes["form-group"]
          }
        >
          <label htmlFor="message">Message</label>
          <textarea
            rows={5}
            placeholder="Your message..."
            id="message"
            name="message"
            value={values?.message}
            onBlur={blurHandler}
            onChange={changeHandler}
            className={
              touchedInputs.includes("message") && !values?.message
                ? classes.focus
                : null
            }
          />
        </div>

        <div className={classes["form-submit"]}>
          <button
            type="submit"
            disabled={
              !values.email ||
              !values.phone ||
              !values.bookingDate ||
              !values.eventSize ||
              !values.eventType
            }
          >
            Submit
          </button>
        </div>
        <Toaster />
      </form>
    </div>
  );
}
