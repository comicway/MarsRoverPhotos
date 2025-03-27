import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
    const [dateSelect, setDateSelect] = useState(null);

    const selectDate = (date) => {
        setDateSelect(date);
        const selectedDate = date.toISOString().split('T')[0];
        localStorage.setItem('selectedDate', selectedDate);
        console.log(selectedDate);
    };

    return (
        <>
            <div className="grid grid-cols-1">
                <div>
                    <img src="/src/assets/react.svg" alt="" className="mx-auto mt-5" />
                    <h1 className="text-center">Selecciona una fecha</h1>
                    <div className="flex justify-center mt-4">
                        <DatePicker
                            selected={dateSelect}
                            onChange={selectDate}
                            dateFormat="yyyy-MM-dd"
                            className="p-2 border rounded-md text-center w-48"
                            isClearable
                            placeholderText="Selecciona una fecha"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <Link to='/feed' className="ml-auto">
                    <button disabled={!dateSelect}>Siguiente</button>
                </Link> 
            </div>
        </>
    )
};

export default Calendar;