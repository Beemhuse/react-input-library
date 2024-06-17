// src/handlers.ts
import { ChangeEvent, KeyboardEvent } from 'react';

export const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    otpValues: string[],
    setOtpValues: React.Dispatch<React.SetStateAction<string[]>>,
    onChange: (value: string) => void,
    length: number,
    inputsRef: React.MutableRefObject<HTMLInputElement[]>
  ) => {
    const newValue = e.target.value;
    if (/^[0-9]$/.test(newValue) || newValue === '') {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = newValue;
      setOtpValues(newOtpValues);
      onChange(newOtpValues.join(''));
  
      // Move focus to the next input if a character is entered and not at the last input
      if (newValue !== '' && index < length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

export const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
    otpValues: string[],
    setOtpValues: React.Dispatch<React.SetStateAction<string[]>>,
    inputsRef: React.MutableRefObject<HTMLInputElement[]>
  ) => {
    if (e.key === 'Backspace') {
      // Prevent default backspace behavior (like navigation)
      e.preventDefault();
  
      if (otpValues[index] !== '') {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = '';
        setOtpValues(newOtpValues);
  
        // Focus on the current input after setting the value to ''
        inputsRef.current[index].focus();
      } else if (index > 0) {
        // If current input is empty, move focus to the previous input
        inputsRef.current[index - 1].focus();
      }
    }
  };

export const handleFocus = (index: number, onFocus?: () => void) => {
  if (onFocus) {
    onFocus();
  }
};
