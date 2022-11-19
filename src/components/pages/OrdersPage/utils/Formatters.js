export function formatDate(dateString) {
  const formatter = Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  const date = new Date(dateString);
  return formatter.format(date);
}

export function formatAmount(amount, currency) {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currency,

    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}
