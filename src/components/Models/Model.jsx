import React, { use } from 'react';
import ModelCard from '../ModelCard/ModelCard';

const Model = ({ getModels }) => {
    const data = use(getModels);
    console.log(data);
    return (
        <div className='border-2 container mx-auto my-1 grid grid-cols-4 gap-10 overflow-auto p-10'>
            {
                data.map((model) => (
                    <ModelCard model={model}></ModelCard>
                ))
            }
        </div>
    );
};

export default Model;