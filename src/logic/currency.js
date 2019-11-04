
export const format = (money) => {
  const formatted = new Intl.NumberFormat('es-MX',
    { style: 'currency', currency: 'MXN' }
  ).format(money);

  return formatted;
}

export const createMonthlyNoInterest = ({ periods, credit, }) => {
  const monthly = [];

  for(let i = 0; i <= periods; i++) {
    const monthFee = (credit / periods).toFixed(2);

    const currentPeriod = {
      period: i,
      fee: monthFee,
      left: credit - (monthFee * i),
      soFar: monthFee * i,
    }
    monthly.push(currentPeriod);
  }

  return monthly;
}
