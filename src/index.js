const { getTotalWithTaxes } = require('./cart');

const cart = {
  items: [
    {
      img: '/img/apple_640x426.jpg',
      name: 'Apple',
      price: '0.26',
      count: 2,
      tax_rate: 0.2,
    },
    {
      img: '/img/orange_640x426.jpg',
      name: 'Orange',
      price: '0.42',
      count: 1,
      tax_rate: 0.2,
    },
    {
      img: '/img/pear_640x426.jpg',
      name: 'Pear',
      price: '0.33',
      count: 4,
      tax_rate: 0.2,
    },
  ],
};

const total = getTotalWithTaxes(cart);
console.log(`Total TTC: ${total}`);

// TODO test expected: "Total TTC: 2,68 €"
