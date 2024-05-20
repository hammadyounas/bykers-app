type FieldConfig = {
  name: string;
  type: string;
  label: string;
};

export const AddBikesConstant: FieldConfig[] = [
  { name: 'title', type: 'text', label: 'Title' },
  { name: 'model', type: 'text', label: 'Model' },
  { name: 'price', type: 'text', label: 'Price' },
  { name: 'engine', type: 'text', label: 'Engine' },
  { name: 'color', type: 'text', label: 'Color' },
  { name: 'location', type: 'text', label: 'Location' },
  { name: 'clutch', type: 'text', label: 'Clutch' },
  { name: 'horsepower', type: 'text', label: 'Horsepower' },
  { name: 'boreAndStroke', type: 'text', label: 'Bore and Stroke' },
  { name: 'petrolCapacity', type: 'text', label: 'Petrol Capacity' },
  { name: 'starting', type: 'text', label: 'Starting' },
  { name: 'dimensions', type: 'text', label: 'Dimensions' },
  { name: 'displacement', type: 'text', label: 'Displacement' },
  { name: 'transmission', type: 'text', label: 'Transmission' },
  { name: 'torque', type: 'text', label: 'Torque' },
  { name: 'compressionRatio', type: 'text', label: 'Compression Ratio' },
  { name: 'fuelAverage', type: 'text', label: 'Fuel Average' },
  { name: 'topSpeed', type: 'text', label: 'Top Speed' },
  { name: 'description', type: 'textarea', label: 'Description' },
  { name: 'images', type: 'file', label: 'Images' },
];

export const AddOldBikesConstant: FieldConfig[] = [
  { name: 'title', type: 'text', label: 'Title' },
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
];
