export const EmailTemplate = ({ name, phone, email, message }) => (
  <div>
    <h1>Hello admin,</h1>
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
