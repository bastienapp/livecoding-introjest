const { formatPrice, totalItemTTC, getTotalWithTaxes } = require('./cart');

test('formatPrice', () => {
  expect(formatPrice(3.5)).toBe('3,50 €');
  expect(formatPrice(3)).toBe('3,00 €');
});

const items = {
  items: [
    {
      img: '/img/apple_640x426.jpg',
      name: 'Apple',
      price: 0.26, // 0,93
      count: 3,
      tax_rate: 0.2,
    },
    {
      img: '/img/pear_640x426.jpg',
      name: 'Pear',
      price: 0.33,
      count: 2,
      tax_rate: 0.2, // 0,8
    },
  ],
};
const item1 = {
  img: '/img/pear_640x426.jpg',
  name: 'Pear',
  price: 0.33,
  count: 2,
  tax_rate: 0.2, // 0,8
};
const item2 = {
  img: '/img/apple_640x426.jpg',
  name: 'Apple',
  price: 0.26, // 0,93
  count: 3,
  tax_rate: 0.2,
};

test('totalItemTTC', () => {
  expect(totalItemTTC(item1)).toBe(0.8);
  expect(totalItemTTC(item2)).toBe(0.93);
});

test('getTotalWithTaxes', () => {
  expect(getTotalWithTaxes(items)).toBe('1,73 €');
});
