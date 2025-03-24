import { useState } from "react";

const Home = () => {

    const [roverSelect, setRoverSelect] = useState('');

    return (
        <>
            <div className="grid grid-cols-1">
                    <img src="/src/assets/react.svg" alt="" className="mx-auto mt-5" />
                    <h1 className="text-center">Mars Rover Photos App</h1>
                    <p className="text-center">¡Elige tu rover preferido!</p>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-10">
                    <div>
                        <button>
                            <img src="/src/assets/react.svg" alt=""/>
                        </button>
                        <p>Curiosity</p>
                    </div>
                    <div>
                        <button>
                            <img src="/src/assets/react.svg" alt=""/>
                        </button>
                        <p>Opportunity</p>
                    </div>
                    <div>
                        <button>
                            <img src="/src/assets/react.svg" alt=""/>
                        </button>
                        <p>Spirit</p>
                    </div>
            </div>
        </>
    )
};
export default Home;