import select from './Select.module.css';
import React, { useState } from 'react';

const SelectWeek = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: '', label: 'Select' },
    { value: '1-5', label: 'Monday to Friday' },
    { value: '6,0', label: 'WeekEnds' },
    { value: '1', label: 'Monday' },
    { value: '2', label: 'Tuesday' },
    { value: '3', label: 'Wednesday' },
    { value: '4', label: 'Thursday' },
    { value: '5', label: 'Friday' },
    { value: '6', label: 'Saturday' },
    { value: '0', label: 'Sunday' },
  ];

  const handleChange = (event) => {
    // event.preventDefault();
    setSelectedOption(event.target.value);
    props.setDay(event.target.value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleChange}
      className={select.select}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className={select.select}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectWeek;
