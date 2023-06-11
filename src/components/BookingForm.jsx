
const BookingForm = ({ availableTimes, onDateChange }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission or API communication here
        console.log('Form submitted');
    };

    return (
        <form>
            <h1>Booking Form</h1>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={onDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time">
                {availableTimes.map((timeOption) => (
                    <option key={timeOption}>{timeOption}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" onClick={handleSubmit} />
        </form>
    );
};

export default BookingForm;
