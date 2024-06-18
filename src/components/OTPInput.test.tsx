import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OTPInput from '../OTPInput';

describe('OTPInput Component', () => {
  it('renders the correct number of input boxes', () => {
    render(<OTPInput length={4} value="" onChange={() => {}} />);
    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes).toHaveLength(4);
  });

  it('calls onChange with the correct value', () => {
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
    expect(inputBoxes[0]).not.toHaveFocus();
  });

  it('moves focus to the previous box on backspace if current box is empty', () => {
    render(<OTPInput length={4} value="" onChange={() => {}} />);
    const inputBoxes = screen.getAllByRole('textbox');

    fireEvent.change(inputBoxes[1], { target: { value: '2' } });
    fireEvent.keyDown(inputBoxes[1], { key: 'Backspace' });
    expect(inputBoxes[0]).toHaveFocus();
  });

  it('displays the correct border color for error state', () => {
    render(<OTPInput length={4} value="" onChange={() => {}} error={true} />);
    const inputBoxes = screen.getAllByRole('textbox');

    inputBoxes.forEach((input) => {
      expect(input).toHaveStyle('border: 2px solid red');
    });
  });

  it('applies custom styles correctly', () => {
    render(
      <OTPInput
        length={4}
        value=""
        onChange={() => {}}
        borderColor="blue"
      />
    );
    const inputBoxes = screen.getAllByRole('textbox');

    inputBoxes.forEach((input) => {
      expect(input).toHaveStyle('border-color: blue');
    });
  });
});
