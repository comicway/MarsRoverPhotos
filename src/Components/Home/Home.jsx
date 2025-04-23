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
            <div className="grid grid-cols-1">
                <img src="/src/assets/logoroverphotos.svg" alt="" className="mx-auto mt-5" />
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
                <p className="text-center text-white border-t border-b border-white my-[32px] text-[18px] font-bold font-SpaceGrotesk py-[18px]"><span className="font-light">DÍA DE LANZAMIENTO: </span>25 JULIO 2013</p>
                <p className="text-left text-white border-t border-b border-white text-[18px] font-light font-SpaceGrotesk py-[18px]">STATUS:</p>
            </section>
        </>
    );
};

export default Home;