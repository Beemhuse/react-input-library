import React, { ChangeEvent, useState } from 'react';
import styles from './inputfield.module.css';

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  value: string; // Make value a required prop
  onChange: (value: string) => void; // Make onChange a required prop
  onBlur?: (value: string) => void;
  onFocus?: () => void;
  name?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
  className?: string;
}   

export const InputField: React.FC<InputFieldProps> = ({
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue); // Update local state

    onChange(newValue);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue} // Use local state value
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
