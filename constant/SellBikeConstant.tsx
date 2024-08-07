  type FieldConfig = {
    name: string;
    type: string;
    label: string;
    options?: { value: string; label: string }[]; // Optional options for select fields
  };


  export const SellBikesConstant: FieldConfig[] = [
    { name: 'name', type: 'text', label: 'Your Name' },
    { name: 'mobile_info', type: 'text', label: 'Mobile No' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'title', type: 'text', label: 'Bike Title' },
    { name: 'model', type: 'text', label: 'Model' },
    { name: 'engine', type: 'text', label: 'Engine' },
    { name: 'registered_in', type: 'text', label: 'Registered In' },
    { name: 'purchased_year', type: 'text', label: 'Purchased Year' },
    { name: 'petrol_capacity_per_litre', type: 'text', label: 'Petrol Capacity' },
    { name: 'total_mileage', type: 'text', label: 'Total Mileage' },
    { name: 'location', type: 'text', label: 'Location' },
    { name: 'selling_price', type: 'text', label: 'Selling Price' },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'condition', type: 'select', label: 'Condition', options: [{ value: 'Used', label: 'Used' }, { value: 'New', label: 'New' }] },
    { name: 'status', type: 'text', label: 'Status' },
    { name: 'images', type: 'file', label: 'Images' },
  ];


  export interface Bike {
    name: string;
    mobile_info: string;
    email: string;
    // bikeType: string;
    title: string;
    model: string;
    engine: string;
    registered_in: string;
    purchased_year: string;
    petrol_capacity_per_litre: string;
    total_mileage: string;
    location: string;
    selling_price: string;
    description: string;
    status: string;
    images: any;
  }

  export const sellBikeDataConstant: Bike[] = [
    {
      title: 'Honda Pridor',
      model: 'Honda CG 125 2024',
      selling_price: '$17790',
      name: 'Nannie R. Brandes',
      mobile_info: '618-280-9637',
      email: 'NannieRBrandes@armyspy.com',
      engine: '4-Stroke OHC Air-Cooled',
      // bodyType: 'Standard',
      registered_in: 'Germany',
      purchased_year: '2021',
      petrol_capacity_per_litre: '9.7L',
      total_mileage: '550KM',
      location: 'New York',
      description: 'This is a Honda CG 125 2024 model in a good condition',
      status: 'Resolved',
      images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
    },
    {
      title: 'Benelli TRK',
      model: 'Benelli TRK 502X 2024',
      selling_price: '$29500',
      name: 'Imogene T. Bilodeau',
      mobile_info: '937-910-4724',
      email: 'ImogeneTBilodeau@rhyta.com',
      engine: 'V2, Four-stroke',
      // bodyType: 'Standard',
      registered_in: 'Germany',
      purchased_year: '2024',
      petrol_capacity_per_litre: '9.7L',
      total_mileage: '550KM',
      location: 'New York',
      description: 'This is a Honda CG 125 2024 model in a good condition',
      status: 'Pending',
      images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
    },
    {
      title: 'Benelli TRK',
      model: 'Benelli TRK 502X 2024',
      selling_price: '$29500',
      name: 'Carol H. Minyard',
      mobile_info: '480-248-4346',
      email: 'CarolHMinyard@dayrep.com',
      engine: '4-stroke 16-valve DOHC inline',
      // bodyType: 'Standard',
      registered_in: 'Germany',
      purchased_year: '2020',
      petrol_capacity_per_litre: '9.7L',
      total_mileage: '550KM',
      location: 'New York',
      description: 'This is a Honda CG 125 2024 model in a good condition',
      status: 'Cancelled',
      images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
    },
    {
      title: 'BMW S1000RR',
      model: 'BMW S1000RR',
      selling_price: '$17790',
      name: 'Frank P. Frederick',
      mobile_info: '253-220-8025',
      email: 'FrankPFrederick@jourrapide.com',
      engine: 'V2, Four-stroke',
      // bodyType: 'Standard',
      registered_in: 'Germany',
      purchased_year: '2019',
      petrol_capacity_per_litre: '9.7L',
      total_mileage: '550KM',
      location: 'New York',
      description: 'This is a Honda CG 125 2024 model in a good condition',
      status: 'Pending',
      images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
    },
    {
      title: 'BMW S1000RR',
      model: 'BMW S1000RR',
      selling_price: '$17790',
      name: 'Doris R. Bautista',
      mobile_info: '042 882 0706',
      email: 'DorisRBautista@jourrapide.com',
      engine: '4-stroke 16-valve DOHC inline',
      // bodyType: 'Standard',
      registered_in: 'Germany',
      purchased_year: '2015',
      petrol_capacity_per_litre: '9.7L',
      total_mileage: '550KM',
      location: 'New York',
      description: 'This is a Honda CG 125 2024 model in a good condition',
      status: 'Resolved',
      images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
    },
    {
      title: 'Benelli TRK',
      model: 'Benelli TRK 502X 2024',
      selling_price: '$29500',
      name: 'Nannie R. Brandes',
      mobile_info: '618-280-9637',
      email: 'NannieRBrandes@armyspy.com',
      engine: '4-Stroke OHC Air',
      // bodyType: 'Standard',
      registered_in: 'Germany',
      purchased_year: '2018',
      petrol_capacity_per_litre: '9.7L',
      total_mileage: '550KM',
      location: 'New York',
      description: 'This is a Honda CG 125 2024 model in a good condition',
      status: 'Resolved',
      images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
    },
    {
      title: 'Benelli TRK',
      model: 'Benelli TRK 502X 2024',
      selling_price: '$29500',
      name: 'Cindy T. Kinney',
      mobile_info: '042 239 5171',
      email: 'CindyTKinney@armyspy.com',
      engine: 'OHC Air-Cooled',
      // bodyType: 'Standard',
      registered_in: 'Germany',
      purchased_year: '2020',
      petrol_capacity_per_litre: '9.7L',
      total_mileage: '550KM',
      location: 'New York',
      description: 'This is a Honda CG 125 2024 model in a good condition',
      status: 'Cancelled',
      images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
    },
    {
      title: 'BMW S1000RR',
      model: 'BMW S1000RR',
      selling_price: '$17790',
      name: 'Russell P. Freitag',
      mobile_info: '042 479 6277',
      email: 'RussellPFreitag@dayrep.com',
      engine: '6-Stroke OHC',
      // bodyType: 'Standard',
      registered_in: 'Germany',
      purchased_year: '2024',
      petrol_capacity_per_litre: '9.7L',
      total_mileage: '550KM',
      location: 'New York',
      description: 'This is a Honda CG 125 2024 model in a good condition',
      status: 'Pending',
      images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
    },
    {
      title: 'BMW S1000RR',
      model: 'BMW S1000RR',
      selling_price: '$17790',
      name: 'Paul D. Klass',
      mobile_info: '050 580 2795',
      email: 'PaulDKlass@jourrapide.com',
      engine: '4-Stroke OHC Air-Cooled',
      // bodyType: 'Standard',
      registered_in: 'Germany',
      purchased_year: '2022',
      petrol_capacity_per_litre: '9.7L',
      total_mileage: '550KM',
      location: 'New York',
      description: 'This is a Honda CG 125 2024 model in a good condition',
      status: 'Resolved',
      images: ['/assets/Images/bike9.jpg', '/assets/Images/bike8.jpg'],
    },
  ];
