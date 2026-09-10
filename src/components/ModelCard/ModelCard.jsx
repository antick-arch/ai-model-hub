import { useState } from 'react';

const ModelCard = ({ model }) => {
    const [isSubscribed, setSubscribe] = useState(false);
    const handleSubscribe = () =>{
        setSubscribe(true);
    }
    return (
            <div className="card bg-base-100 shadow-sm">
                <figure className='bg-gray-100'>
                    <img
                        className='w-50 h-50 p-5'
                        src={model.image}
                        alt={model.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{model.title}</h2>
                    <p>{model.description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleSubscribe} className="btn bg-[#FF0000] text-white w-full">{isSubscribed? "Subscribed":"Subscribe Now"}</button>
                    </div>
                </div>
            </div>
    );
};

export default ModelCard;