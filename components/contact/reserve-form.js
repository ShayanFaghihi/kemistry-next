"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import classes from "./reserve-form.module.css";

const initialData = {
  name: "",
  phone: "",
  email: "",
  bookingDate: "",
  partySize: "",
};

const initialState = {
  values: initialData,
};

export default function ReserveForm() {
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
    if (values.email && values.partySize && values.bookingDate) {
      const response = fetch("/api/table-reserve/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.promise(
        response,
        {
          loading: "Sending your request....",
          success: () => {
            setFormData(initialState);
            setTouchedInputs([]);
            return `Thanks ${values.name}, Your request was successfully sent! We'll be in touch soon.`;
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
    }
  };

  return (
    <div className={classes["form-container"]}>
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
          <label>Date of Booking *</label>
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
      </form>
    </div>
  );
}
