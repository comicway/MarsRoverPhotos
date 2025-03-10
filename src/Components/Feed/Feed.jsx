import {useState, useEffect} from 'react'

const Feed = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            const API_KEY = 'ulGfgtUlHNuMVdabXcwnFXSwmENUfrC7HBKkTA8g';
            const date = '2023-12-31';
            const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data.photos);
                setPhotos(data.photos.slice(0, 25));
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <>
            <div className="flex mt-5">
                <img src="/src/assets/react.svg" alt="" className="" />
                <div className="ml-5">
                    <p>Nombre del Rover</p>
                    <p>Fecha de lanzamiento</p>
                    <p>Estado: Activo</p>
                    <p>Fotos totales</p>
                    <p>Soles totales</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-5">
                {photos.map((photo) => (
                    <img 
                        key={photo.id}
                        src={photo.img_src}
                        alt={`Mars rover photo ${photo.id}`}
                        className="w-full h-auto rounded-lg"
                    />
                ))}
            </div>
        </>
    );
};

export default Feed;