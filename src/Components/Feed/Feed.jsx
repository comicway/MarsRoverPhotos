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
            const API_KEY = 'ulGfgtUlHNuMVdabXcwnFXSwmENUfrC7HBKkTA8g';
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
            <div className="flex mt-5">
                <img src="/src/assets/react.svg" alt="" className="" />
                <div className="ml-5">
                    <p className='first-letter:uppercase'>{roverName}</p>
                    <p>Fecha de Lanzamiento: {launchDate}</p>
                    <p>Estado: <span className='capitalize'>{roverStatus}</span></p>
                    <p>Fotos totales: {totalPhotos}</p>
                    <p>Soles totales: {maxSol}</p>
                    <p>{date}</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-5 pb-5">
                {photos.map((photo) => (
                    <img 
                        key={photo.id}
                        src={photo.img_src}
                        alt={`Mars rover photo ${photo.id}`}
                        className="w-full h-auto rounded-lg"
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 justify-center">
            {photos.length === 0 && (
                    <p className="text-red-500">No se encontraron fotos para esa fecha, por favor regresar y seleccionar otra</p>
                )}
                <Link to='/'>
                    <button>Regresar</button>
                </Link> 
            </div>
        </>
    );
};

export default Feed;