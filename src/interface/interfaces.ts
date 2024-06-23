import { SizeType } from "../constants/constant";

export interface InputFieldProps {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
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
  
  export interface OTPInputProps {
    length: number;
    value: string;
    onChange: (value: string) => void;
    onBlur?: (value: string) => void;
    onFocus?: () => void;
    size?: SizeType; // Customizable box size
    gap?: number; // Customizable gap between boxes
    error?: boolean; // Error handling
    className?: string;
    style?:React.CSSProperties;
    borderStyle?: string; // Customizable border style
    errorBorderColor?: string; // Error
    borderColor?: string; // Error

  }
  