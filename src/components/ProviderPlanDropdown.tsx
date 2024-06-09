import React from 'react';
import { FormControl } from '@mui/material';
import DropDown from './DropDown';

interface ProviderPlanDropdownProps {
  data: any;
  provider: string;
  plan: string;
  handleProviderChange: (value: string) => void;
  handlePlanChange: (value: string) => void;
  title: string;
}

const ProviderPlanDropdown: React.FC<ProviderPlanDropdownProps> = ({
  data, provider, plan, handleProviderChange, handlePlanChange, title,
}) => {
  return (
    <div className="dropdown-container">
      <h2>{title}</h2>
      <FormControl fullWidth sx={{ borderRadius: 4 }}>
        <DropDown
          labels={['Provider', 'Plan']}
          options={[Object.keys(data), provider ? Object.keys(data[provider]) : []]}
          selectedValues={[provider, plan]}
          onSelect={(value, index) => index === 0 ? handleProviderChange(value) : handlePlanChange(value)}
          placeholders={['Select Provider', 'Select Plan']}
        />
      </FormControl>
    </div>
  );
};

export default ProviderPlanDropdown;
