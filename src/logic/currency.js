export const format = (money) => {
  const formatted = new Intl.NumberFormat('es-MX',
    { style: 'currency', currency: 'MXN' }
  ).format(money);

  return formatted;
}
