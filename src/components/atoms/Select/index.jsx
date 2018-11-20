import React, { Component } from 'react';

const Select = ({ options, onChange, selected }) => {
  return (
    <select onChange={onChange} value={selected}>
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Select;
