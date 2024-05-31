import Title from "@/components/ui/Title";
import { bikesData } from "constant/viewBikeData";
import React, { useState } from "react";

export default function ViewBikesDetails() {
  const images = [
    '/assets/Images/bike10.jpg',
    '/assets/Images/bike11.jpg',
    '/assets/Images/bike12.jpg',
    '/assets/Images/bike2.png',
    '/assets/Images/bike6.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...bikesData[0], image: images[0] });
  const [customImage, setCustomImage] = useState<string | null>(null);

  const handleThumbnailClick = (index: any) => {
    setCurrentSlide(index);
    setFormData({ ...formData, image: images[index] });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setCustomImage(result);
      setFormData({ ...formData, image: result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex min-h-screen flex-col py-20 max-lg:flex-col pt-10 mx-auto bg-white shadow-md items-center lg:p-5 p-2">
      <Title title="Admin Dashboard" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-10">
        {/* left */}
        <div className="flex flex-col items-center w-full">
          <div className="h-[55vh] w-full max-[425px]:h-[35vh] sm:h-[50vh]">
            <img
              src={formData.image}
              alt={`image ${currentSlide}`}
              className="size-full"
            />
          </div>
          <div className="flex mt-4">
            {images.map((src, index) => (
              <div
                key={index}
                className={`w-[20%] cursor-pointer p-1 ${currentSlide === index ? 'border-2 border-red-600' : 'border'}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${index}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex shadow-md p-5 w-full">
          <div className="w-full">
            <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
              {formData.title}
            </h1>
            <div className="mt-5 w-full">
              {isEditing ? (
                <form>
                  {Object.entries(formData).map(([key, value]) => (
                    key !== 'title' && (
                      <div key={key} className="flex justify-between py-2">
                        <label className="text-xs text-gray-700 lg:text-sm capitalize">{key}</label>
                        {key === 'image' ? (
                          <div className="flex flex-col">
                            <input
                              type="file"
                              name={key}
                              onChange={handleFileChange}
                              className="max-lg:text-sm border py-1 rounded border-secondary-light px-6 mb-2"
                            />
                            <div className="flex">
                              {images.map((src, index) => (
                                <div
                                  key={index}
                                  className={`w-[20%] cursor-pointer p-1 ${formData.image === src ? 'border-2 border-red-600' : 'border'}`}
                                  onClick={() => setFormData({ ...formData, image: src })}
                                >
                                  <img
                                    src={src}
                                    alt={`Thumbnail ${index}`}
                                    className="w-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <input
                            type="text"
                            name={key}
                            value={value}
                            onChange={handleInputChange}
                            className="max-lg:text-sm border py-1 rounded border-secondary-light px-6"
                          />
                        )}
                      </div>
                    )
                  ))}
                  <div className="mt-5">
                    <button type="button" className="px-10 py-2 bg-green-600 text-white font-medium rounded" onClick={handleSaveClick}>
                      Save
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  {Object.entries(formData).map(([key, value]) => (
                    key !== 'title' && (
                      <div key={key} className="flex justify-between border-b-2 py-2">
                        <p className="text-xs text-gray-700 lg:text-sm capitalize">{key}</p>
                        <p className="max-lg:text-sm">{value}</p>
                      </div>
                    )
                  ))}
                  <div className="mt-5 lg:text-base sm:text-sm text-xs">
                    <button className="px-10 sm:py-2 py-1 bg-green-600 text-white font-medium rounded" onClick={handleEditClick}>
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
