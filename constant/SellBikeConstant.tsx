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
  