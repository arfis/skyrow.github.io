export function getTotalBalance(balance) {
  const {assetSymbols, assets} = balance;
  const totalBalances = [];

  for (const symbol of assetSymbols) {
    const {unspent} = assets[symbol];

    const sumBalance = sumBalances(unspent);
    totalBalances.push({symbol, sumBalance});
  }

  return totalBalances;
}

function sumBalances(transactions) {
  let sum = 0;
  for (const transaction of transactions) {
    const {value} = transaction;

    sum += Number(value.c) * normalizeNumber(value.c[0]) * Math.pow(10, value.e);
  }

  return sum;
}

function normalizeNumber(number) {
  return Math.pow(10, - String(number).length + 1)
}
