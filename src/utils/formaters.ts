export const formatNumber = (number: number): string => {
  const [integerPart, decimalPart = ''] = number.toString().split('.');
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedIntegerPart + (decimalPart ? `.${decimalPart[0]}` : '');
};
