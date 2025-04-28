import { useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    
    const [roverSelect, setRoverSelect] = useState();

    const selectRover = (selectedRover) => {
        setRoverSelect(selectedRover);
        localStorage.setItem('selectedRover', selectedRover);
        console.log(selectedRover);
    };

    return (
        <>
            <div className="grid grid-cols-1 mt-5">
                <img src="/src/assets/logoroverphotos.svg" alt="" className="mx-auto" />
                <p className="text-center text-white border-t border-b border-white my-[32px] text-[20px] font-bold font-SpaceGrotesk py-[18px]">¡Elige tu rover preferido!</p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-2">
                <div className="mx-auto">
                    <button onClick={() => selectRover('curiosity')}>
                        <img src="/asset/img/rover-curiosity-3d.png" alt="Rover Curiosity"/>
                    </button>
                    <p className="text-center text-white font-medium font-SpaceGrotesk text-[15px]">Curiosity</p>
                </div>
                <div className="mx-auto">
                    <button onClick={() => selectRover('opportunity')}>
                        <img src="/asset/img/rover-opportunity-3d.png" alt="Rover Opportunity"/>
                    </button>
                    <p className="text-center text-white font-medium font-SpaceGrotesk text-[15px]">Opportunity</p>
                </div>
                <div className="mx-auto">
                    <button onClick={() => selectRover('spirit')}>
                        <img src="/asset/img/rover-spirit-3d.png" alt="Rover Spirit"/>
                    </button>
                    <p className="text-center text-white font-medium font-SpaceGrotesk text-[15px]">Spirit</p>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-10">
            <Link to='/calendar' className="block w-full">
                <button
                    disabled={!roverSelect}
                    className="text-white font-bold font-SpaceGrotesk text-[16px] bg-[#BF3B0B] w-full h-[40px] rounded disabled:opacity-50 disabled:cursor-not-allowed">
                    Seleccionar
                </button>
            </Link>
            </div>
            <section className="grid grid-cols-1 mt-10">
                <div className="text-center text-white border-t border-b border-white mt-[32px] text-[18px] font-bold font-SpaceGrotesk py-[18px]"><span className="font-light">DÍA DE LANZAMIENTO: </span>25 JULIO 2013</div>
                <div className="flex justify-evenly text-white border-b border-white text-[18px] font-light font-SpaceGrotesk py-[18px]">
                    <div>STATUS:</div>
                    <div className="bg-[#0FF2F2] font-bold text-black px-2 text-center w-[200px]">ACTIVO</div>
                </div>
                <div className="flex justify-evenly items-center text-white border-b border-white font-SpaceGrotesk py-[18px]">
                    <div><img src="/asset/img/icono-sol.svg" alt="" /></div>
                    <div className="">
                        <p className="font-light text-center text-[15px]">Soles Totales</p>
                        <p className="font-bold text-center text-[40px] mt-[-15px]">4504</p>
                    </div>
                </div>
                <div className="text-center text-white border-b border-white text-[18px] font-bold font-SpaceGrotesk py-[18px]"><span className="font-light">INICIO DE ACTIVIDADES: </span>25 JULIO 2013</div>
                <div className="flex justify-evenly items-center text-white border-b border-white font-SpaceGrotesk py-[18px]">
                    <div><img src="/asset/img/icono-camera.svg" alt="" /></div>
                    <div className="">
                        <p className="font-light text-center text-[15px]">Fotos Tomadas</p>
                        <p className="font-bold text-center text-[40px] mt-[-15px]">4504</p>
                    </div>
                </div>
                <div className="text-center text-white border-b border-white text-[12px] font-light font-SpaceGrotesk py-[4px]">Diseñado y desarrollado por: moises.script</div>
            </section>
        </>
    );
};

export default Home;