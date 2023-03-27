const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "NTD",
  style: "currency",
});

function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}

export { formatCurrency };
