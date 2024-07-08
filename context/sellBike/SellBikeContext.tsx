import React, { createContext, useContext, Dispatch, SetStateAction } from 'react';

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
  condition: string;
  images: File[];
  [key: string]: string | File[] | null;
}

export interface SellBikeContextType {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  selectedFiles: File[]; // Add selectedFiles here
  setSelectedFiles: Dispatch<SetStateAction<File[]>>; // Add setSelectedFiles here
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const SellBikeContext = createContext<SellBikeContextType | undefined>(undefined);

export const useSellBikeContext = () => {
  const context = useContext(SellBikeContext);
  if (!context) {
    throw new Error('useSellBikeContext must be used within a SellBikeProvider');
  }
  return context;
};

export default SellBikeContext;
