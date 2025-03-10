const Calendar = () => {
    return (
        <>
            <div className="grid grid-cols-1">
                <div>
                    <img src="/src/assets/react.svg" alt="" className="mx-auto mt-5" />
                    <h1 className="text-center">Selecciona una fecha</h1>
                    <div className="flex justify-center mt-4">
                        <input type="date" className="p-2 border rounded-md text-center"/>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Calendar;