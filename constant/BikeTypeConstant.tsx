export interface BikeType {
  title: string;
  link: string;
}

export interface Bike {
  title: string;
  src: any;
  alt: string;
  price: string;
  location: string;
  model: string;
  brand: string;
  postedAt: string;
  description: string;
}

export const bikeTypeConstant: BikeType[] = [
  {
    title: 'Standard Bike',
    link: '/Standard%20Bike',
  },
  {
    title: 'Sports Bike',
    link: '/Sports%20Bike',
  },
  {
    title: 'Cruiser Motorcycles',
    link: '/Cruiser%20Motorcycles',
  },
  {
    title: 'Touring Motorcycles',
    link: '/Touring%20Motorcycles',
  },
];

export const standardBikeConstant: Bike[] = [
  {
    title: 'Standard Bike 1',
    src: [
      '/assets/Images/bike1.png',
      '/assets/Images/bike14.jpg',
      '/assets/Images/bike15.jpg',
    ],
    alt: 'Standard Bike 1',
    price: '1,00,000',
    location: 'Germany',
    model: '2023',
    brand: 'Honda',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Standard Bike 2',
    src: [
      '/assets/Images/bike1.png',
      '/assets/Images/bike14.jpg',
      '/assets/Images/bike15.jpg',
    ],
    alt: 'Standard Bike 2',
    price: '1,00,000',
    location: 'Germany',
    model: '2023',
    brand: 'Honda',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Standard Bike 3',
    src: [
      '/assets/Images/bike1.png',
      '/assets/Images/bike14.jpg',
      '/assets/Images/bike15.jpg',
    ],
    alt: 'Standard Bike 3',
    price: '1,00,000',
    location: 'Germany',
    model: '2023',
    brand: 'Honda',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Standard Bike 4',
    src: ['/assets/Images/bike14.jpg', '/assets/Images/bike15.jpg'],
    alt: 'Standard Bike 4',
    price: '1,00,000',
    location: 'Germany',
    model: '2023',
    brand: 'Honda',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Standard Bike 5',
    src: [
      '/assets/Images/bike15.jpg',
      '/assets/Images/bike14.jpg',
      '/assets/Images/bike1.png',
    ],
    alt: 'Standard Bike 5',
    price: '1,00,000',
    location: 'Germany',
    model: '2023',
    brand: 'Honda',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Standard Bike 6',
    src: [
      '/assets/Images/bike14.jpg',
      '/assets/Images/bike1.png',
      '/assets/Images/bike15.jpg',
    ],
    alt: 'Standard Bike 6',
    price: '1,00,000',
    location: 'Germany',
    model: '2023',
    brand: 'Honda',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
];

export const sportsBikeConstant: Bike[] = [
  {
    title: 'Sports Bike 1',
    src: ['/assets/Images/bike7.jpg', '/assets/Images/bike8.jpg'],
    alt: 'Sports Bike 1',
    price: '2,00,000',
    location: 'Berlin',
    model: '2023',
    brand: 'Yamaha',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Sports Bike 3',
    src: [
      '/assets/Images/bike7.jpg',
      '/assets/Images/bike8.jpg',
      '/assets/Images/bike2.png',
    ],
    alt: 'Sports Bike 2',
    price: '2,00,000',
    location: 'Berlin',
    model: '2023',
    brand: 'Yamaha',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Sports Bike 3',
    src: [
      '/assets/Images/bike8.jpg',
      '/assets/Images/bike7.jpg',
      '/assets/Images/bike2.png',
    ],
    alt: 'Sports Bike 3',
    price: '2,00,000',
    location: 'Berlin',
    model: '2023',
    brand: 'Yamaha',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Sports Bike 3',
    src: [
      '/assets/Images/bike7.jpg',
      '/assets/Images/bike2.png',
      '/assets/Images/bike8.jpg',
    ],
    alt: 'Sports Bike 4',
    price: '2,00,000',
    location: 'Berlin',
    model: '2023',
    brand: 'Yamaha',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Sports Bike 3',
    src: [
      '/assets/Images/bike2.png',
      '/assets/Images/bike7.jpg',
      '/assets/Images/bike8.jpg',
    ],
    alt: 'Sports Bike 5',
    price: '2,00,000',
    location: 'Berlin',
    model: '2023',
    brand: 'Yamaha',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Sports Bike 3',
    src: [
      '/assets/Images/bike2.png',
      '/assets/Images/bike8.jpg',
      '/assets/Images/bike7.jpg',
    ],
    alt: 'Sports Bike 6',
    price: '2,00,000',
    location: 'Berlin',
    model: '2023',
    brand: 'Yamaha',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
];

export const cruiselMotorcyclesConstant: Bike[] = [
  {
    title: 'Cruiser Motorcycles 1',
    src: [
      '/assets/Images/bike10.jpg',
      '/assets/Images/bike9.jpg',
      '/assets/Images/bike5.png',
    ],
    alt: 'Cruiser Motorcycles 1',
    price: '2,00,000',
    location: 'Washington, USA',
    model: '2023',
    brand: 'Kawasati',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Cruiser Motorcycles 3',
    src: [
      '/assets/Images/bike5.png',
      '/assets/Images/bike10.jpg',
      '/assets/Images/bike9.jpg',
    ],
    alt: 'Cruiser Motorcycles 2',
    price: '2,00,000',
    location: 'Washington, USA',
    model: '2023',
    brand: 'Kawasati',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Cruiser Motorcycles 3',
    src: [
      '/assets/Images/bike10.jpg',
      '/assets/Images/bike5.png',
      '/assets/Images/bike9.jpg',
    ],
    alt: 'Cruiser Motorcycles 3',
    price: '2,00,000',
    location: 'Washington, USA',
    model: '2023',
    brand: 'Kawasati',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Cruiser Motorcycles 3',
    src: [
      '/assets/Images/bike5.png',
      '/assets/Images/bike9.jpg',
      '/assets/Images/bike10.jpg',
    ],
    alt: 'Cruiser Motorcycles 4',
    price: '2,00,000',
    location: 'Washington, USA',
    model: '2023',
    brand: 'Kawasati',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Cruiser Motorcycles 3',
    src: [
      '/assets/Images/bike10.jpg',
      '/assets/Images/bike5.png',
      '/assets/Images/bike9.jpg',
    ],
    alt: 'Cruiser Motorcycles 5',
    price: '2,00,000',
    location: 'Washington, USA',
    model: '2023',
    brand: 'Kawasati',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Cruiser Motorcycles 3',
    src: [
      '/assets/Images/bike5.png',
      '/assets/Images/bike10.jpg',
      '/assets/Images/bike9.jpg',
    ],
    alt: 'Cruiser Motorcycles 6',
    price: '2,00,000',
    location: 'Washington, USA',
    model: '2023',
    brand: 'Kawasati',
    postedAt: '13/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
];

export const touringMotorcyclesConstant: Bike[] = [
  {
    title: 'Touring Motorcycles 1',
    src: [
      '/assets/Images/bike6.png',
      '/assets/Images/bike12.jpg',
      '/assets/Images/bike13.jpg',
    ],
    alt: 'Touring Motorcycles 1',
    price: '2,00,000',
    location: 'London',
    model: '2024',
    brand: 'BMW',
    postedAt: '10/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Touring Motorcycles 3',
    src: [
      '/assets/Images/bike12.jpg',
      '/assets/Images/bike6.png',
      '/assets/Images/bike13.jpg',
    ],
    alt: 'Touring Motorcycles 2',
    price: '2,00,000',
    location: 'London',
    model: '2024',
    brand: 'BMW',
    postedAt: '10/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Touring Motorcycles 3',
    src: [
      '/assets/Images/bike13.jpg',
      '/assets/Images/bike6.png',
      '/assets/Images/bike12.jpg',
    ],
    alt: 'Touring Motorcycles 3',
    price: '2,00,000',
    location: 'London',
    model: '2024',
    brand: 'BMW',
    postedAt: '10/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Touring Motorcycles 3',
    src: [
      '/assets/Images/bike12.jpg',
      '/assets/Images/bike13.jpg',
      '/assets/Images/bike6.png',
    ],
    alt: 'Touring Motorcycles 4',
    price: '2,00,000',
    location: 'London',
    model: '2024',
    brand: 'BMW',
    postedAt: '10/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Touring Motorcycles 3',
    src: [
      '/assets/Images/bike13.jpg',
      '/assets/Images/bike6.png',
      '/assets/Images/bike12.jpg',
    ],
    alt: 'Touring Motorcycles 5',
    price: '2,00,000',
    location: 'London',
    model: '2024',
    brand: 'BMW',
    postedAt: '10/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Touring Motorcycles 3',
    src: [
      '/assets/Images/bike6.png',
      '/assets/Images/bike13.jpg',
      '/assets/Images/bike12.jpg',
    ],
    alt: 'Touring Motorcycles 6',
    price: '2,00,000',
    location: 'London',
    model: '2024',
    brand: 'BMW',
    postedAt: '10/05/2024',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
];
