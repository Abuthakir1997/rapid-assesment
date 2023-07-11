import React from 'react';
import "./categorie-list.styles.scss";

export const CategorieList = (props) => {
    const { name, approved, pending, competitorFirst, competitorSecond, hasSubCategory } = props;
    return (
        <>
            <div className={`categorie-list-container ${hasSubCategory.length ? "has-sub-category" : ""}`} >
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
