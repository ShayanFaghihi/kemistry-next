export default function getDate(date) {
  const monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = monthsArr[formattedDate.getMonth()];
  const day = formattedDate.getDate();

  return `${month} ${day}, ${year}`;
}
