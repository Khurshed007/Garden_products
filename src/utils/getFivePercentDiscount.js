export const getFivePercentDiscount = (totalSum) => {
  const fivePercent = (totalSum * 5) / 100;
  return totalSum - fivePercent;
};
