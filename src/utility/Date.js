export const formatDate = (date) =>
  new Date(date).toLocaleString("en-GB", {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
  });
