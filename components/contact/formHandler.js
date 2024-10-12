"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import classes from "./formHandler.module.css";

const initialData = {
  name: "",
  phone: "",
  email: "",
  message: "",
  bookingDate: "",
  partySize: "",
};

const initialState = {
  values: initialData,
};

export default function Form({ formType }) {
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
      formType === "contact" &&
      values.email &&
      values.message &&
      values.phone
    ) {
      response = fetch("/api/message/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (
      formType === "reserve" &&
      values.email &&
      values.partySize &&
      values.bookingDate
    ) {
      response = fetch("/api/table-reserve/", {
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
        loading: "Sending your message....",
        success: () => {
          setFormData(initialState);
          setTouchedInputs([]);
          return `Thanks ${values.name}, Your request was successfully sent!`;
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
      {formType === "contact" ? (
        <form onSubmit={submitFormHandler}>
          <div className={classes["form-group"]}>
            <input
              type="text"
              placeholder="NAME"
              id="name"
              name="name"
              value={values?.name}
              onChange={changeHandler}
              onBlur={blurHandler}
            />
          </div>
          <div
            className={
              touchedInputs.includes("phone") && !values?.phone
                ? `${classes["form-group"]} ${classes.invalid}`
                : classes["form-group"]
            }
          >
            <input
              type="tel"
              placeholder="PHONE Number *"
              id="phone"
              name="phone"
              value={values?.phone}
              required
              onChange={changeHandler}
              onBlur={blurHandler}
            />
          </div>
          <div
            className={
              touchedInputs.includes("email") && !values?.email
                ? `${classes["form-group"]} ${classes.invalid}`
                : classes["form-group"]
            }
          >
            <input
              type="email"
              placeholder="EMAIL *"
              required
              id="email"
              name="email"
              value={values?.email}
              onBlur={blurHandler}
              onChange={changeHandler}
              className={
                touchedInputs.includes("email") && !values?.email
                  ? classes.focus
                  : null
              }
            />
          </div>
          <div
            className={
              touchedInputs.includes("message") && !values?.message
                ? `${classes["form-group"]} ${classes.invalid}`
                : classes["form-group"]
            }
          >
            <textarea
              rows={5}
              placeholder="MESSAGE *"
              required
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
          <button
            type="submit"
            disabled={!values?.email || !values?.message || !values?.phone}
          >
            Submit
          </button>
        </form>
      ) : (
        <form onSubmit={submitFormHandler}>
          <div className={classes["form-group"]}>
            <input
              type="text"
              placeholder="NAME"
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
            <input
              type="tel"
              placeholder="PHONE Number *"
              id="phone"
              name="phone"
              value={values.phone}
              required
              onChange={changeHandler}
              onBlur={blurHandler}
            />
          </div>
          <div
            className={
              touchedInputs.includes("email") && !values.email
                ? `${classes["form-group"]} ${classes.invalid}`
                : classes["form-group"]
            }
          >
            <input
              type="email"
              placeholder="EMAIL *"
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
              touchedInputs.includes("bookingDate") && !values.bookingDate
                ? `${classes["form-group"]} ${classes.invalid}`
                : classes["form-group"]
            }
          >
            <label className={classes["date-label"]}>Date of Booking *</label>
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
            <input
              type="number"
              min={1}
              step={1}
              placeholder="Party Size *"
              id="partySize"
              name="partySize"
              value={values.partySize}
              required
              onChange={changeHandler}
              onBlur={blurHandler}
            />
          </div>
          <button
            type="submit"
            disabled={
              !values.email ||
              !values.phone ||
              !values.bookingDate ||
              !values.partySize
            }
          >
            Submit
          </button>
          <Toaster />
        </form>
      )}
    </div>
  );
}
