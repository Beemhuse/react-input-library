// src/handlers.ts
import { ChangeEvent, KeyboardEvent } from 'react';
import { singleChar } from '../utils/singleChar';

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number,
  otpValues: string[],
  setOtpValues: React.Dispatch<React.SetStateAction<string[]>>,
  onChange: (value: string) => void,
  length: number,
  inputsRef: React.MutableRefObject<HTMLInputElement[]>
) => {
  const newValue = e.target.value;

  // Only allow a single digit
  if (/^\d$/.test(newValue) || newValue === '') {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = newValue;
    setOtpValues(newOtpValues);
    onChange(newOtpValues.join(''));

    // Move focus to the next truly empty input if a digit is entered
    if (newValue !== '') {
      for (let i = index + 1; i < length; i++) {
        if (newOtpValues[i] === '') {
          inputsRef.current[i].focus();
          return;
        }
      }
      for (let i = 0; i < index; i++) {
        if (newOtpValues[i] === '') {
          inputsRef.current[i].focus();
          return;
        }
      }
    }
  } else {
    // If more than one character is entered, reset the value to the first character
    const singleCharValue = newValue.slice(0, 1);
    e.target.value = singleCharValue;
    const newOtpValues = [...otpValues];
    newOtpValues[index] = singleCharValue;
    setOtpValues(newOtpValues);
    onChange(newOtpValues.join(''));

    // Move focus to the next truly empty input if a digit is entered
    if (singleCharValue !== '') {
      for (let i = index + 1; i < length; i++) {
        if (newOtpValues[i] === '') {
          inputsRef.current[i].focus();
          return;
        }
      }
      for (let i = 0; i < index; i++) {
        if (newOtpValues[i] === '') {
          inputsRef.current[i].focus();
          return;
        }
      }
    }
  }
};

// export const handleChange = (
//   e: React.ChangeEvent<HTMLInputElement>,
//   index: number,
//   otpValues: string[],
//   setOtpValues: React.Dispatch<React.SetStateAction<string[]>>,
//   onChange: (value: string) => void,
//   length: number,
//   inputsRef: React.MutableRefObject<HTMLInputElement[]>
// ) => {
//   const newValue = e.target.value;

//   // Only allow a single digit
//   if (/^\d$/.test(newValue) || newValue === '') {
//     const newOtpValues = [...otpValues];
//     newOtpValues[index] = newValue;
//     setOtpValues(newOtpValues);
//     onChange(newOtpValues.join(''));
//     inputsRef.current[index].focus();

//     // Move focus to the next empty input if a digit is entered
//     if (newValue !== '') {
//       let nextIndex = (index + 1) % length;
//       while (newOtpValues[nextIndex] !== '' && nextIndex !== index) {
//         nextIndex = (nextIndex + 1) % length;
//       }
//       if (newOtpValues[nextIndex] === '') {
//         inputsRef.current[nextIndex].focus();
//       }
//     }
//   } else {
//     // If more than one character is entered, reset the value to the first character
//     const singleCharValue = singleChar(newValue);
//     e.target.value = singleCharValue;
//     const newOtpValues = [...otpValues];
//     newOtpValues[index] = singleCharValue;
//     setOtpValues(newOtpValues);
//     onChange(newOtpValues.join(''));

//     // Move focus to the next empty input if a digit is entered
//     // Move focus to the next empty input if a digit is entered
//     if (singleCharValue !== '') {
//       let nextIndex = (index + 1) % length;
//       while (newOtpValues[nextIndex] !== '' && nextIndex !== index) {
//         nextIndex = (nextIndex + 1) % length;
//       }
//       if (newOtpValues[nextIndex] === '') {
//         inputsRef.current[nextIndex].focus();
//       }
//     }
//   }
// };


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
      // inputsRef.current[index].focus();
  
      if (otpValues[index] !== '') {
        // If current input is not empty, clear the current input
        const newOtpValues = [...otpValues];
        newOtpValues[index] = '';
        setOtpValues(newOtpValues);
  
        // Focus on the previous input after setting the value to ''
        inputsRef.current[index - 1].focus();
      } else if (index > 0) {
        // If current input is empty, focus on it
        inputsRef.current[index].focus();
  
        // Clear the value of the previous input
        const newOtpValues = [...otpValues];
        newOtpValues[index - 1] = '';
        setOtpValues(newOtpValues);

        
        for (let i = index - 1; i >= 0; i--) {
          if (newOtpValues[i] !== '') {
            inputsRef.current[i].focus();
            break;
          }
        }

      }
    }
  };
  
export const handleFocus = (index: number, onFocus?: () => void) => {
  if (onFocus) {
    onFocus();
  }
};
