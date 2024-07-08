import React, { useState, ChangeEvent } from 'react';
import { SellBikeContext } from './SellBikeContext'; // Import SellBikeContext without FormData
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SellBikeProviderProps {
  children: React.ReactNode;
}

export const SellBikeProvider: React.FC<SellBikeProviderProps> = ({ children }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]); // Initialize selectedFiles here
  const [formData, setFormData] = useState({
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
    condition: 'Used',
    images: [] as File[], // Ensure images is typed as File[]
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesArray = Array.from(files); // Convert FileList to Array
      setSelectedFiles(filesArray);
      setFormData((prevData) => ({
        ...prevData,
        images: filesArray,
      }));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new window.FormData();

    // Append all form fields except images
    for (const [key, value] of Object.entries(formData)) {
      if (key !== 'images') {
        formDataToSend.append(key, value as string);
      }
    }

    // Append images
    selectedFiles.forEach((file) => {
      formDataToSend.append('images', file);
    });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sell/bike`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        toast.success(`Bike Submitted Successfully!`);
        console.log(responseData);
        
        // Reset form data after successful submission
        setFormData({
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
          condition: 'Used',
          images: [] as File[],
        });

        // Clear selected files
        setSelectedFiles([]);
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
      value={{ formData, setFormData, selectedFile, setSelectedFile, selectedFiles, setSelectedFiles, handleFileChange, handleChange, handleSubmit }}
    >
      {children}
    </SellBikeContext.Provider>
  );
};
