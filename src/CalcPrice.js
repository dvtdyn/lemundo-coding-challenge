export default function CalcPrice(quantity) {
  const priceInCt = 1995
  const discPriceInCt = Math.round(priceInCt * 0.9)

  const totalPriceInCt =
    quantity >= 5
      ? Math.round(quantity * discPriceInCt * 0.7)
      : quantity >= 3
      ? Math.round(quantity * discPriceInCt * 0.8)
      : Math.round(quantity * discPriceInCt)
  const totalPiceInEUR = totalPriceInCt / 100
  const formatTotalPrice = totalPiceInEUR.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  })

  return formatTotalPrice
}
