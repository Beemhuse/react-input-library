```markdown
# React Input Library

A customizable and reusable input component for React applications. This library provides a flexible `InputField` component that can be easily integrated into your projects.


## Installation

To install the library, use npm or yarn:

```bash
npm install react-input-library
```

or

```bash
yarn add react-input-library
```

## Usage

Here's an example of how to use the `InputField` component in your React application:

### Basic Usage

Import the `InputField` component and use it in your React application:

```jsx
import React, { useState } from 'react';
import { InputField } from 'react-input-library ';

const MyForm = () => {
  const [name, setName] = useState('');

  const handleChange = (value) => {
    setName(value);
  };

  return (
    <div>
      <InputField
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default MyForm;
```

## Props

The `InputField` component accepts the following props:

| Prop        | Type                         | Description                                            | Default    |
|-------------|------------------------------|--------------------------------------------------------|------------|
| `type`      | `string`                     | The type of the input field                            | `text`     |
| `placeholder` | `string`                   | The placeholder text for the input field               | `''`       |
| `value`     | `string`                     | The value of the input field (controlled component)    | `''`       |
| `onChange`  | `(value: string) => void`    | Callback function called when the input value changes  | -          |
| `onBlur`    | `(value: string) => void`    | Callback function called when the input loses focus    | -          |
| `onFocus`   | `() => void`                 | Callback function called when the input gains focus    | -          |
| `name`      | `string`                     | Name attribute for the input field                     | -          |
| `id`        | `string`                     | ID attribute for the input field                       | -          |
| `maxLength` | `number`                     | Maximum length of the input field                      | -          |
| `minLength` | `number`                     | Minimum length of the input field                      | -          |
| `disabled`  | `boolean`                    | Whether the input field is disabled                    | `false`    |
| `readOnly`  | `boolean`                    | Whether the input field is read-only                   | `false`    |
| `required`  | `boolean`                    | Whether the input field is required                    | `false`    |
| `style`     | `React.CSSProperties`        | Inline styles for the input field                      | -          |
| `className` | `string`                     | Additional CSS class for the input field               | -          |



## InputField OTP Component

The InputField OTP component is designed to provide a customizable input field for entering OTP (One Time Password) codes. It allows users to enter digits one by one and handles navigation between input fields automatically.

### Usage

Import OTPInput into your component and use it within your JSX:

```jsx
import React, { useState } from 'react';
import OTPInput from 'react-input-library';

const MyComponent = () => {
  const [otpValue, setOtpValue] = useState('');

  const handleChange = (value: string) => {
    setOtpValue(value);
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <InputField.OTP
        length={6}
        value={otpValue}
        onChange={handleChange}
        size="md"
        gap="10px"
        error={false}
      />
    </div>
  );
};

export default MyComponent;
```

### Props

| Prop            | Type                               | Default   | Description                                                                                           |
|-----------------|------------------------------------|-----------|-------------------------------------------------------------------------------------------------------|
| length          | number                             | Required  | The length of the OTP input fields                                                                     |
| value           | string                             | Required  | The current value of the OTP input                                                                     |
| onChange        | (value: string) => void            | Required  | Function called when the OTP value changes                                                             |
| onBlur          | (value: string) => void            | Optional  | Function called when focus is removed from the OTP input                                               |
| onFocus         | () => void                         | Optional  | Function called when the OTP input is focused                                                          |
| size            | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' | 'md'      | Size of the OTP input fields. One of 'sm', 'md', 'lg', 'xl', 'xxl'.                                 |
| gap             | string                             | '8px'     | Gap between OTP input fields                                                                           |
| error           | boolean                            | false     | Indicates whether there is an error state in the OTP input                                             |
| className       | string                             | undefined | Additional CSS class to apply to the OTPInput component                                                |
| style           | React.CSSProperties                | undefined | Additional inline styles to apply to each OTP input field                                                   |
| borderStyle     | string                             | '1px solid black' | Border style of the OTP input fields                                                           |
| errorBorderColor| string                             | 'red'     | Border color of the OTP input fields when in error state                                               |


### Customization

The InputField OTP component can be customized in various ways:

- **Size**: Adjust the size of the OTP input fields using the `size` prop ('sm', 'md', 'lg', 'xl', 'xxl').
- **Styling**: Apply custom CSS classes (`className`) and inline styles (`style`) to the OTP input fields.
- **Error Handling**: Set the `error` prop to true to indicate an error state, which can change the appearance of the OTP input fields (`errorBorderColor`).


### Examples

#### Basic InputField.OTP Usage

```jsx
<InputField.OTP
  length={6}
  value={otpValue}
  onChange={handleChange}
/>
```

#### Customized InputField.OTP with Error State

```jsx
<InputField.OTP
  length={4}
  value={otpValue}
  onChange={handleChange}
  size="lg"
  gap="12px"
  error={true}
  errorBorderColor="darkred || #000000"
  style={{ backgroundColor: 'lightyellow' }}
  className="custom-otp-input"
/>
```


## Development

To build the library locally, run:

```bash
npm run build
```

## Contributing

We welcome contributions! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

Please make sure to update tests as appropriate.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Author

[Awah Bright] - [https://github.com/Beemhuse/react-input-library.git/] - [brightawah94@gmail.com]

```




