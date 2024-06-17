import React, { useState, useEffect, useRef } from 'react';
import styles from './styles/otpinput.module.css';
import { OTPInputProps } from './interface/interfaces';
// import { sizeMap } from './constants';
import { handleChange, handleFocus, handleKeyDown } from './handlers/otpHandlers';
import { SizeType, sizeMap } from './constants/constant';
// import { handleChange, handleKeyDown, handleFocus } from './handlers';

const OTPInput: React.FC<OTPInputProps> = ({
  length,
  value,
  onChange,
  onBlur,
  onFocus,
  size = 'md', // Default size
  gap = '8px', // Default gap
  error = false, // Default no error
  className,
  style,
  borderStyle = '1px solid black', // Default border style
  errorBorderColor = 'red' // Default error border color
}) => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    // Split the incoming value and fill remaining with empty strings
    const newOtpValues = value.split('').concat(Array(length - value.length).fill(''));
    setOtpValues(newOtpValues);
  }, [value, length]);
  
  const boxSize = sizeMap[size as SizeType];

  return (
    <div style={{ display: 'flex', gap }}>
      {otpValues.map((otpValue, index) => (
        <input
          key={index}
          ref={(el) => inputsRef.current[index] = el!}
          id={`otp-input-${index}`}
          type="text"
          value={otpValue}
          onChange={(e) => handleChange(e, index, otpValues, setOtpValues, onChange, length, inputsRef)}
          onKeyDown={(e) => handleKeyDown(e, index, otpValues, setOtpValues, inputsRef)} // Use handleKeyDown from handlers
          onFocus={() => handleFocus(index, onFocus)}
          onClick={() => inputsRef.current[index].focus()}
          onBlur={onBlur ? () => onBlur(otpValues.join('')) : undefined}
          style={{
            width: boxSize,
            height: boxSize,
            textAlign: 'center',
            border: error ? `2px solid ${errorBorderColor}` : borderStyle,
            ...style,
          }}
          maxLength={1}
          className={`${styles.otpInput}  ${className}`}
        />
      ))}
    </div>
  );
};

export default OTPInput;
