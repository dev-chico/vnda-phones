function formatCurrency(value) {
  const formCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return formCurrency.format(value);
}

module.exports = { formatCurrency };
