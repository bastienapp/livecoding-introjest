// TODO TTD with Jest
function getTotalWithTaxes(cart) {
  const total = cart.items
    .map((item) => {
      return totalItemTTC(item);
    })
    .reduce((acc, value) => {
      return acc + value;
    });

  return formatPrice(total);
}

function totalItemTTC(item) {
  const priceTTC = item.price * (1 + item.tax_rate);
  return parseFloat((priceTTC.toFixed(2) * item.count).toFixed(2));
}

/**
 *
 * @param {number} price
 * @returns {string} formatted price
 */
function formatPrice(price) {
  return `${price.toFixed(2).replace('.', ',')} €`;
}

module.exports = { formatPrice, totalItemTTC, getTotalWithTaxes };
