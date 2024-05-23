import React from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange
}) => {
  return (
    <div className="w-full flex justify-between mt-4">
      <div className="flex flex-col items-start">
        <label className="text-sm font-medium text-gray-800">From:</label>
        <DatePicker
          selected={startDate}
          onChange={onStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="w-full rounded-md bg-white border border-gray-300 text-sm focus:outline-none px-4 py-2"
        />
      </div>
      <div className="flex flex-col items-start">
        <label className="text-sm font-medium text-gray-800">To:</label>
        <DatePicker
          selected={endDate}
          onChange={onEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className="w-full rounded-md bg-white border border-gray-300 text-sm focus:outline-none px-4 py-2"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
