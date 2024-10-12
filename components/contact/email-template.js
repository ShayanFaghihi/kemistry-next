export const EmailMessageTemplate = ({ name, phone, email, message }) => (
  <div>
    <h1>Hello,</h1>
    <p>There is a message from the website contact form:</p>
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Phone: {phone}</li>
        <li>Email: {email}</li>
        <li>Message: {message}</li>
      </ul>
    </div>
  </div>
);

export const EmailReservationTemplate = ({
  name,
  phone,
  email,
  bookingDate,
  partySize,
}) => (
  <div>
    <h1>Hello,</h1>
    <p>There is a new Table Reservation: </p>
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Phone: {phone}</li>
        <li>Email: {email}</li>
        <li>Date of Booking: {bookingDate}</li>
        <li>Party Size: {partySize}</li>
      </ul>
    </div>
  </div>
);

export const venueReservationTemplate = ({
  name,
  phone,
  email,
  bookingDate,
  eventSize,
  eventType,
}) => (
  <div>
    <h1>Hello,</h1>
    <p>There is a new Venue Rental Request: </p>
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Phone: {phone}</li>
        <li>Email: {email}</li>
        <li>Date of Booking: {bookingDate}</li>
        <li>Event Type: {eventType}</li>
        <li>Event Size: {eventSize}</li>
      </ul>
    </div>
  </div>
);
