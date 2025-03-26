import { useState } from "react";
import { Link } from "react-router-dom";

const Calendar = () => {

    const [dateSelect, setDateSelect] = useState();

    const selectDate = (e) => {
        
        const selectedDate = e.target.value;
        setDateSelect(selectedDate);

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
                        <input type="date" onClick={selectDate} className="p-2 border rounded-md text-center"/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <Link to='/feed' className="ml-auto">
                    <button>Siguiente</button>
                </Link> 
            </div>
        </>
    )
};
export default Calendar;