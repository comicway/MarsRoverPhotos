import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"

const Feed = () => {
    const [photos, setPhotos] = useState([]);
    const [launchDate, setLaunchDate] = useState('');
    const [roverStatus, setRoverStatus] = useState('');
    const [totalPhotos, setTotalPhotos] = useState('');
    const [maxSol, setMaxSol] = useState('');

    const roverName = localStorage.getItem('selectedRover'); 
    const date = localStorage.getItem('selectedDate'); 

    useEffect(() => {
        const fetchPhotos = async () => {
            const API_KEY = 'M9RpgIfPIE5CK0shTYQKszNHYurqSM6buLB7M14w';
            const photosUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${date}&api_key=${API_KEY}`;
            const manifestUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${API_KEY}`;

            try {
                // Fetch photos
                const photosResponse = await fetch(photosUrl);
                const photosData = await photosResponse.json();
                setPhotos(photosData.photos.slice(0, 25));

                // Fetch manifest for launch date and status
                const manifestResponse = await fetch(manifestUrl);
                const manifestData = await manifestResponse.json();
                setLaunchDate(manifestData.photo_manifest.launch_date);
                setRoverStatus(manifestData.photo_manifest.status);
                setTotalPhotos(manifestData.photo_manifest.total_photos);
                setMaxSol(manifestData.photo_manifest.max_sol);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPhotos();
    }, [roverName, date]);

    return (
        <>
            <section  className="grid grid-cols-3 gap-1 mt-5">
                <div>
                    <img src="/asset/img/rover-curiosity-3d.png" alt="Rover Curiosity" className='mx-auto'/>
                </div>
                <div>
                    <img src="/asset/img/icono-sol.svg" alt="" className='w-full h-[68px]'/>
                    <p className='text-white font-SpaceGrotesk font-bold text-[16px] text-center'>{maxSol}</p>
                </div>
                <div>
                    <img src="/asset/img/icono-camera.svg" alt="" className='w-full h-[68px]'/>
                    <p className='text-white font-SpaceGrotesk font-bold text-[16px] text-center'>{totalPhotos}</p>
                </div>
            </section>
            <section className="grid grid-cols-1">
                <div className="text-center text-white border-t border-b border-white mt-[32px] text-[18px] font-bold font-SpaceGrotesk first-letter:uppercase py-[5px]">{roverName}</div>
                <div className="text-center text-white border-b border-white text-[15px] font-bold font-SpaceGrotesk py-[5px]">{date}</div>
            </section>
            <section className="grid grid-cols-2 gap-1 mt-5 pb-5">
                {photos.map((photo) => (
                    <img 
                        key={photo.id}
                        src={photo.img_src}
                        alt={`Mars rover photo ${photo.id}`}
                        className="w-full h-auto"
                    />
                ))}
            </section>
            <section className="grid grid-cols-2 justify-center gap-5 pb-5">
            {photos.length === 0 && (
                    <p className="text-red-500">No se encontraron fotos para esa fecha, por favor regresar y seleccionar otra</p>
                )}
            </section>
            <section className="grid grid-cols-2 gap-5 pb-5">
                <Link to='/calendar'>
                    <button className="text-white font-bold font-SpaceGrotesk text-[16px] bg-[#BF3B0B] w-full h-[40px] rounded">Regresar</button>
                </Link>
                <Link to='/'>
                    <button className="text-white font-medium font-SpaceGrotesk text-[16px] bg-none w-full h-[40px] rounded border border-[#BF3B0B]">Ir al inicio</button>
                </Link>
            </section>
            <section>
                <div className="text-center text-white border-t border-b border-white text-[12px] font-light font-SpaceGrotesk py-[4px]">Diseñado y desarrollado por: moises.script</div>
            </section>
        </>
    );
};

export default Feed;