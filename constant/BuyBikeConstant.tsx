type FieldConfig = {
  name: string;
  type: string;
  label: string;
};

export const BuyBikesConstant: FieldConfig[] = [
  { name: 'name', type: 'text', label: 'Name' },
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'phone_number', type: 'text', label: 'Phone No' },
  { name: 'description', type: 'textarea', label: 'Description' },
  {
    name: 'interested_in_test_ride',
    type: 'checkbox',
    label: 'Do you want to get a free ride?',
  },
];
