export const formatCurrency = (number, decimalPlaces = 2) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimalPlaces,
  });
  return formatter.format(number);
};
