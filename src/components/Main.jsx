import React from 'react'
import { useReducer } from 'react';
import Products from './Products'
import Footer from './Footer'
import BookingForm from './BookingForm';

const Main = () => {
  const initializeTimes = () => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];

  const updateTimes = (state, date) => {
    // Perform state update based on the selected date
    // For now, returning the same available times regardless of the date
    return initializeTimes();
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    dispatch(selectedDate);
  };
  return (
    <>
        <Products/>
        <Footer/>
        <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange}/>

    </>
  )
}

export default Main;