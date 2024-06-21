import React, { ChangeEvent, useState, useEffect } from 'react';
import styles from './styles/inputfield.module.css';
import { InputFieldProps } from './interface/interfaces';
// import OTPInput from './OTPInput';

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur,
  onFocus,
  name,
  id,
  maxLength,
  minLength,
  disabled,
  readOnly,
  required,
  style,
  className
}) => {
  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      onBlur={onBlur ? (e) => onBlur(e.target.value) : undefined}
      onFocus={onFocus}
      name={name}
      id={id}
      maxLength={maxLength}
      minLength={minLength}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      style={{ ...style }}
      className={`${styles.inputField} ${className}`}
    />
  );
};

export default {InputField}



