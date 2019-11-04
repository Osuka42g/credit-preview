import { twoDecimals } from './number';

export const format = (money) => {
  const formatted = new Intl.NumberFormat('es-MX',
    { style: 'currency', currency: 'MXN' }
  ).format(money);

  return formatted;
}

export const createMonthlyNoInterest = ({ periods, credit, }) => {
  return new Array(periods)
    .fill(true)
    .map((e, i) => {
      const monthFee = twoDecimals(credit / periods);
      const period = i;
      const fee = monthFee;
      const left = twoDecimals(credit - (monthFee * i));
      const paid = twoDecimals(monthFee * i);

      return {
        monthFee,
        period,
        fee,
        left,
        paid,
      };
    })
};
