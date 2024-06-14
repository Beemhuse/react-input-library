import React from 'react';
interface InputFieldProps {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    onBlur?: (value: string) => void;
    onFocus?: () => void;
}
export declare const InputField: React.FC<InputFieldProps>;
export {};
