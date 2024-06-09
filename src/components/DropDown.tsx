import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

interface DropDownProps {
    labels: string[];
    options: string[][];
    selectedValues: string[];
    onSelect: (value: string, index: number) => void;
    placeholders?: string[];
}

const DropDown: React.FC<DropDownProps> = ({ labels, options, selectedValues, onSelect, placeholders }) => {
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>, index: number) => {
        const selectedValue = event.target.value as string; 
        onSelect(selectedValue, index);
    };

    return (
        <FormControl fullWidth sx={{ borderRadius: 4 }}>
            {labels.map((label, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <Select
                        value={selectedValues[index]}
                        onChange={(event) => handleChange(event as React.ChangeEvent<{ value: unknown }>, index)} 
                        label={label}
                        sx={{ width: '25rem', borderRadius: 4 }}
                        displayEmpty
                    >
                        {placeholders && placeholders[index] && (
                            <MenuItem value="" disabled>
                                {placeholders[index]}
                            </MenuItem>
                        )}
                        {options[index].map((option, optionIndex) => (
                            <MenuItem key={optionIndex} value={option} disabled={option === selectedValues[index]}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            ))}
        </FormControl>
    );
};

export default DropDown;
