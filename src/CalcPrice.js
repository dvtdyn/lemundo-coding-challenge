export default function CalcPrice(quantity) {
  const price = 19.95
  const discPrice = price * 0.9

  const totalPrice =
    quantity >= 5
      ? quantity * discPrice * 0.7
      : quantity >= 3
      ? quantity * discPrice * 0.8
      : quantity * discPrice

  return totalPrice.toFixed(2)
}
