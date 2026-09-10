import { use } from 'react';
import ModelCard from '../ModelCard/ModelCard';

const Model = ({ getModels }) => {
    const data = use(getModels);
    console.log(data);
    return (
        <div className='container mx-auto my-0 grid grid-cols-4 gap-10 overflow-auto p-3'>
            {
                data.map((model) => (
                    <ModelCard model={model} key={model.id} ></ModelCard>
                ))
            }
        </div>
    );
};

export default Model;