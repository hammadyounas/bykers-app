export interface BikeType {
  title: string;
  link: string;
}

export interface Bike {
  title: string;
  src: any;
  alt: string;
  model: string;
  price: string;
  engine: string;
  displacement: string;
  fuelAverage: string;
  petrolCapacity: string;
  type: string;
}

export const bikeTypeConstant: BikeType[] = [
  {
    title: 'New Bike',
    link: '/New%20Bike',
  },
  {
    title: 'Old Bike',
    link: '/Old%20Bike',
  },
];

export const newBikeConstant: Bike[] = [
  {
    title: 'Benelli TRK 502X 2024',
    src: [
      '/assets/Images/bike1.png',
      '/assets/Images/bike14.jpg',
      '/assets/Images/bike15.jpg',
    ],
    alt: 'New Bike 1',
    model: 'BMW S1000RR',
    price: '$17790',
    engine: '4-stroke 16-valve DOHC inline-',
    displacement: '999 CC',
    fuelAverage: '15.0 KM/L',
    petrolCapacity: '17.5L',
    type: 'New',
  },
  {
    src: [
      '/assets/Images/bike5.png',
      '/assets/Images/bike6.png',
      '/assets/Images/bike7.jpg',
    ],
    alt: 'New Bike 2',
    title: 'Benelli TRK',
    model: 'Benelli TRK 502X 2024',
    price: '$29500',
    engine: 'V2, Four-stroke',
    displacement: '500 CC',
    fuelAverage: '20.0 KM/L',
    petrolCapacity: '20L',
    type: 'New',
  },
  {
    src: [
      '/assets/Images/bike8.jpg',
      '/assets/Images/bike7.jpg',
      '/assets/Images/bike6.png',
    ],
    alt: 'New Bike 3',
    title: 'BMW S1000RR',
    model: 'BMW S1000RR',
    price: '$17790',
    engine: '4-stroke 16-valve DOHC inline-',
    displacement: '999 CC',
    fuelAverage: '15.0 KM/L',
    petrolCapacity: '17.5L',
    type: 'New',
  },
  {
    src: ['/assets/Images/bike6.png', '/assets/Images/bike15.jpg'],
    alt: 'New Bike 4',
    title: 'Benelli TRK',
    model: 'Benelli TRK 502X 2024',
    price: '$29500',
    engine: 'V2, Four-stroke',
    displacement: '500 CC',
    fuelAverage: '20.0 KM/L',
    petrolCapacity: '20L',
    type: 'New',
  },
  {
    src: [
      '/assets/Images/bike7.jpg',
      '/assets/Images/bike14.jpg',
      '/assets/Images/bike1.png',
    ],
    alt: 'New Bike 5',
    title: 'BMW S1000RR',
    model: 'BMW S1000RR',
    price: '$17790',
    engine: '4-stroke 16-valve DOHC inline-',
    displacement: '999 CC',
    fuelAverage: '15.0 KM/L',
    petrolCapacity: '17.5L',
    type: 'New',
  },
  {
    src: [
      '/assets/Images/bike8.jpg',
      '/assets/Images/bike1.png',
      '/assets/Images/bike15.jpg',
    ],
    alt: 'New Bike 6',
    title: 'BMW S1000RR',
    model: 'BMW S1000RR',
    price: '$17790',
    engine: '4-stroke 16-valve DOHC inline-',
    displacement: '999 CC',
    fuelAverage: '15.0 KM/L',
    petrolCapacity: '17.5L',
    type: 'New',
  },
];

export const oldBikeConstant: Bike[] = [
  {
    src: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
    alt: 'Old Bike 1',
    title: 'BMW S1000RR',
    model: 'BMW S1000RR',
    price: '$17790',
    engine: '4-stroke 16-valve DOHC inline-',
    displacement: '999 CC',
    fuelAverage: '15.0 KM/L',
    petrolCapacity: '17.5L',
    type: 'Old',
  },
  {
    src: [
      '/assets/Images/bike10.jpg',
      '/assets/Images/bike8.jpg',
      '/assets/Images/bike2.png',
    ],
    alt: 'Old Bike 2',
    title: 'Benelli TRK',
    model: 'Benelli TRK 502X 2024',
    price: '$29500',
    engine: 'V2, Four-stroke',
    displacement: '500 CC',
    fuelAverage: '20.0 KM/L',
    petrolCapacity: '20L',
    type: 'Old',
  },
  {
    src: [
      '/assets/Images/bike11.jpg',
      '/assets/Images/bike7.jpg',
      '/assets/Images/bike2.png',
    ],
    alt: 'Old Bike 3',
    title: 'BMW S1000RR',
    model: 'BMW S1000RR',
    price: '$17790',
    engine: '4-stroke 16-valve DOHC inline-',
    displacement: '999 CC',
    fuelAverage: '15.0 KM/L',
    petrolCapacity: '17.5L',
    type: 'Old',
  },
  {
    src: [
      '/assets/Images/bike12.jpg',
      '/assets/Images/bike2.png',
      '/assets/Images/bike8.jpg',
    ],
    alt: 'Old Bike 4',
    title: 'Benelli TRK',
    model: 'Benelli TRK 502X 2024',
    price: '$29500',
    engine: 'V2, Four-stroke',
    displacement: '500 CC',
    fuelAverage: '20.0 KM/L',
    petrolCapacity: '20L',
    type: 'Old',
  },
  {
    src: [
      '/assets/Images/bike13.jpg',
      '/assets/Images/bike7.jpg',
      '/assets/Images/bike8.jpg',
    ],
    alt: 'Old Bike 5',
    title: 'Benelli TRK',
    model: 'Benelli TRK 502X 2024',
    price: '$29500',
    engine: 'V2, Four-stroke',
    displacement: '500 CC',
    fuelAverage: '20.0 KM/L',
    petrolCapacity: '20L',
    type: 'Old',
  },
  {
    src: [
      '/assets/Images/bike14.jpg',
      '/assets/Images/bike8.jpg',
      '/assets/Images/bike7.jpg',
    ],
    alt: 'Old Bike 6',
    title: 'Benelli TRK',
    model: 'Benelli TRK 502X 2024',
    price: '$29500',
    engine: 'V2, Four-stroke',
    displacement: '500 CC',
    fuelAverage: '20.0 KM/L',
    petrolCapacity: '20L',
    type: 'Old',
  },
];
