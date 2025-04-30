import {useState, useEffect} from 'react';
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

    const roverName = localStorage.getItem('selectedRover');

    const [launchDate, setLaunchDate] = useState('');
    const [roverStatus, setRoverStatus] = useState('');
    const [totalPhotos, setTotalPhotos] = useState('');
    const [maxSol, setMaxSol] = useState('');
    const [landingDate, setLandingDate] = useState('');
    const [maxDate, setMaxDate] = useState('');

    useEffect(() => {
        const fetchManifest = async () => {

            const API_KEY = 'M9RpgIfPIE5CK0shTYQKszNHYurqSM6buLB7M14w';
            const manifestUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${API_KEY}`;

            try {
                // Fetch manifest for launch date and status
                const manifestResponse = await fetch(manifestUrl);
                const manifestData = await manifestResponse.json();
                setRoverStatus(manifestData.photo_manifest.status);
                setTotalPhotos(manifestData.photo_manifest.total_photos);
                setMaxSol(manifestData.photo_manifest.max_sol);
                setLaunchDate(manifestData.photo_manifest.launch_date); 
                setLandingDate(manifestData.photo_manifest.landing_date);
                setMaxDate(manifestData.photo_manifest.max_date);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchManifest();
    }, [roverName]);

    return (
        <>
            <div className="grid grid-cols-1 mt-5">
                <div>
                    <img src="/src/assets/logoroverphotos.svg" alt="" className="mx-auto"/>
                    <h1 className="text-center">Selecciona una fecha</h1>
                    <div className="flex justify-center mt-4">
                        <DatePicker
                            selected={dateSelect}
                            onChange={selectDate}
                            dateFormat="yyyy-MM-dd"
                            className="p-2 border border-[#BF3B0B] bg-black rounded-md text-center w-full text-white"
                            isClearable
                            placeholderText="Selecciona una fecha"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-10">
                <Link to='/feed' className="block w-full">
                    <button disabled={!dateSelect} className="text-white font-bold font-SpaceGrotesk text-[16px] bg-[#BF3B0B] w-full h-[40px] rounded disabled:opacity-50 disabled:cursor-not-allowed">Siguiente</button>
                </Link> 
            </div>
            <section className="grid grid-cols-1 mt-10">
                <div className="text-center text-white border-t border-b border-white mt-[32px] text-[20px] font-bold font-SpaceGrotesk py-[18px] first-letter:uppercase">{roverName}</div>
                <div className="text-center text-white border-b border-white text-[18px] font-bold font-SpaceGrotesk py-[18px]"><span className="font-light">DÍA DE LANZAMIENTO: </span>{launchDate}</div>
                <div className="flex justify-evenly text-white border-b border-white text-[18px] font-light font-SpaceGrotesk py-[18px]">
                    <div>STATUS:</div>
                    <div className="bg-[#0FF2F2] font-bold text-black px-2 text-center w-[200px] first-letter:uppercase">{roverStatus}</div>
                </div>
                <div className="flex justify-evenly items-center text-white border-b border-white font-SpaceGrotesk py-[18px]">
                    <div><img src="/asset/img/icono-sol.svg" alt="" /></div>
                    <div className="">
                        <p className="font-light text-center text-[15px]">Soles Totales</p>
                        <p className="font-bold text-center text-[40px] mt-[-15px]">{maxSol}</p>
                        </div>
                </div>
                <div className="text-center text-white border-b border-white text-[18px] font-bold font-SpaceGrotesk py-[18px]"><span className="font-light">INICIO DE ACTIVIDADES: </span>{landingDate}</div>
                <div className="text-center text-white border-b border-white text-[18px] font-bold font-SpaceGrotesk py-[18px]"><span className="font-light">ÚLTIMO DÍA DE FOTOS: </span>{maxDate}</div>
                <div className="flex justify-evenly items-center text-white border-b border-white font-SpaceGrotesk py-[18px]">
                    <div><img src="/asset/img/icono-camera.svg" alt="" /></div>
                    <div className="">
                        <p className="font-light text-center text-[15px]">Fotos Tomadas</p>
                        <p className="font-bold text-center text-[40px] mt-[-15px]">{totalPhotos}</p>
                    </div>
                </div>
                <div className="text-center text-white border-b border-white text-[12px] font-light font-SpaceGrotesk py-[4px]">Diseñado y desarrollado por: moises.script</div>
            </section>
        </>
    )
};

export default Calendar;