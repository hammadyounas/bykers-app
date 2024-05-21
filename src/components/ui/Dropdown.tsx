import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  options: Option[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selected,
  setSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-sm:text-xs">
      {/* <label className="block text-sm font-medium text-gray-700">{label}</label> */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-1 block w-full rounded-sm border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:text-sm lg:py-3"
      >
        {selected
          ? options.find((option) => option.value === selected)?.label
          : label}
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
          <ul className="ring-opacity/5 max-h-60 overflow-auto rounded-md py-1 text-base ring-1 ring-gray-300 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <li
                key={option.value}
                className={`relative cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-secondary-light hover:text-white ${
                  selected === option.value
                    ? 'bg-secondary-light text-white'
                    : 'text-gray-900'
                }`}
                onClick={() => {
                  setSelected(option.value);
                  setIsOpen(false);
                }}
              >
                <span
                  className={`block truncate ${
                    selected === option.value ? 'font-semibold' : 'font-normal'
                  }`}
                >
                  {option.label}
                </span>

                {selected === option.value && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-red-600">
                    {/* <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg> */}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
