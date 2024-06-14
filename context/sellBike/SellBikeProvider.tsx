    import React, { useState } from 'react';
import { SellBikeContext, FormData } from './SellBikeContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define props interface for SellBikeProvider
interface SellBikeProviderProps {
  children: React.ReactNode; // Define children prop explicitly
}

// Create a provider component
export const SellBikeProvider: React.FC<SellBikeProviderProps> = ({ children }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile_info: '',
    email: '',
    title: '',
    model: '',
    engine: '',
    registered_in: '',
    purchased_year: '',
    petrol_capacity_per_litre: '',
    total_mileage: '',
    location: '',
    selling_price: '',
    description: '',
    images: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        images: file,
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const json = JSON.stringify(formData);

    try {
      const response = await fetch('http://localhost:5000/sell/bike', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      });

      if (response.ok) {
        const responseData = await response.json();
        toast.success(`Bike submitted successfully!`);
        console.log(responseData);
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          toast.error(`Error: ${errorData.message}`);
        } else {
          const errorText = await response.text();
          toast.error(`Error: ${errorText}`);
        }
      }
    } catch (error) {
      console.error('Network or other error:', error);
      toast.error(`Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`);
    }
  };

  return (
    <SellBikeContext.Provider
      value={{ formData, setFormData, selectedFile, setSelectedFile, handleFileChange, handleChange, handleSubmit }}
    >
      {children}
    </SellBikeContext.Provider>
  );
};