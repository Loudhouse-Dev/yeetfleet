const PRODUCT_DATA = [
  {
    id: 1,
    brand: 'adidas',
    cat: 'running',
    name: 'adidas Ultraboost Web DNA',
    price: 190.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-dna-neon.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-dna-neon-small.webp',
  },
  {
    id: 2,
    brand: 'adidas',
    cat: 'running',
    name: 'adidas Ultraboost Web DNA (Blue)',
    price: 180.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-dna.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-dna-small.webp',
  },
  {
    id: 3,
    brand: 'adidas',
    cat: 'lifestyle',
    name: 'adidas Crazy 97',
    price: 130.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-crazy.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-crazy-smallwebp.webp',
  },
  {
    id: 4,
    brand: 'adidas',
    cat: 'basketball',
    name: 'adidas D.O.N. Issue 3',
    price: 120.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-d.o.n-v3.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-d.o.n-v3-small.webp',
  },
  {
    id: 5,
    brand: 'adidas',
    cat: 'basketball',
    name: 'adidas Dame 8',
    price: 120.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-dame-8-yellow-purple.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-dame-8-yellow-purple-small.webp',
  },
  {
    id: 6,
    brand: 'adidas',
    cat: 'basketball',
    name: 'adidas Dame 8 Certified',
    price: 130.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-dame-8.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-dame-8-small.webp',
  },
  {
    id: 7,
    brand: 'adidas',
    cat: 'lifestyle',
    name: 'adidas NMD R1',
    price: 160.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-originals-black-blue.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-originals-black-blue-small.webp',
  },
  {
    id: 8,
    brand: 'adidas',
    cat: 'lifestyle',
    name: 'adidas NMD R1 (White/Blue/Red)',
    price: 160.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-originals.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-originals-small.webp',
  },
  {
    id: 8,
    brand: 'adidas',
    cat: 'lifestyle',
    name: 'adidas Superstar (White/Red)',
    price: 69.99,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-superstart.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-superstart-small.webp',
  },
  {
    id: 9,
    brand: 'adidas',
    cat: 'basketball',
    name: 'adidas Trae Young 2.0',
    price: 140,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-trae-young-2.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-trae-young-2-small.webp',
  },
  {
    id: 10,
    brand: 'adidas',
    cat: 'running',
    name: 'adidas Ultraboost 22',
    price: 130,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultra-22.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultra-22-small.webp',
  },
  {
    id: 11,
    brand: 'adidas',
    cat: 'running',
    name: 'adidas Ultraboost 22 Mesh',
    price: 120,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultra-multi.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultra-multi-small.webp',
  },
  {
    id: 12,
    brand: 'adidas',
    cat: 'running',
    name: 'adidas Ultraboost DNA (Red/Black)',
    price: 160,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultra-red-black.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultra-red-black-small.webp',
  },
  {
    id: 13,
    brand: 'adidas',
    cat: 'lifestyle',
    name: 'adidas Ultraboost 5.0 DNA (Blue/Yellow)',
    price: 140,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultra-running.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultra-running-small.webp',
  },
  {
    id: 13,
    brand: 'adidas',
    cat: 'lifestyle',
    name: 'adidas Ultraboost 5.0 Breakfast',
    price: 150,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultraboost-breakfast.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultraboost-breakfast-small.webp',
  },
  {
    id: 13,
    brand: 'adidas',
    cat: 'lifestyle',
    name: 'adidas Ultraboost DNA (White)',
    price: 150,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultraboost-white.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/adidas/adidas-ultraboost-white-small.webp',
  },
  {
    id: 14,
    brand: 'puma',
    cat: 'basketball',
    name: 'PUMA Go',
    price: 70,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-b&w.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-b&w-small.webp',
  },
  {
    id: 14,
    brand: 'puma',
    cat: 'basketball',
    name: 'PUMA Nitro',
    price: 70,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-colorful-alt.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-colorful-alt-small.webp',
  },
  {
    id: 15,
    brand: 'puma',
    cat: 'basketball',
    name: 'PUMA MB.02 Rick & Morty',
    price: 140,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-colorful.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-colorful-small.webp',
  },
  {
    id: 16,
    brand: 'puma',
    cat: 'basketball',
    name: 'PUMA MB.02 (Black)',
    price: 99.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-mb2-black.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-mb2-black-small.webp',
  },
  {
    id: 17,
    brand: 'puma',
    cat: 'basketball',
    name: 'PUMA MB.02 (Blue)',
    price: 99.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-mb2-blue.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-mb2-blue-small.webp',
  },
  {
    id: 18,
    brand: 'puma',
    cat: 'basketball',
    name: 'PUMA MB.02 (Light Blue)',
    price: 99.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-mb2-lightblue.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/puma/puma-mb2-lightblue-small.webp',
  },
  {
    id: 19,
    brand: 'puma',
    cat: 'lifestyle',
    name: 'PUMA Slipstream',
    price: 90.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-orange.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-orange-small.webp',
  },
  {
    id: 20,
    brand: 'puma',
    cat: 'lifestyle',
    name: 'PUMA Slipstream (Black/Red)',
    price: 100.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-red-and-black.webp',
    thumb:
      'gs://yeetfleet-2c8fa.appspot.com/puma/puma-red-and-black-small.webp',
  },
  {
    id: 21,
    brand: 'puma',
    cat: 'lifestyle',
    name: 'PUMA Slipstream (White/Red)',
    price: 100.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-slipstream.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-slipstream-small.webp',
  },
  {
    id: 21,
    brand: 'puma',
    cat: 'lifestyle',
    name: 'PUMA Spongebob',
    price: 100.0,
    size: [
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '14',
      '15',
    ],
    url: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-yellow.webp',
    thumb: 'gs://yeetfleet-2c8fa.appspot.com/puma/puma-yellow-small.webp.webp',
  },
];