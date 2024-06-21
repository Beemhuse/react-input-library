// @ts-ignore
import React from 'react';
// @ts-ignore
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OTPInput from '../OTPInput';

describe('OTPInput Component', () => {
  it('renders the correct number of input boxes', () => {
    render(<OTPInput length={4} value="" onChange={() => {}} />);
    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes).toHaveLength(4);
  });

  it('calls onChange with the correct value when input is changed', () => {
    const handleChange = jest.fn();
    render(<OTPInput length={4} value="" onChange={handleChange} />);
    const inputBoxes = screen.getAllByRole('textbox');

    fireEvent.change(inputBoxes[0], { target: { value: '1' } });
    expect(handleChange).toHaveBeenCalledWith('1');
  });

  it('focuses on the next input box when a value is entered', () => {
    render(<OTPInput length={4} value="" onChange={() => {}} />);
    const inputBoxes = screen.getAllByRole('textbox');

    fireEvent.change(inputBoxes[0], { target: { value: '1' } });
    expect(inputBoxes[1]).toHaveFocus();
  });

  it('does not move focus when deleting an empty box', () => {
    render(<OTPInput length={4} value="" onChange={() => {}} />);
    const inputBoxes = screen.getAllByRole('textbox');

    fireEvent.keyDown(inputBoxes[1], { key: 'Backspace' });
    expect(inputBoxes[1]).toHaveFocus();
  });

  it('moves focus to the previous box on backspace if current box is empty', () => {
    render(<OTPInput length={4} value="" onChange={() => {}} />);
    const inputBoxes = screen.getAllByRole('textbox');

    fireEvent.change(inputBoxes[1], { target: { value: '2' } });
    fireEvent.keyDown(inputBoxes[1], { key: 'Backspace' });
    expect(inputBoxes[0]).toHaveFocus();
  });

  // it('does not move focus on backspace if the current box is not empty', () => {
  //   render(<OTPInput length={4} value="" onChange={() => {}} />);
  //   const inputBoxes = screen.getAllByRole('textbox');

  //   fireEvent.change(inputBoxes[1], { target: { value: '2' } });
  //   fireEvent.keyDown(inputBoxes[1], { key: 'Backspace' });
  //   expect(inputBoxes[1]).toHaveFocus();
  // });

  it('displays the correct border color for error state', () => {
    render(<OTPInput length={4} value="" onChange={() => {}} error={true} />);
    const inputBoxes = screen.getAllByRole('textbox');

    inputBoxes.forEach((/** @type {any} */ input) => {
      expect(input).toHaveStyle('border: 2px solid red');
    });
  });

  it('applies custom styles correctly', () => {
    render(
      <OTPInput
        length={4}
        value=""
        onChange={() => {}}
        borderStyle="1px solid blue"
      />
    );
    const inputBoxes = screen.getAllByRole('textbox');

    inputBoxes.forEach((/** @type {any} */ input) => {
      expect(input).toHaveStyle('border: 1px solid blue');
    });
  });

  it('does not accept more than one character per input box', () => {
    const handleChange = jest.fn();
    render(<OTPInput length={4} value="" onChange={handleChange} />);
    const inputBoxes = screen.getAllByRole('textbox');

    fireEvent.change(inputBoxes[0], { target: { value: '12' } });
    expect(inputBoxes[0]).toHaveValue('1');
  });

  // it('focuses on the next empty input box if a non-empty value is present', () => {
  //   render(<OTPInput length={4} value="1" onChange={() => {}} />);
  //   const inputBoxes = screen.getAllByRole('textbox');
  //   expect(inputBoxes[1]).toHaveFocus();
  // });

  it('correctly updates state when value prop changes', () => {
    const { rerender } = render(<OTPInput length={4} value="12" onChange={() => {}} />);
    const inputBoxes = screen.getAllByRole('textbox');
    
    expect(inputBoxes[0]).toHaveValue('1');
    expect(inputBoxes[1]).toHaveValue('2');
    expect(inputBoxes[2]).toHaveValue('');
    expect(inputBoxes[3]).toHaveValue('');

    rerender(<OTPInput length={4} value="1234" onChange={() => {}} />);
    expect(inputBoxes[0]).toHaveValue('1');
    expect(inputBoxes[1]).toHaveValue('2');
    expect(inputBoxes[2]).toHaveValue('3');
    expect(inputBoxes[3]).toHaveValue('4');
  });

  it('handles blur event correctly', () => {
    const handleBlur = jest.fn();
    render(<OTPInput length={4} value="1234" onChange={() => {}} onBlur={handleBlur} />);
    const inputBoxes = screen.getAllByRole('textbox');

    fireEvent.blur(inputBoxes[0]);
    expect(handleBlur).toHaveBeenCalledWith('1234');
  });

  it('handles focus event correctly', () => {
    const handleFocus = jest.fn();
    render(<OTPInput length={4} value="1234" onChange={() => {}} onFocus={handleFocus} />);
    const inputBoxes = screen.getAllByRole('textbox');

    fireEvent.focus(inputBoxes[0]);
    expect(handleFocus).toHaveBeenCalled();
  });
});
