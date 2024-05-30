import Title from '@/components/ui/Title'
import { queriesData } from 'constant/QuriesDataConstant';
import React, {useState} from 'react'

export default function ViewQueriesDetails() {
    const [formData, setFormData] = useState({ ...queriesData[0] });
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
      };
    
      const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSaveClick = () => {
        // Here you would typically send the updated data to your server
        setIsEditing(false);
      };
      
  return (
    <div className="flex min-h-screen flex-col py-20 max-lg:flex-col pt-10 bg-white shadow-md lg:p-5 p-2">
      <Title title="Admin Dashboard" />
      <div className='lg:w-[70%] w-full'>
      <div className="flex shadow-md p-5 w-full mt-10">
          <div className="w-full">
            <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
              {formData.name}
            </h1>
            <div className="mt-5 w-full">
              {isEditing ? (
                <form>
                  {Object.entries(formData).map(([key, value]) => (
                    key !== 'title' && (
                      <div key={key} className="flex justify-between py-2 ">
                        <label className="text-xs text-gray-700 lg:text-sm capitalize">{key}</label>
                        <input
                          type="text"
                          name={key}
                          value={value}
                          onChange={handleInputChange}
                          className="max-lg:text-sm border py-1 rounded border-secondary-light px-6"
                        />
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
                        <p className={`max-lg:text-sm pl-7 max-sm:text-xs ${value === 'Resolved' ? 'text-green-600 font-medium': ''}`}>{value}</p>
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
  )
}
