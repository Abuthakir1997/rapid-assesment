import React from 'react';
import useCategoriesDataHook from '../../custom-hooks/use-categories-data.hook';

const categoryListContainer = () => {
    const { categoryListElement } = useCategoriesDataHook();
    return (
        <div className=''>

        </div>
    )
}

export default categoryListContainer;