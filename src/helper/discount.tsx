/* eslint-disable @typescript-eslint/no-explicit-any */
const discountedPrice = (originalPrice: any, discountPercentage: any) => {
  if (discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice.toFixed(2);
  }
  return;
};
export default discountedPrice;
