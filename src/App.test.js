import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Render booking table heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Booking Form");
  expect(headingElement).toBeInTheDocument();
});
import { initializeTimes, updateTimes } from './components/Main';

describe('initializeTimes', () => {
  test('returns the expected initial state', () => {
    const initialState = initializeTimes();
    // Perform assertions on the initial state
    expect(initialState).toEqual( [ '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00']);
  });
});

describe('updateTimes', () => {
  test('returns the same state provided as input', () => {
    const state = ['18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'];
    const newState = updateTimes(state);
    expect(newState).toEqual(state);
  });
});
