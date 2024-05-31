type FieldConfig = {
    name: string;
    type: string;
    label: string;
  };

  
export const SellBikesConstant: FieldConfig[] = [
    { name: 'name', type: 'text', label: 'Your Name' },
    { name: 'mobileNo', type: 'text', label: 'Mobile No' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'title', type: 'text', label: 'Bike Title' },
    { name: 'model', type: 'text', label: 'Model' },
    { name: 'engine', type: 'text', label: 'Engine' },
    { name: 'bodyType', type: 'text', label: 'Body Type' },
    { name: 'registeredIn', type: 'text', label: 'Registered In' },
    { name: 'year', type: 'text', label: 'Year' },
    { name: 'petrolCapacity', type: 'text', label: 'Petrol Capacity' },
    { name: 'mileage', type: 'text', label: 'Mileage' },
    { name: 'location', type: 'text', label: 'Location' },
    { name: 'price', type: 'text', label: 'Price' },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'images', type: 'file', label: 'Images' },
  ]

  export  interface Bike {
    name: string;
    mobileNo: string;
    email: string;
    title: string;
    model: string;
    price: string;
    engine: string;
    bodyType: string;
    registeredIn: string;
    year: string;
    petrolCapacity: string;
    mileage: string;
    location: string;
    description: string;
    status: string;
    images: any;
  }
  
  export const sellBikeDataConstant: Bike[] = [
      {
        title: 'Honda Pridor',
        model: 'Honda CG 125 2024',
        price: '$17790',
        name: 'Nannie R. Brandes',
        mobileNo: '618-280-9637',
        email: 'NannieRBrandes@armyspy.com',
        engine: '4-Stroke OHC Air-Cooled',
        bodyType: 'Standard',
        registeredIn: 'Germany',
        year: '2021',
        petrolCapacity: '9.7L',
        mileage: '550KM',
        location: 'New York',
        description: 'This is a Honda CG 125 2024 model in a good condition',
        status: 'Resolved',
        images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
      },
      {
        title: 'Benelli TRK',
        model: 'Benelli TRK 502X 2024',
        price: '$29500',
        name: 'Imogene T. Bilodeau',
        mobileNo: '937-910-4724',
        email: 'ImogeneTBilodeau@rhyta.com',
        engine: 'V2, Four-stroke',
        bodyType: 'Standard',
        registeredIn: 'Germany',
        year: '2024',
        petrolCapacity: '9.7L',
        mileage: '550KM',
        location: 'New York',
        description: 'This is a Honda CG 125 2024 model in a good condition',
        status: 'Pending',
        images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
      },
      {
        title: 'Benelli TRK',
        model: 'Benelli TRK 502X 2024',
        price: '$29500',
        name: 'Carol H. Minyard',
        mobileNo: '480-248-4346',
        email: 'CarolHMinyard@dayrep.com',
        engine: '4-stroke 16-valve DOHC inline',
        bodyType: 'Standard',
        registeredIn: 'Germany',
        year: '2020',
        petrolCapacity: '9.7L',
        mileage: '550KM',
        location: 'New York',
        description: 'This is a Honda CG 125 2024 model in a good condition',
        status: 'Cancelled',
        images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
      },
      {
        title: 'BMW S1000RR',
        model: 'BMW S1000RR',
        price: '$17790',
        name: 'Frank P. Frederick',
        mobileNo: '253-220-8025',
        email: 'FrankPFrederick@jourrapide.com',
        engine: 'V2, Four-stroke',
        bodyType: 'Standard',
        registeredIn: 'Germany',
        year: '2019',
        petrolCapacity: '9.7L',
        mileage: '550KM',
        location: 'New York',
        description: 'This is a Honda CG 125 2024 model in a good condition',
        status: 'Pending',
        images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
      },
      {
        title: 'BMW S1000RR',
        model: 'BMW S1000RR',
        price: '$17790',
        name: 'Doris R. Bautista',
        mobileNo: '042 882 0706',
        email: 'DorisRBautista@jourrapide.com',
        engine: '4-stroke 16-valve DOHC inline',
        bodyType: 'Standard',
        registeredIn: 'Germany',
        year: '2015',
        petrolCapacity: '9.7L',
        mileage: '550KM',
        location: 'New York',
        description: 'This is a Honda CG 125 2024 model in a good condition',
        status: 'Resolved',
        images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
      },
      {
        title: 'Benelli TRK',
        model: 'Benelli TRK 502X 2024',
        price: '$29500',
        name: 'Nannie R. Brandes',
        mobileNo: '618-280-9637',
        email: 'NannieRBrandes@armyspy.com',
        engine: '4-Stroke OHC Air',
        bodyType: 'Standard',
        registeredIn: 'Germany',
        year: '2018',
        petrolCapacity: '9.7L',
        mileage: '550KM',
        location: 'New York',
        description: 'This is a Honda CG 125 2024 model in a good condition',
        status: 'Resolved',
        images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
      },
      {
        title: 'Benelli TRK',
        model: 'Benelli TRK 502X 2024',
        price: '$29500',
        name: 'Cindy T. Kinney',
        mobileNo: '042 239 5171',
        email: 'CindyTKinney@armyspy.com',
        engine: 'OHC Air-Cooled',
        bodyType: 'Standard',
        registeredIn: 'Germany',
        year: '2020',
        petrolCapacity: '9.7L',
        mileage: '550KM',
        location: 'New York',
        description: 'This is a Honda CG 125 2024 model in a good condition',
        status: 'Cancelled',
        images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
      },
      {
        title: 'BMW S1000RR',
        model: 'BMW S1000RR',
        price: '$17790',
        name: 'Russell P. Freitag',
        mobileNo: '042 479 6277',
        email: 'RussellPFreitag@dayrep.com',
        engine: '6-Stroke OHC',
        bodyType: 'Standard',
        registeredIn: 'Germany',
        year: '2024',
        petrolCapacity: '9.7L',
        mileage: '550KM',
        location: 'New York',
        description: 'This is a Honda CG 125 2024 model in a good condition',
        status: 'Pending',
        images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
      },
      {
        title: 'BMW S1000RR',
        model: 'BMW S1000RR',
        price: '$17790',
        name: 'Paul D. Klass',
        mobileNo: '050 580 2795',
        email: 'PaulDKlass@jourrapide.com',
        engine: '4-Stroke OHC Air-Cooled',
        bodyType: 'Standard',
        registeredIn: 'Germany',
        year: '2022',
        petrolCapacity: '9.7L',
        mileage: '550KM',
        location: 'New York',
        description: 'This is a Honda CG 125 2024 model in a good condition',
        status: 'Resolved',
        images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
      },
    ]
  