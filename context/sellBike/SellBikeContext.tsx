import React, { createContext, useContext } from 'react';

// Define the type for your form data
export interface FormData {
  name: string;
  mobile_info: string;
  email: string;
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
  images: File | null;
  [key: string]: string | File | null;
}

// Define the type for your context
interface SellBikeContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  selectedFile: File | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

// Create context with initial values
export const SellBikeContext = createContext<SellBikeContextType | undefined>(undefined);

// Custom hook to use the context
export const useSellBikeContext = () => {
  const context = useContext(SellBikeContext);
  if (!context) {
    throw new Error('useSellBikeContext must be used within a SellBikeProvider');
  }
  return context;
};