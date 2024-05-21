import type { ChangeEvent } from 'react';
import React, { useState } from 'react';

import Textinput from '@/components/ui/Textinput';

interface GlobalFilterProps {
  filter: string;
  setFilter: (filter: string | undefined) => void;
}

const GlobalFilter: React.FC<GlobalFilterProps> = ({ filter, setFilter }) => {
  const [value, setValue] = useState<string>(filter);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setFilter(e.target.value || undefined);
  };

  return (
    <div>
      <Textinput
        value={value || ''}
        onChange={onChange}
        placeholder="search..."
      />
    </div>
  );
};

export default GlobalFilter;
