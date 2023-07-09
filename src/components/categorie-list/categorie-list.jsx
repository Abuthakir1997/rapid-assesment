import React from 'react';
import "./categorie-list.styles.scss";
import useCategoriesDataHook from '../../custom-hooks/use-categories-data.hook';

export const CategorieList = (props) => {
    const { name, approved, pending, competitorFirst, competitorSecond, hasSubCategory } = props;
    const { showSubCategory } = useCategoriesDataHook();
    return (
        <>
            <div className={`categorie-list-container ${hasSubCategory.length ? "has-sub-category" : ""}`} onClick={(event) => showSubCategory(event)} >
                <div className='categorie-list-container-category-name'>
                    {name}
                </div>
                <div className='categorie-list-container-category-matches-section'>
                    <div className='categorie-list-container-category-approved'>
                        {approved}
                    </div>
                    <div className='categorie-list-container-category-pending'>
                        {pending}
                    </div>
                </div>
                <div className='categorie-list-container-category-non-matches-section'>
                    <div className='categorie-list-container-category-competitor-first'>
                        {competitorFirst}
                    </div>
                    <div className='categorie-list-container-category-competitor-second'>
                        {competitorSecond}
                    </div>
                </div>

            </div >
        </>
    )
}
